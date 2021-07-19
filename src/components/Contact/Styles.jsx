import styled from 'styled-components';

const StyledContact = styled.div`
  @font-face {
    font-family: 'Pixeled';
    src: local('Pixeled'), url('/fonts/Pixeled.ttf') format('truetype');
  }
  .buttonContactForm {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    .inactive {
      width: auto;
      background-color: #221e1e;
      border-radius: 5px;
      color: #b3a8a8;
      font-family: 'Pixeled';
      font-size: 1.3em;
      width: 350px;
      height: 45px;
      margin: 10px;
      font-size: 1.2em;
      font-weight: bold;
      color: #b3a8a8;
      p {
        text-align: center;
        margin-top: 12px;
      }
    }
  }
  .PageContact {
    display: flex;
    justify-content: space-around;
    .InfosPage {
      .InfosForm {
        margin: 0;
        border: solid 1px #b3a8a8;
        border-radius: 20px;
        width: 450px;
        height: 550px;
        display: block;
        position: relative;
        top: 50px;
        background-color: #221e1e;
        .pContactForm {
          padding-top: 30px;
          font-family: 'Pixeled';
          font-size: 1.3em;
          color: #b3a8a8;
          text-align: center;
        }
        .pContact {
          padding-top: 50px;
          font-family: 'Pixeled';
          font-size: 1.3em;
          color: #b3a8a8;
          line-height: 0%;
          text-align: center;
        }
        .form-inner {
          display: flex;
          text-overflow: clip;
          justify-content: space-around;
          text-align: center;
          overflow: hidden;
          flex-wrap: wrap;
          flex-direction: column;
          .form-links {
            display: flex;
            justify-content: center;
            margin-top: 70px;
            font-size: 50px;
            a {
              color: black;
              :hover {
                color: #942222;
              }
            }
            .form-website {
              margin-top: 50px;
              display: flex;
              justify-content: center;
            }
          }
          .form-groupe {
            .ImgContact {
              width: 50px;
              margin-top: 50px;
            }
          }
        }
      }
    }
    .ContactPage {
      .form {
        margin: 0;
        border-radius: 20px;
        width: 450px;
        height: 550px;
        display: block;
        margin: auto;
        position: relative;
        top: 50px;
        background-color: #221e1e;
        border: solid 1px #b3a8a8;
        .pContact {
          padding-top: 50px;
          font-family: 'Pixeled';
          font-size: 1.3em;
          color: #b3a8a8;
          line-height: 0%;
          text-align: center;
        }
        .form-inner {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .form-groupe {
            .ImgContact {
              width: 100px;
            }
            .ContactInput {
              border: none;
              background-color: transparent;
              color: #b3a8a8;
              font-family: serif, sans-serif;
              letter-spacing: -0.2px;
              font-size: 15px;
              width: 350px;
              height: 45px;
              opacity: 0.5;
              :focus {
                background-color: transparent;
              }
            }
            .ContactMessage {
              border: none;
              background-color: transparent;
              color: #b3a8a8;
              font-family: serif, sans-serif;
              letter-spacing: -0.2px;
              font-size: 15px;
              margin-top: 15px;
              width: 350px;
              height: 100px;
              opacity: 0.5;
            }

            .ContactInput:focus,
            .ContactInput:hover {
              outline: none;
            }
            .ContactMessage:focus,
            .ContactMessage:hover {
              outline: none;
            }

            ::placeholder {
              opacity: 1;
            }
          }
          .RGPD {
            padding-top: 10px;
            display: flex;
            align-items: center;
            .FarmConnectInfos {
              color: #b3a8a8;
              font-family: serif, sans-serif;
              font-size: 12px;
            }
          }
          .Button {
            button {
              margin-top: 20px;
              background-color: #942222;
              border: none;
              border-radius: 5px;
              color: #b3a8a8;
              font-family: serif, sans-serif;
              font-weight: bold;
              font-size: 20px;
              width: 350px;
              height: 45px;
            }

            button:hover,
            button:focus {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

export default StyledContact;
