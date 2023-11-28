import './BaseButton.scss';

interface IBaseInputProps {
  type?:  'button' | 'submit',
  text: String
}

export function BaseButton ({ type = 'button', text }: IBaseInputProps) {
  return (
    <button className="base-button" type={type}>
      { text }
    </button>
  )
}