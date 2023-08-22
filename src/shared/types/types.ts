import {FORM_FIELD} from "./enums.ts";

export type FormData = {
  [FORM_FIELD.NAME]: string;
  [FORM_FIELD.PASSWORD]: string;
};