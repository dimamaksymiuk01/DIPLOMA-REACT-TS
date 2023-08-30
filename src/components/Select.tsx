// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { useState } from 'react'
//
// export default function SelectMarket() {
//   const [age, setAge] = useState('');
//
//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value);
//   };
//
//   return (
//     <div>
//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel id="demo-simple-select-standard-label">Market</InputLabel>
//         <Select
//           labelId="demo-simple-select-standard-label"
//           id="demo-simple-select-standard"
//           value={age}
//           onChange={handleChange}
//           label="Age"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={"Techno+"}>Techno+</MenuItem>
//           <MenuItem value={"UkrMobil"}>UkrMobil</MenuItem>
//           <MenuItem value={"Prom"}>Prom</MenuItem>
//           <MenuItem value={"OLX"}>OLX</MenuItem>
//           <MenuItem value={"VsePlus"}>VsePlus</MenuItem>
//           <MenuItem value={"Other"}>Other</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }


import React from "react";
import { useFormContext } from "react-hook-form";
import { ISelectProps } from "../shared/types/interfaces.ts";

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
