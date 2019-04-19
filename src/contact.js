require("dotenv").config();
const apiKey = process.env.MAILGUN_API_KEY;
const apiUrl = process.env.DOMAIN;
const contactEmail = process.env.CONTACT_EMAIL;
const mailgun = require("mailgun-js")({ apiKey, apiUrl });

const generateResponse = (body, statusCode) => {
  return {
    headers: {
      "access-control-allow-methods": "POST",
      "access-control-allow-origin": "*",
      "content-type": "application/json"
    },
    statusCode: statusCode,
    body: JSON.stringify(body)
  };
};

const sendEmail = data => {
  const { from, to, subject, text, html } = data;
  return mailgun.messages().send({ from, to, subject, text, html });
};

exports.handler = async (event, context, callback) => {
  // complain if method is not POST or event body is empty
  if (event.httpMethod !== "POST" || !event.body) {
    let response = generateResponse({ status: "Invalid Request" }, 200);
    return callback(null, response);
  }
  const data = JSON.parse(event.body);

  //-- Make sure we have all required data. Otherwise, complain.
  if (
    !data.name ||
    !data.email ||
    !data.message
  ) {
    let response = generateResponse({ status: "missing-information" }, 200);
    callback(null, response);
    return;
  }

  // build the email object
  const email = {
    from: data.email,
    to: contactEmail,
    subject: data.company + " (" + data.industry + ") - " + data.name,
    text: data.problem,
    html: ""
  };

  // attempt to send email
  try {
    const result = await sendEmail(email);
    let response = generateResponse({ result: result }, 200);
    return callback(null, response);
  } catch {
    let response = generateResponse({ status: "Error Sending Email" }, 200);
    return callback(null, response);
  }
};
