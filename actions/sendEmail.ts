"use server"

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY)

import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

export const sendEmail = async (formdata: FormData) => {
    const senderEmail = formdata.get('senderEmail');
    const message = formdata.get('message');

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid Sender Email"
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }
    let data;
    try {
        await resend.emails.send({
            from: 'Contact  Form(Portfolio)<onboarding@resend.dev>',
            to: 'swad.mustasin.khan@gmail.com',
            subject: "messsage from contact",
            // text: message as string,

            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),

        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }
    return {
        data,
    }

}