import LogoUkrMobil from '../../components/header/logoUkrMobil.tsx';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import '../../components/style/loginPage.css';


export const Card = () => {
  const [selectedName, setSelectedName] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedName(event.target.value);
  };

  const handleName = () => {
    console.log("Your name:", selectedName);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(selectedName));
  }, [selectedName]);

  return (
    <>
      <div className={'formWrapper'} id="formWrapper">
        <div className={'form'} id="form">
          <LogoUkrMobil />
          <div className={"formSelect"}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Name</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={selectedName}
                label="Name"
                onChange={handleChange}
              >
                <MenuItem value={"Ivan"}>Ivan</MenuItem>
                <MenuItem value={"Dima"}>Dima</MenuItem>
                <MenuItem value={"Andriy"}>Andriy</MenuItem>
              </Select>
            </FormControl>

            <Stack direction="row" spacing={2}>
              <Link to="/markets">
                <Button onClick={() => handleName()} variant="contained" color="success">
                  Login
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};
