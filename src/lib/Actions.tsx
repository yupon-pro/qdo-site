"use server";

import { redirect } from "next/navigation";
import { FormFields, FormState } from "./Definition";
import { FormScheme } from "./Scheme";
import nodemailer from "nodemailer";

export async function formAction(prevState: FormState, formData: FormData) {
  const safeParsedField = FormScheme.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    content: formData.get("content"),
  });

  if (!safeParsedField.success) {
    return {
      errors: safeParsedField.error.flatten().fieldErrors,
      message: "Fields Error: Missing Field Types.",
    };
  }

  try {
    const message = await sendGmail(safeParsedField.data);
    if (message) return { message };

  } catch (error) {
    return error instanceof Error ? { message: error.message } : { message: "Something went wrong." };
  }

  redirect("/contact");
}

async function sendGmail(contact: { [Key in FormFields]: string }): Promise<string | undefined> {
  const { name, email, content } = contact;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_ACCOUNT,
      pass: process.env.MAIL_PASS,
    },
  });

  const sendHTML = `
    <!DOCTYPE html>
    <html lang = "ja">
    <head>
        <title>Q-dai Agora</title>
        <meta content = "text/html; charset = utf-8" http-equiv = "Content-Type"/>
        <meta content = "width = device-width" name = "viewport"/>
        <style type = "text/css">
          body { width:100%; height:100%; margin:0; background-color:white; font-family:sans-serif; }
          .main { width:80%; padding: 30px; background-color:#f5f5f5;margin: auto; margin-top: 50px; text-align:center; }
          h1 { color:#008800; }
        </style>
    </head>
    <body>
            <div class = "main">
                <h4>${name}</h4>
                <p>${email}</p>
                <br />
                <p>${content}</p>
                <br/>
            </div>
    </body>
    </html>
    `;

  const mailOptions = {
    from: process.env.MAIL_ACCOUNT,
    to: "kyushu.debate.open.since2014@gmail.com",
    subject: "コンタクトフォームの転送",
    html: sendHTML,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
  } catch (error) {
    console.log(error);
    return "Failed to send Gmail.";
  }
}


// Error:
//   × Server actions must be async functions
// っていうエラーになるのよ。なに、これ。
