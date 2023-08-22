import LogoUkrMobil from '../../components/header/logoUkrMobil.tsx';
import BtnLogin from './BtnLogin.tsx';
import { useForm } from 'react-hook-form';
import { FORM_FIELD, INPUT_FIELD } from '../../shared/types/enums.ts';
import { EMPTY_STRING } from '../../shared/consts/defaultValues.ts';
import { IAuthLogin } from '../../shared/types/interfaces.ts';

import '../../components/style/loginPage.css';

export const LoginCard = () => {

  const formLogin = useForm<IAuthLogin>({
    defaultValues: {
      [INPUT_FIELD.NAME]: EMPTY_STRING,
      [INPUT_FIELD.PASSWORD]: EMPTY_STRING,
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: IAuthLogin) => {
    formLogin.reset()
    console.log('Form login:', data);
  };

  return (
    <>
      <form onSubmit={formLogin.handleSubmit(onSubmit)}>
        <div id="formWrapper">
          <div className={'form'} id="form">
            <LogoUkrMobil />
            <div className="form-item">
              <input
                type={INPUT_FIELD.NAME}
                placeholder={FORM_FIELD.NAME}
                {...formLogin.register(INPUT_FIELD.NAME)}
                className="form-style"
              />
            </div>

            <div className="form-item">
              <input
                type={INPUT_FIELD.PASSWORD}
                placeholder={FORM_FIELD.PASSWORD}
                className="form-style"
                {...formLogin.register(INPUT_FIELD.PASSWORD)}
              />
            </div>
            <BtnLogin />

          </div>
        </div>
      </form>
    </>
  );
};
