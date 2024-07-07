"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const ContactCreate = async (data: Prisma.ContatctCreateInput) => {
  await prisma.contatct.create({ data });
  revalidatePath("/");
};
