import { z } from "zod";
export const registerSchemas = z.object({



  username: z.string({
    required_error: "username invalido ",
  }),
  email: z
    .string({
      required_error: "email invalido ",
    })
    .email({
      required_error: "email is not invalido ",
    })
    .min(6, {
      required_error: "email invalido ",
    }),
  password: z.string({
    required_error: "password invalido lregiste ",
  }),
});

export const loginSchemas = z.object({


  email: z
    .string({
      required_error: "email is invalido ",
    })
    .email({
      required_error: "email  invalido ",
    }),

  password: z.string({
    required_error: "password invalido  ",
  })
    .min(6, {
      required_error: "minimo 6 caracteres ",
    })
});
