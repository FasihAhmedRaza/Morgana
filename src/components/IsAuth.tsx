"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import useAuthStore from "@/lib/authStore";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const { isAuth: isUserLoggedIn } = useAuthStore();

    useEffect(() => {
      if (!isUserLoggedIn) {
        return redirect("/login");
      }
    }, []);

    if (!isUserLoggedIn) {
      return redirect("/login");
    }

    return <Component {...props} />;
  };
}
