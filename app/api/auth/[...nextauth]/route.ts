import { prisma } from "@/lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, req) {
        const response = await prisma.users.findUnique({
          where: {
            email: credentials?.email,
            password: credentials?.password,
          },
        });

        console.log(response);
        if (response) return response;
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/auth",
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
