import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../components/utils/prisma";
import { compare } from "bcrypt";
import { verifyPassword } from "@/components/utils/auth";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        let user;
        try {
          user = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });
        } catch (e) {
          console.error(e);
          throw Error("Erreur interne du serveur. Ré-essaie plus tard");
        }

        const isPasswordValid = await compare(
          credentials?.password || "",
          user!.password
        );

        if (isPasswordValid) {
          return user;
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
