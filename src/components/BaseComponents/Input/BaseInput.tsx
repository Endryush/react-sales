import classNames from 'classnames'; 
import './BaseInput.scss';

interface IBaseInputProps {
  type?: string,
  name: string,
  label: string,
  required?: boolean,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  hasErrors?: boolean
}

export default function BaseInput ({ type = 'text', name, label, required = false, onChange, value, hasErrors}: IBaseInputProps) {
  const inputClasses = classNames('base-input__field', {
    'base-input__field--error': hasErrors,
  });
  return (
    <div className="base-input">
      <label className="base-input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={inputClasses}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}