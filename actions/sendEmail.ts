"use server";

import React from "react";
import { Resend } from "resend";
import { renderAsync } from "@react-email/render";
import ContactFormEmail from "../email/contact-form-email";
import { errorMessage } from "@/utils/toastMessages";

const resend = new Resend(process.env.RESEND_API_KEY || "re_5eRffk5L_DBU5gzZpqjS6XeH5qyEAZrJE");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  //email service: https://resend.com/
  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "faizanahmedraza35@gmail.com",
      subject: "Message from contact form (morganaholdings)",
      reply_to: senderEmail as any,
      html: await renderAsync(
        React.createElement(ContactFormEmail, {
          message: message as any,
          senderEmail: senderEmail as any,
        })
      ),
    });
  } catch (error: unknown) {
    return {
      error: errorMessage(error),
    };
  }

  return {
    data,
  };
};
