import {FORM_FIELD} from "./enums.ts";

export type FormData = {
  [FORM_FIELD.NAME]: string;
  [FORM_FIELD.PASSWORD]: string;
};

export type LoginFormTable = {
    client: string;
    product: string;
    device: string;
    market: string;
    date: string;
    currentDate: string;
    comment: string;
    master: string;
    key: string
    a: string,
    b: string,
    id: string,
};

export type MyProducts = {
  device?: string;
  product?: string;
  category?: string;
  amount?: string;
  price?: number;
  key: string;
  name: string;
  };
