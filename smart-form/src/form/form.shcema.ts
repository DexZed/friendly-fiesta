import z from "zod";

export const FormInputFields = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
  pictureUrl: z.url(),
  selectorField: z.string(),
  date: z.date(),
  check: z.boolean(),
});

export type FormInputFields = z.infer<typeof FormInputFields>;

export const defaultValues = {
  name: "",
  email: "",
  password: "",
  pictureUrl: "",
  selectorField:"",
  date: new Date(),
  check: true,
};