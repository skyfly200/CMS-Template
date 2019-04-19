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

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return generateResponse("Method Not Allowed", 405);
  }
  // complain if event body is empty
  if (!event.body) {
    return generateResponse("Invalid Request", 400);
  }
  //-- Make sure we have all required data. Otherwise, complain.
  const data = querystring.parse(event.body);
  if (
    !data.name ||
    !data.email ||
    !data.message
  ) {
    return generateResponse("Missing Information", 204);
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
      let resp = error ? generateResponse("Error Sending Email", 400) : generateResponse(body, 200);
      console.log(resp);
      console.log("Succeded");
      return resp2;
    });
  } catch (error) {
    let resp = generateResponse("Server Error", 500);
    console.error(error);
    return resp;
  }
};
