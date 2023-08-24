import {FC} from "react";
import {useFormContext} from "react-hook-form";


export interface ISelectProps{
    field: string;
}


export const SelectMarket:FC<ISelectProps> = ({ field})=> {
  const { register } = useFormContext();

  return (
      <div className={"box"}>
          <select
                  {...register?.(field)}
              defaultValue={"Techno"}
          >
          <option value="Techno">Techno+</option>
          <option value="UkrMobil">UkrMobil</option>
          <option value="Prom">Prom</option>
          <option value="OLX">OLX</option>
          <option value="VsePlus">VsePlus</option>
              <option value="Other">Other</option>

          </select>
      </div>
  );
}