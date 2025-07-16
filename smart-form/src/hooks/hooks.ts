import { useForm } from "react-hook-form";


interface IFormInput {
    name: string;
    email: string;
    password: string;
    pictureUrl: string;
     selectorField: string;
    date: string;
    check: boolean;

}

export function useFormHooks(){
    const {control,handleSubmit} = useForm()

    return {control,handleSubmit}
}