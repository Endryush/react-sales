import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BaseButton } from '../BaseComponents/Button/BaseButton';
import BaseInput from '../BaseComponents/Input/BaseInput';
import './Login.scss';

export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  function changeInput (e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  };

  function login (e: React.FormEvent): void {
    e.preventDefault()
    console.log(formData)

    // TO DO: SEND DATA TO API REST
  };
  return (
    <div className="login">
      <div className="login__box">
        <h2 className="login__box--title">Login</h2>
        <form className="login__box--form" onSubmit={login}>
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
              required 
            />
          </div>

          <div className="login__box--form-checkbox">
            <input
              className="login__box--form-checkbox__input"
              type="checkbox"
              id="remember"
              name="remember"
              
            />
            <label
              className="login__box--form-checkbox__label"
              htmlFor="remember"
            >
              Manter conectado
            </label>
          </div>
          <small className="login__box--form-forgot-password-link">
            <Link to="/forgotPassword">
                Esqueci a senha
            </Link>
          </small>
          <BaseButton text='Login' type='submit' />
        </form>

        <div className="login__box--form-signup-link">
          <p>
            Ainda não tem uma conta?
            <Link to="/signup" className="login__bo--form-signup-link-text">
              Cadastrar-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
