"use client";

import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { PageSpinner } from "@/components/ui/spinner";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { storageLoading, storageValue: token } = useLocalStorage("token");

  if (storageLoading) {
    return <PageSpinner />;
  } else if (!token) {
    router.replace("/sign-in");
  } else {
    return <>{children}</>;
  }
}

// // with cookie based authentication
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

// export default function LayoutDashboard({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const token = cookies().get("token");

//   if (!token) {
//     redirect("/sign-in");
//   }

//   return <>{children}</>;
// }
