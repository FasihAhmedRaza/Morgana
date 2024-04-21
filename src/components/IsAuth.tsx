"use client";
import useAuthStore from "@/lib/authStore";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const router = useRouter();
    const { isAuth: isUserLoggedIn } = useAuthStore();

    useEffect(() => {
      if (!isUserLoggedIn) {
        return redirect("/login");
      }
    }, [isUserLoggedIn, router]);

    if (!isUserLoggedIn && !router) {
      return <Component {...props} />;
    }

    return <Component {...props} />;
  };
}
