const nodemailer = require("nodemailer")

type VerifEmailMailerType = {
  to: string
  codeOTP: string
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sylvain.tshiasuma2017@gmail.com",
    pass: "oucbbuewtgcbxxut",
  },
})

export async function verifEmail({ to, codeOTP }: VerifEmailMailerType) {
  const msg = await transporter.sendMail({
    from: "Club KLUBA by Kaapital <noreply@kluba.club>",
    to: to,
    subject: "Email de Verification ",
    html: `Hello <br> Voici votre code de vérification :<br> ${codeOTP}`,
  })

  console.log("Message sent: %s", msg.messageId)
}