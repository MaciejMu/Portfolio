import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

type Data = {
  success: boolean;
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
    }: {
      fullname: String;
      phone: number;
      email: string;
      message: string;
    } = req.body;
    const msg = {
      to: "maciejmuter@gmail.com",
      from: "maciejmuter@gmail.com",
      subject: `${fullname.toUpperCase()} wysłał Ci wiadomość`,
      text: `Email => ${email} phone=> ${phone}`,
      html: `<strong>${message}</strong>`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch {
      res.status(200).json({ success: false });
    }
  }
}
