import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

type FormInputFields = z.infer<typeof FormInputFields>;

const FormInputFields = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
  pictureUrl: z.url(),
  selectorField: z.string(),
  date: z.date(),
  check: z.boolean(),
});
const defaultValues = {
  name: "",
  email: "",
  password: "",
  pictureUrl: "",
  selectorField:"",
  date: new Date(),
  check: true,
};
export function useFormHooks() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues,
    resolver: zodResolver(FormInputFields)
   });

  return { control, handleSubmit, watch ,errors};
}
