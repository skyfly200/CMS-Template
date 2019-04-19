require("dotenv").config();
import querystring from "querystring";
const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.DOMAIN;
const contactEmail = process.env.CONTACT_EMAIL;
const mailgun = require("mailgun-js")({ apiKey, domain });

const generateResponse = (body, statusCode) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body)
  };
};

exports.handler = async (event, context, callback) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return callback(null, generateResponse("Method Not Allowed", 405));
  }
  // complain if event body is empty
  if (!event.body) {
    return callback(null, generateResponse("Invalid Request", 400));
  }
  //-- Make sure we have all required data. Otherwise, complain.
  const data = querystring.parse(event.body);
  if (
    !data.name ||
    !data.email ||
    !data.message
  ) {
    return callback(null, generateResponse("Missing Information", 400));
  }

  // build the email object from the request body
  const email = {
    from: data.email,
    to: contactEmail,
    subject: "Contact Form - " + data.name,
    text: data.message,
    html: ""
  };

  // attempt to send email
  try {
    mailgun.messages().send(email, (error, body) => {
      let resp = error ? generateResponse("Error Sending Email", 500) : generateResponse(body, 200);
      return callback(null, resp);
    });
  } catch (error) {
    let resp = generateResponse("Server Error", 500);
    console.error(error);
    return callback(error);
  }
};
