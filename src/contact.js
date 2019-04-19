require("dotenv").config();
import querystring from "querystring";
const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.DOMAIN;
const contactEmail = process.env.CONTACT_EMAIL;
const mailgun = require("mailgun-js")({ apiKey, domain });

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
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  // complain if event body is empty
  if (!event.body) {
    return generateResponse({ status: "Invalid Request" }, 200);
  }
  //-- Make sure we have all required data. Otherwise, complain.
  const data = querystring.parse(event.body);
  if (
    !data.name ||
    !data.email ||
    !data.message
  ) {
    return generateResponse({ status: "Missing Information" }, 200);
  }

  // build the email object from the request body
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
    return generateResponse({ result: result }, 200);
  } catch {
    return generateResponse({ status: "Error Sending Email" }, 200);
  }
};
