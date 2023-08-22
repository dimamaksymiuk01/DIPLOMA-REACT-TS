import { FC, forwardRef, useState } from 'react';
import ShowPasswordIcon from '../../../public/icons/showPassword.svg';
import HidePasswordIcon from '../../../public/icons/hidePassword.svg';
import {IPropsInputGroup} from "../../shared/types/interfaces.ts";
import styles from '../style/Input.module.scss';
import classNames from "./classNames.ts";
import { INPUT_FIELD } from '../../shared/types/enums.ts'

const InputGroup: FC<IPropsInputGroup> = forwardRef<HTMLInputElement, IPropsInputGroup>(
  (
    {
      value,
      type = 'text',
      name,
      id,
      classNameInput,
      classNameError,
      classNameWrapper,
      onChange,
      errorMessage,
      placeholder,
      disabled,
      // autoFocus = false,
      ...otherProps
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={classNames(styles.inputWrapper, classNameWrapper)}>
        <input
          value={value}
          type={showPassword ? INPUT_FIELD.TEXT : type}
          id={id}
          className={classNames(styles.input, classNameInput, {
            [styles.withError]: errorMessage,
          })}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          {...otherProps}
        />
        {type === INPUT_FIELD.PASSWORD && (
          <span className={styles.passwordToggle} onClick={handleTogglePassword}>
            {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
          </span>
        )}
        {errorMessage && (
          <p className={classNames(styles.errorMassage, classNameError)}>
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

export default InputGroup;
