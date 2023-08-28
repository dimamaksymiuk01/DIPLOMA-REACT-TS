import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function ColorButtons() {
  return (
      <div className={'buttonSend'}>
    <Stack direction="row" spacing={2}>
      <Button className={'btn'} type={"submit"} variant="contained" color="success">
        Send
      </Button>
    </Stack>
      </div>
  );
}