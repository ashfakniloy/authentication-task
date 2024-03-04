"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { PageSpinner } from "@/components/ui/spinner";
import GotipathLogo from "@/public/images/logo.png";
import FileIcon from "@/public/images/file-icon.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { storageLoading, storageValue: token } = useLocalStorage("token");

  if (storageLoading) {
    return <PageSpinner />;
  } else if (token) {
    router.replace("/");
  } else {
    return (
      <div className="flex justify-between">
        <div className="flex-1 flex flex-col justify-between">
          <div className="h-full">
            <Image
              src={GotipathLogo}
              alt="gotipath logo"
              height={52}
              className="px-6 py-5"
            />

            <div className="h-[90%] flex justify-center items-center">
              <div className="w-[400px]">
                <Image
                  src={FileIcon}
                  alt="title icon"
                  width={40}
                  height={40}
                  className="shadow-md rounded-md"
                />
                <div className="mt-5">{children}</div>
              </div>
            </div>
          </div>

          <p className="py-5 text-sm text-center text-custom-gray4">
            By continuing, you agree to the{" "}
            <Link href="" className="font-medium text-custom-blue">
              Legal Agreement
            </Link>{" "}
            and the{" "}
            <Link href="" className="font-medium text-custom-blue">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className=" w-[720px] h-screen sticky top-0">
          <Image
            src="/images/auth-cover.png"
            alt="gotipath cover"
            fill
            className="object-cover"
          />
        </div>
      </div>
    );
  }
}

// // with cookie based authentication
// import Image from "next/image";
// import Link from "next/link";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import GotipathLogo from "@/public/images/logo.png";
// import FileIcon from "@/public/images/file-icon.png";

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const token = cookies().get("token");

//   if (token) {
//     redirect("/");
//   }

//   return (
//     <div className="flex justify-between">
//       <div className="flex-1 flex flex-col justify-between">
//         <div className="h-full">
//           <Image
//             src={GotipathLogo}
//             alt="gotipath logo"
//             height={52}
//             className="px-6 py-5"
//           />

//           <div className="h-[90%] flex justify-center items-center">
//             <div className="w-[400px]">
//               <Image
//                 src={FileIcon}
//                 alt="title icon"
//                 width={40}
//                 height={40}
//                 className="shadow-md rounded-md"
//               />
//               <div className="mt-5">{children}</div>
//             </div>
//           </div>
//         </div>

//         <p className="py-5 text-sm text-center text-custom-gray4">
//           By continuing, you agree to the{" "}
//           <Link href="" className="font-medium text-custom-blue">
//             Legal Agreement
//           </Link>{" "}
//           and the{" "}
//           <Link href="" className="font-medium text-custom-blue">
//             Privacy Policy
//           </Link>
//         </p>
//       </div>

//       <div className=" w-[720px] h-screen sticky top-0">
//         <Image
//           src="/images/auth-cover.png"
//           alt="gotipath cover"
//           fill
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// }
