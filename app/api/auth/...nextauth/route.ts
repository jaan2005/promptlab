import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma
const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    // THIS IS THE NEW, CORRECT CALLBACK
    async session({ session, user }) {
      // Return a *new* session object that includes the user ID
      return {
        ...session, // Keep the old session properties (like 'expires')
        user: {
          ...session.user, // Keep the old user properties (name, email, image)
          id: user.id,      // Add the user's ID
        },
      };
    },
  },
});