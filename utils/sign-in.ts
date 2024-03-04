// // with cookie based authentication
// "use server";

// import { cookies } from "next/headers";
// import { revalidatePath } from "next/cache";
// import { API_URL } from "@/config";
// import { SignInProps, signInSchema } from "@/schemas/sign-in-schema";

// export async function signIn({ values }: { values: SignInProps }) {
//   const parsed = signInSchema.safeParse(values);

//   if (!parsed.success) {
//     const { errors } = parsed.error;
//     console.log("zod validation error", errors);
//     return {
//       success: false,
//       message: (errors[0].path[0] + " " + errors[0].message).toLowerCase(),
//       errorField: errors[0].path[0],
//     };
//   }

//   const {
//     data: { email, password, remember },
//   } = parsed;

//   const url = `${API_URL}/auth/login`;

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await response.json();

//   console.log("data", data);

//   if (response.ok) {
//     // if (email) {
//     const maxAge = remember ? 7 * 24 * 60 * 60 : 24 * 60 * 60;

//     // cookies().set("token", email, {
//     cookies().set("token", data.access_token, {
//       maxAge,
//       httpOnly: true,
//       sameSite: "strict",
//       secure: process.env.NODE_ENV === "production",
//     });

//     revalidatePath("/", "layout");
//     return { success: true, message: data.message };
//   } else {
//     return {
//       success: false,
//       message: data.details?.[0]?.error || data.message,
//       errorField: data.details?.[0]?.field,
//     };
//   }
// }
