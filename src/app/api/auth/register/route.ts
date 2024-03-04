import { NextResponse } from "next/server"
import {hash} from 'bcrypt'
import { prisma } from "../../../../components/utils/prisma"
import { verifEmail } from "../../../../components/utils/verifEmail"

export async function POST(request: Request){
    let user
    try {
        const { firstName,lastName,email,phone,password } = await request.json()
        const hashedePassword = await hash(password.trim(), 10)

        user = await prisma.user.create({
            data: {
                firstName : firstName,
                lastName:  lastName,
                phone:phone,
                email: email.toLowerCase().trim(),
                password: hashedePassword
              },
        })

        const otp = Math.floor(100000 + Math.random() * 900000)

        const token = await prisma.oTP.create({
            data: {
                code: otp.toString(),
              userId: user.id,
            },
          })

        verifEmail({ to: user.email, codeOTP: otp.toString() }).catch(console.error)

    } catch (error) {
        console.log({error})
    }

    console.log({...user})

    return NextResponse.json({...user})
}