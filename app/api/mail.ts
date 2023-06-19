import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

type Data = {
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const {
      fullname,
      phone,
      email,
      message,
    }: { fullname: string; phone: string; email: string; message: string } =
      req.body;

    const msg = `Name: ${fullname}\r\n Phone: ${phone}\r\n Email: ${email}\r\n Message: ${message}`;

    const data = {
      to: "maciejmuter@gmail.com",
      from: "maciejmuter@gmail.com",
      subject: `${fullname.toUpperCase()} Wysłał/a Ci wiadomość z Portfolio`,
      text: `Email => ${email}`,
      html: msg.replace(/\r\n/g, "<br>"),
    };
    try {
      await sgMail.send(data);
      res.status(200).json({ message: "Your message was sent successfully." });
    } catch (err) {
      res
        .status(500)
        .json({ message: `There was an error sending your message. ${err}` });
    }
  }
}
