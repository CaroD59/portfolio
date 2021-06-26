import styled from 'styled-components';

const StyleHome = styled.div`
  @font-face {
    font-family: 'Yoshi';
    src: local('Yoshi'), url('/fonts/Yoshi.otf') format('opentype'),
      url('/fonts/Yoshi.ttf') format('truetype');
  }
  .BigContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-overflow: clip;
    text-align: justify;
    overflow: hidden;
    .Presentation {
      color: #b3a8a8;
      font-family: serif, sans-serif;
      font-style: italic;
      font-size: 1.1em;
      padding: 20px;
      margin-top: 50px;
      width: 350px;
      height: 500px;
      background-color: black;
      border-radius: 30px;
      margin-right: 10%;
      .TitlePresentation {
        text-align: center;
      }
      .pPrésentation1 {
        margin-top: 50px;
      }
      .pPrésentation2 {
        margin-top: 50px;
        text-align: center;
        font-family: Yoshi;
        font-size: 1.5em;
      }
    }
    .Photo {
      color: #b3a8a8;
      font-family: serif, sans-serif;
      font-style: italic;
      font-size: 1.1em;
      padding: 20px;
      margin-top: 50px;
      width: 350px;
      height: 500px;
      background-color: black;
      border-radius: 30px;

      .TitlePhoto {
        text-align: center;
        text-decoration: underline;
      }
      .Photo {
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;
        width: 200px;
        height: 190px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
      }
      .pPhoto {
        margin-top: 10px;
        .Infos {
          margin-top: 20px;
          a {
            text-decoration: none;
            font-family: 'Pixeled';
            font-size: 1em;
            color: #b3a8a8;
            margin-left: 20px;
          }
        }
      }
    }
  }
`;

export default StyleHome;
