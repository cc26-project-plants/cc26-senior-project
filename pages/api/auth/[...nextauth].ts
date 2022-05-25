import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Provider configuration.
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "rando@testo.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        if (
          credentials?.username === "rando" &&
          credentials?.password === "test"
        ) {
          return {
            id: 2,
            name: "Rando",
            email: "rando@testo.com",
          };
        }
        return null;
      },
    }),
  ],
  //Encryption
  callbacks: {
    jwt: async ({ user, token }) => {
      //If user found
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    //Attach token to session
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
  },
});
