// import NextAuth from "next-auth";

// import { authOptions } from "@/app/lib/auth";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };




// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        console.log("inside authorize:", username, password);

        if (username === "noman@gmail.com" && password === "11112222") {
          return {
            id: "1",
            name: "Noman Rajpoot",
            email: "noman987rajpoot@gmail.com",
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
