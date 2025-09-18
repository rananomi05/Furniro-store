// app/lib/auth.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log('received credentials:', credentials); // debug
        if (
          credentials?.username === "noman@gmail.com" &&
          credentials?.password === "11112222"
        ) {
          return { id: "1", name: "Noman Rajpoot", email: "noman987rajpoot@gmail.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
