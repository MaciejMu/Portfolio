import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "maciejmuter@gmail.com", // Your email where you'll receive emails
      from: `${req.body.message}`, // your website email address here
      phone: `${req.body.phone}`,
      html: `<div>You've got a mail from ${req.body.message}
      <div>
      <p>Message:</p>
      <p>${req.body.message}</p>
      <br>
      </div></div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
