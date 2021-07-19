import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaGitlab } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import StyledContact from './Styles';

dotenv.config();

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (evt) => {
    const newDetails = { ...details };
    newDetails[evt.target.name] = evt.target.value;
    setDetails(newDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/contact`, details).then(() => {
      setIsSent(true);
    });
  };

  return (
    <StyledContact id="Contact">
      {isSent ? (
        <div className="buttonContactForm">
          <div className="inactive">
            <p>Message envoyé !</p>
          </div>
        </div>
      ) : (
        <>
          <div className="PageContact">
            <div className="ContactPage">
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="pContact">
                    <p>Formulaire de contact</p>
                  </div>
                  <div className="form-inner">
                    <div className="form-groupe">
                      <input
                        type="text"
                        id="firstname"
                        placeholder="Prénom"
                        name="firstName"
                        value={details.firstName}
                        onChange={handleChange}
                        className="ContactInput"
                        required
                      />
                      <div className="form-groupe">
                        <input
                          type="text"
                          id="lastname"
                          placeholder="Nom"
                          name="lastName"
                          value={details.lastName}
                          onChange={handleChange}
                          className="ContactInput"
                          required
                        />
                      </div>
                      <div className="form-groupe">
                        <input
                          type="text"
                          id="phoneNumber"
                          placeholder="Numéro de téléphone"
                          name="phoneNumber"
                          value={details.phoneNumber}
                          onChange={handleChange}
                          className="ContactInput"
                          required
                        />
                      </div>
                      <div className="form-groupe">
                        <input
                          type="text"
                          id="email"
                          placeholder="E-mail"
                          name="email"
                          value={details.email}
                          onChange={handleChange}
                          className="ContactInput"
                          required
                        />
                      </div>
                    </div>
                    <div className="secondBloc">
                      <div className="form-groupe">
                        <textarea
                          type="text"
                          id="message"
                          placeholder="Ecrivez votre message"
                          name="message"
                          value={details.message}
                          onChange={handleChange}
                          className="ContactMessage"
                          required
                        />
                      </div>
                    </div>
                    <div className="RGPD">
                      <div>
                        <input type="checkbox" required />
                      </div>
                      <div className="FarmConnectInfos">
                        <p>
                          J&apos;accepte de partager mes informations à Caroline
                          Dorchies
                        </p>
                      </div>
                    </div>
                    <div className="Button">
                      <button
                        type="submit"
                        className="buttonContact"
                        disabled={handleSubmit}
                      >
                        Envoyer
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="InfosPage">
              <div className="InfosForm">
                <div className="pContact">
                  <p>Mes Informations</p>
                </div>
                <div className="form-inner">
                  <div className="form-groupe">
                    <img src="img/phone.png" alt="" className="ImgContact" />
                    <p className="pContactForm">06.10.87.07.27</p>
                  </div>
                  <div className="form-groupe">
                    <img src="img/maps.png" alt="" className="ImgContact" />
                    <p className="pContactForm">Lille - Douai</p>
                  </div>
                  <div className="form-groupe">
                    <img src="img/mail.png" alt="" className="ImgContact" />
                    <p className="pContactForm">dorchies.c@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="InfosPage">
              <div className="InfosForm">
                <div className="pContact">
                  <p>Retrouvez mes créations sur ces sites :</p>
                </div>
                <div className="form-inner">
                  <div className="form-links">
                    <a
                      href="https://github.com/CaroD59"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub />
                    </a>
                  </div>
                  <div className="form-links">
                    <a
                      href="https://gitlab.com/CaroD59"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGitlab />
                    </a>
                  </div>
                  <div className="form-links">
                    <a
                      href="https://www.linkedin.com/in/dorchies-c/ "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </StyledContact>
  );
}
