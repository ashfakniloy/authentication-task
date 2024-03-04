// // with cookie based authentication
// "use server";

// import { revalidatePath } from "next/cache";
// import { cookies } from "next/headers";

// export async function signOut() {
//   cookies().delete("token");
//   revalidatePath("/", "layout");
// }
