import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { IPropsInputGroup } from "../../shared/types/interfaces.ts";

import "../style/input.css";

const InputGroup: FC<IPropsInputGroup> = ({
  children,
  type = "text",
  name,
  id,
  classNameInput,
  classNameError,
  classNameLabel,
  onClick,
  onChange,
  field = "",
  error,
  label,
}) => {
  const { register } = useFormContext() || {};

  const shouldRenderLabel = type !== "date"; // Визначаємо, чи треба рендерити label

  return (
    <div className={"group"}>
      {children}
      <input
        {...register?.(field)}
        type={type}
        id={id}
        className={classNameInput}
        name={name}
        onClick={onClick}
        onChange={onChange}
        required
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      {shouldRenderLabel && (
        <label className={classNameLabel} htmlFor={id}>
          {label}
          {name}
        </label>
      )}
      {error && <p className={classNameError}> {error} </p>}
    </div>
  );
};

export default InputGroup;
