import { FC } from "react";
import { useFormContext } from "react-hook-form";
import {IPropsInputGroup} from '../../shared/types/interfaces.ts'

const InputGroup: FC<IPropsInputGroup> = ({
  children,
  type = "text",
  name,
  id,
  classNameInput,
  classNameError, classNameInputWrapper,
    classNameLabel,
  onClick,
  onChange,
  field = "",
  error,
  placeholder,
    label
}) => {
  const { register } = useFormContext() || {};
  return (
    <div className={classNameInputWrapper}>

        {children}
        <input
          {...register?.(field)}
          type={type}
          id={id}
          className={classNameInput}
          name={name}
          placeholder={placeholder}
          onClick={onClick}
          onChange={onChange}

        />
       <label className={classNameLabel} htmlFor={id}>{label}</label>
        {error && <p className={classNameError}> {error} </p>}

    </div>
  );
};

export default InputGroup;