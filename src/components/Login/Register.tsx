import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BaseButton } from '../BaseComponents/Button/BaseButton';
import BaseInput from '../BaseComponents/Input/BaseInput';
import './Login.scss';

export default function Register () {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  })

  const [passwordError, setPasswordError] = useState<string | null>(null)

  function changeInput (e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setPasswordError(null)
  };

  function submitNewRegister (e: React.FormEvent): void {
    e.preventDefault()
    if (formData.password !== formData.repeatPassword) {
      setPasswordError('As senhas não coincidem.')
      return
    }

    setPasswordError(null)

    // TO DO: SEND DATA TO API REST
  };

  return (
    <div className="login">
      <div className="login__box">
        <h2 className="login__box--title">Novo Cadastro</h2>
        <form className="login__box--form" onSubmit={submitNewRegister}>
          <div className="login__box--form-field">
            <BaseInput
              name="email"
              type="email"
              label="Email:"
              value={formData.email}
              onChange={changeInput}
              required
            />
          </div>
          <div className="login__box--form-field">
            <BaseInput
              name="password"
              type="password"
              label="Senha:"
              value={formData.password}
              onChange={changeInput}
              hasErrors={!!passwordError}
              required
            />
            {passwordError && <small className="login__box--error-message">{passwordError}</small>}
          </div>
          <div className="login__box--form-field">
            <BaseInput
              name="repeatPassword"
              type="password"
              label="Confirme a senha:"
              value={formData.repeatPassword}
              onChange={changeInput}
              hasErrors={!!passwordError}
              required
            />
            {passwordError && <small className="login__box--error-message">{passwordError}</small>}
          </div>




          <BaseButton text='Cadastrar-se' type='submit' />
        </form>

        <div className="login__box--form-signup-link">
          <p>
            Já tem uma conta?
            <Link to="/login" className="login__bo--form-signup-link-text">
              Faça o login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}