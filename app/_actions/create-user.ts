"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "../_lib/prisma";

export const UserCreate = async (data: Prisma.UserCreateInput) => {
  await prisma.user.create({ data });
  revalidatePath("/");
};
