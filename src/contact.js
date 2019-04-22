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

exports.handler = function(event, context, callback) {
  if (event.httpMethod !== "POST") { // Only run on POST requests
    return callback(null, generateResponse("Method Not Allowed", 405));
  } else if (!event.body) { // complain if event body is empty
    return callback(null, generateResponse("Invalid Request", 204));
  }
  //-- Make sure we have all required data. Otherwise, complain.
  const data = JSON.parse(event.body);
  if (
    !data.name ||
    !data.email ||
    !data.message
  ) {
    return callback(null, generateResponse("Missing Information", 204));
  }
  // build the email object from the request body
  const email = {
    from: data.email,
    to: contactEmail,
    subject: data.subject ? data.subject : "Contact Form - " + data.name,
    text: data.message,
    html: ""
  };
  // attempt to send email
  try {
    mailgun.messages().send(email, (error, body) => {
      let resp = generateResponse({body}, 200);
      return callback(null, resp);
    });
  } catch (error) {
    let resp = generateResponse("Server Error", 500);
    console.error(error);
    return callback(error);
  }
};
