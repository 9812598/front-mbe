// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter, mailOptions } from "@/config/nodemailer"


const handler = async (req, res) => {
  
  if (req.method === 'POST'){
    const data = req.body
    if (!data.name || !data.phone) {
      return res.status(400).json({ massage: 'Bad request' })
    }
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: 'From the MBE website',
      text: 'test string',
      html: `<h3>Данные из формы</h3><p>Телефон: ${req.body.phone}</p><p>Имя: ${req.body.name}</p>`
    })
    return res.status(200).json({ success: true })

  } catch (error) {
    console.log(error)
    return res.status(400).json({ massage: error.massage})
  }

  return res.status(400).json({ massage: 'Bad request' })
}

export default handler