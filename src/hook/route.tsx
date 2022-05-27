import { useRouter } from "next/router";
import React from "react";
import useAuth from "./auth";

export function withPubic(Component: any) {
  return function WithPublic(props: any) {
    const auth: any = useAuth();
    const router = useRouter();

    if (auth.user) {
      router.replace("/");
      return <h2>Loading...</h2>;
    }
    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component: any) {
  return function WithProtected(props: any) {
    const auth: any = useAuth();
    const router = useRouter();

    if (!auth.user) {
      router.replace("/login");
      return <h2>Loading...</h2>;
    }
    return <Component auth={auth} {...props} />;
  };
}
