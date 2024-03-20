import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

export default function ColorButtons() {
      const { t } = useTranslation();

  return (
      <div className={'buttonSend'}>
    <Stack direction="row" spacing={2}>
      <Button className={'btn'} type={"submit"} variant="contained" color="success">
        {t('MARKETS.BTN')}
      </Button>
    </Stack>
      </div>
  );
}