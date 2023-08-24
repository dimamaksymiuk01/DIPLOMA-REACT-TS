import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {FC, useState} from "react";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface IPropsBasicModal {
    onSubmit: (data: string) => void;
}
export const BasicModal:FC<IPropsBasicModal> = ({onSubmit}) => {
  const [open, setOpen] = React.useState(false);
    const [coment, setComent] = useState<string>("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handClick = () =>{
      onSubmit(coment)
      handleClose()
  }
  return (
    <div className={'boxModal'}>
      {/*<Button onClick={handleOpen}>Commit</Button>*/}
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab onClick={handleOpen} color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
    </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style} className={"md"}>
            <textarea className={"textArr"} name={"coment"} onChange={(event) => setComent(event.target.value)}/>
            <button  className={"btnCommit"} onClick={handClick} >Add commit</button>
        </Box>
      </Modal>
    </div>
  );
};