import './BaseInput.scss';

interface IBaseInputProps {
  type?: string,
  name: string,
  label: string,
  required?: boolean
}

export default function BaseInput ({ type = 'text', name, label, required = false}: IBaseInputProps) {
  return (
    <div className="base-input">
      <label className="base-input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="base-input__field"
        type={type}
        id={name}
        name={name}
        required={required}
      />
    </div>
  )
}