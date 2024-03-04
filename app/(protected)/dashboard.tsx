"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";
// import { signOut } from "@/utils/sign-out";  // with cookie based authentication

export default function Dashboard() {
  const router = useRouter();
  const { removeStorageValue } = useLocalStorage("token");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-400">Dashboard</h1>
      <Button
        type="button"
        className="mt-5"
        onClick={() => {
          removeStorageValue();
          router.push("/sign-in");
        }}
        // onClick={() => {
        //    signOut();
        //    router.refresh();
        // }}
      >
        Sign Out
      </Button>
    </div>
  );
}
