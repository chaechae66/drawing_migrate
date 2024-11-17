"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export default async function action(path: string, id: number) {
  try {
    const res = await fetch(`${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (res.status === 200) {
      revalidateTag(String(id));
      revalidatePath(path);
    }
  } catch (error) {
    console.error(error);
  }
}
