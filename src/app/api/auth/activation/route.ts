import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { prisma } from "../../../../components/utils/prisma";
import { verifEmail } from "../../../../components/utils/verifEmail";

export async function POST(request: Request) {
  let user;
  try {
    const { email, code } = await request.json();

    user = await prisma.user.findFirst({
      where: {
        otp: {
          some: {
            code: code,
          },
        },
      },
    });

    user = await prisma.user.update({
      where: {
        id: user!.id,
      },
      data: {
        activated: true,
      },
    });

    await prisma.oTP.delete({
      where: {
        code: code,
      },
    });
  } catch (error) {
    console.log({ error });
  }

  console.log({ ...user });

  return NextResponse.json({ ...user });
}
