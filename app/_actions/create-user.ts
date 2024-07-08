"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const UserCreate = async (data: Prisma.UsersCreateInput) => {
  console.log(data);
  await prisma.users.create({ data });
  revalidatePath("/");
};
