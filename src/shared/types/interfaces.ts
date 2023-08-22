import {INPUT_FIELD} from "./enums.ts";
import {ChangeEvent} from "react";

export interface IPropsInputGroup {
  type?: INPUT_FIELD;
  name?: string;
  id?: string;
  value?: string;
  className?: string;
  classNameInput?: string;
  classNameError?: string;
  errorMessage?: string;
  classNameWrapper?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

export interface IAuthLogin {
  name: string;
  password: string;
}

export interface Locale {
  title: string;
}