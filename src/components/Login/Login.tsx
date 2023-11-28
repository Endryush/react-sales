import React from 'react';
import './Login.scss';

export default function Login() {
  return (
    <div className="login">
      <div className="login__box">
        <h2 className="login__box--title">Login</h2>
        <form className="login__box--form">
          <label className="login__box--form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="login__box--form-input"
            type="email"
            id="email"
            name="email"
            required
          />

          <label className="login__box--form-label" htmlFor="password">
            Senha:
          </label>
          <input
            className="login__box--form-input"
            type="password"
            id="password"
            name="password"
            required
          />

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

          <a href="#" className="login__box--form-forgot-password-link">
            Esqueci a senha
          </a>

          <button className="login__box--form-button" type="submit">
            Login
          </button>
        </form>

        <div className="login__box--form-signup-link">
          <p>
            Ainda não tem uma conta?{' '}
            <a className="login__bo--form-signup-link-text" href="#">
              Cadastrar-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
