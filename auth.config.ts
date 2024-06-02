 import type { NextAuthConfig, Session } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // authorized({ request: { nextUrl }, auth }) {
     
    //   const isLoggedIn = !!auth?.user;
    //   const isOnLoginPage = nextUrl.pathname.startsWith("/login");
    //   const isOnSignupPage = nextUrl.pathname.startsWith("/signup");
    //   const isOnProfilePage = nextUrl.pathname.startsWith("/profile");
    //   if (isOnProfilePage) {
    //       if (isLoggedIn) return true;
    //       return false; // Redirect unauthenicated users to login page
    //   } else if (isLoggedIn && (isOnLoginPage || isOnSignupPage)) {
    //       return Response.redirect(new URL("profile", nextUrl));
    //   }
    //   return true;
    // },
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
    
      if (isLoggedIn) {
        // Authenticated user trying to access login or signup page
        const isOnLoginPage = nextUrl.pathname.startsWith("/login");
        const isOnSignupPage = nextUrl.pathname.startsWith("/signup");
    
        if (isOnLoginPage || isOnSignupPage) {
          return Response.redirect(new URL("profile", nextUrl));
        }
      } else {
        // Unauthenticated user trying to access the profile page
        const isOnProfilePage = nextUrl.pathname.startsWith("/profile");
    
        if (isOnProfilePage) {
          return Response.redirect(new URL("/", nextUrl));
        }
      }
    
      // For all other cases, allow access
      return true;
    },    

    async session({ session, token }: {
      session: Session;
      token?: { sub?: string };
    }) {
      if (token?.sub) (session.user as { id: string }).id = token.sub;
      return session;
    }
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig; 