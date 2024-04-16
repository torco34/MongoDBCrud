import { z } from "zod";
export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Title requerido",
  }),
  description: z.string({
    required_error: "description requerido",
  }),
  date: z.string().datetime().optional(),
});
