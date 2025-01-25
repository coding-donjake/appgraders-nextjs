import "./style.scss";
import { ChangeEvent, ReactNode } from "react";

type dropDownOption = {
  text: string;
  value: string | number;
};

interface InputProps {
  id: string;
  label?: ReactNode;
  placeholder?: string;
  value?: string | number | undefined;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "time"
    | "datetime-local"
    | "textarea"
    | "dropdown";
  min?: number;
  max?: number;
  rows?: number;
  options?: dropDownOption[];
  required?: boolean;
  processing?: boolean;
  disabled?: boolean;
  onChange?: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export const PrimaryInput = ({
  id,
  label,
  placeholder,
  value,
  type = "text",
  min,
  max,
  rows,
  options,
  required,
  processing,
  disabled,
  onChange,
}: InputProps) => {
  return (
    <div className="inpt inpt-primary">
      <label htmlFor={id}>
        {label}{" "}
        {required ? <span className="required-indicator">*</span> : null}
      </label>
      {type === "dropdown" ? (
        <select
          id={id}
          name={id}
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
        >
          {options?.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          rows={rows}
          required={required}
          disabled={disabled}
          onChange={onChange}
        />
      ) : (
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          defaultValue={value}
          type={type}
          min={min}
          max={max}
          required={required}
          disabled={disabled}
          onChange={onChange}
        />
      )}
    </div>
  );
};
