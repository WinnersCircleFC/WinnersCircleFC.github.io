import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isLoading, setIsLoading] = useState(true);
  const form = useRef();

  useEffect(() => {
    const letterTimerId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    const loaderTimerId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(letterTimerId);
      clearTimeout(loaderTimerId);
    };
  }, []);

  useEffect(() => {
    if (!customElements.get('spline-viewer')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js';
      script.type = 'module';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      }
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  }

  if (isLoading) {
    return <Loader type="ball-grid-pulse" color="#339ecc" />;
  }

  return (
    <>
      <div className="container contact-page">
        <div className="form-zone">
          <div className="contact-form">
     
            <div className="header">
            <span>Contact Us</span>
      
              </div>
          
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" autoComplete="off" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    autoComplete="off"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    autoComplete="off"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    autoComplete="off"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          <div className="card">
            <div className="card-photo"><img src={require('./../../assets/WCFC Logo_White.png')} alt="Nika Gedenidze Icon"></img></div>
            <div className="card-title">Winners Circle FC<br />
              <span>Wholesale Company</span>
            </div>
            <div className="card-socials">
              <span>New Jersey</span>
              <br/>
              <span>+1 201 732 0770</span>
              <br/>
              <span>winnerscirclefc@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
