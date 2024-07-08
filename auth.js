import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getUserByEmail } from "./app/data/users"

export const {
  auth,
  signIn,
  signOut,
  handlers
} = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials");
          return null;
        }
        
        try {
          console.log("Attempting to get user with email:", credentials.email);
          const user = await getUserByEmail(credentials.email);
          console.log("User found:", user);
          
          if (user) {
            const isMatch = user.password === credentials.password;
            if (isMatch) {
              console.log("Password match, returning user");
              return { id: user.id, email: user.email, name: user.name };
            } else {
              console.log("Password mismatch");
              throw new Error("Email or Password is not correct");
            }
          } else {
            console.log("User not found");
            throw new Error("User not found");
          }
        } catch (error) {
          console.error("Error in authorize function:", error);
          throw error;
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET // Add this line

})











