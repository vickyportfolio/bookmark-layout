import './Banner.css';
import ErrorImage from '../images/icon-error.svg';
import { useState } from 'react';
const Banner = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [valid, setIsValid] = useState(true);
  const emailValidation = (e) => {
    setEmail(e.target.value);
    const regExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regExp.test(email)) {
      setMessage('Email is Valid');
      setIsValid(true);
    } else if (email === '') {
      setMessage('please enter email');
    } else if (!regExp.test(email)) {
      setMessage(`Whoops. make sure it's an email`);
      setIsValid(false);
    } else {
      setMessage('');
    }
  };
  return (
    <div className="banner">
      <div className="banner-text">
        <span>35,000+ Already Joined</span>
        <h2>Stay up-to-date with what we're doing</h2>
      </div>
      <div className="banner-mail-box">
        <div className="input-box">
          <input
            type="email"
            placeholder="@email.com"
            onChange={emailValidation}
            value={email}
            required
          />
          {valid ? '' : <img src={ErrorImage} alt="error" className="error" />}

          <p className={`msg ${valid ? 'green' : 'red'}`}>{message}</p>
        </div>

        <button className="contact">Contact Us</button>
      </div>
    </div>
  );
};
export default Banner;
