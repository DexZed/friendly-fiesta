import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { defaultValues, FormInputFields } from "../form/form.shcema";




export function useFormHooks() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputFields>({ defaultValues,
    resolver: zodResolver(FormInputFields)
   });

  return { control, handleSubmit, watch ,errors};
}
