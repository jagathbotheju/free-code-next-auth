import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import { Role, User } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      profile(profile) {
        let role = "user";
        if (profile?.email === "jagathbotheju@gmail.com") {
          role = Role.ADMIN;
        }

        return {
          role,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          id: profile.id.toString(),
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      // profile(profile) {
      //   console.log("google profile", profile);

      //   let id = "";
      //   if (profile) {
      //     id = profile.sub;
      //   }
      //   return {
      //     ...profile,
      //     id,
      //   };
      // },
    }),
  ],
  callbacks: {
    //for server side
    async jwt({ token, user, account, profile }) {
      //console.log("account", account);
      //console.log("profile", profile);
      // if (
      //   account?.type === "oauth" &&
      //   account?.provider === "github" &&
      //   profile?.email === "jagathbotheju@gmail.com"
      // ) {
      //   user.role = "admin";
      // }
      return { ...token, ...user };
    },
    //for client side
    async session({ session, token }) {
      session.user = token as User;
      console.log("user", session.user);
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
