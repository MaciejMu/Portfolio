// plik api/contact.js
import sgMail from "@sendgrid/mail";

const sendGridApiKey = process.env.SENDGRID_API_KEY;

export default async function handler(req, res) {
  if (req.method === "POST") {
    sgMail.setApiKey(sendGridApiKey);

    const { name, email, message } = req.body;

    const msg = {
      to: "maciejmuter@gmail.com",
      from: email,
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending message" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
