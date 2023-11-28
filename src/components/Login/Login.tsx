import { BaseButton } from '../BaseComponents/Button/BaseButton';
import BaseInput from '../BaseComponents/Input/BaseInput';
import './Login.scss';

export default function Login() {
  return (
    <div className="login">
      <div className="login__box">
        <h2 className="login__box--title">Login</h2>
        <form className="login__box--form">
          <BaseInput name="email" type="email" label="Email:" required />
          <BaseInput name="password" type="password" label="Senha:" required />

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
          <BaseButton text='Login' type='submit' />
        </form>

        <div className="login__box--form-signup-link">
          <p>
            Ainda não tem uma conta?
            <a className="login__bo--form-signup-link-text" href="#">
              Cadastrar-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
