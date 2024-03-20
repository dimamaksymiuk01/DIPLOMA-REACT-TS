import { InputHTMLAttributes, ReactNode } from 'react'

export interface IPropsInputGroup extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  type?: "text" | "number" | "email" | "password" | "checkbox" | "date";
  name: string;
  id?: string;
  classNameInput?: string;
  classNameError?: string;
  classNameInputWrapper?: string;
  onClick?: () => void;
  onChange?: () => void;
  field?: string;
  error?: string;
  placeholder?: string;
  label?: string
  classNameLabel?: string;
}
export interface IAuthLogin {
  name: string;
  password: string;
}

export interface Locale {
  title: string;
}

export interface ISelectProps{
    field: string;
}