import React from "react";
import { useFormContext } from "react-hook-form";
import { ISelectProps } from "../types/interfaces.ts";

import "./style/selectMarkets.scss";

export const Select: React.FC<ISelectProps> = ({ field }) => {
  const { register } = useFormContext();

  return (
    <div className="custom-select">
      <select className="styled-select" {...register?.(field)} defaultValue={"Techno"}>
        <option value="Techno">Techno+</option>
        <option value="UkrMobil">UkrMobil</option>
        <option value="Prom">Prom</option>
        <option value="OLX">OLX</option>
        <option value="VsePlus">VsePlus</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};
