import { z } from "zod";

const formSchemaZod = z.object({
  email: z
    .string({
      required_error: "O campo email é obrigatório.",
    })
    .email({ message: "Endereço de email inválido." }),
  password: z
    .string({
      message: "O campo senha é obrigatório.",
    })
    .min(8, { message: "A senha deve ter pelos menos 8 caracteres." }),
});

export default formSchemaZod;
