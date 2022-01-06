import './LoginRegister.css'
import { Link } from 'react-router-dom'



export default function Login() {
    return(
        <div>
        <title>Se connecter</title>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img src="img-01.png" alt="IMG" />
              </div>
              <form className="login100-form validate-form">
                <span className="login100-form-title">
                  Membre ?
                </span>
                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input className="input100" type="text" name="email" placeholder="Email" />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" placeholder="Mot de passe" />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Se connecter
                  </button>
                </div>
                <div className="text-center p-t-12">
                  <span className="txt1">
                    Oublié :
                  </span>
                  <a className="txt2" href="#">
                    Email / Mot de passe?
                  </a>
                </div>
                <div className="text-center p-t-136">
                  <Link to='/register'>
                  <a className="txt2" >
                    Créer un compte
                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                  </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
};
