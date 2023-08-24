import * as yup from "yup";

export const schemaRegister = yup.object({
  client: yup
    .string()
    .required("Поле є обовязковим")
    .min(2, "Мінімум два символа!")
    .max(70, "Максимум 30 символів"),
    product: yup
    .string()
    .required("Поле є обовязковим")
    .min(2, "Мінімум два символа!")
    .max(70, "Максимум 30 символів"),
     device: yup
    .string()
    .required("Поле є обовязковим")
    .min(2, "Мінімум два символа!")
    .max(70, "Максимум 30 символів"),
     date: yup
    .string()
    .required("Поле є обовязковим")
});