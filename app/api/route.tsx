import mail from "@sendgrid/mail";
import { NextResponse } from "next/server";

const apiKey = process.env.SENDGRID_API_KEY || "";
mail.setApiKey(apiKey);

type ResponseData = {
  status?: string;
  message?: string;
};

export async function POST(request: Request) {
  let response: ResponseData = {};
  const body = await request.json();

  const message = `
    FullName: ${body.fullname}\r\n
    Phone: ${body.phone}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}`;

  const data = {
    to: "maciejmuter@gmail.com",
    from: "maciejmuter@gmail.com",
    subject: "Wiadomość ze strony portfolio",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await mail
    .send(data)
    .then(() => {
      response = {
        status: "success",
        message: "Twoja wiadomość została wysłana",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Błąd: ${error}`,
      };
    });

  return NextResponse.json(response);
}
