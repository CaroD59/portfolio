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
    justify-content: space-around;
    text-overflow: clip;
    text-align: justify;
    overflow: hidden;
    .Presentation {
      color: #b3a8a8;
      font-family: serif, sans-serif;
      border: solid 1px #b3a8a8;
      font-style: italic;
      font-size: 1.1em;
      padding: 20px;
      margin-top: 50px;
      width: 350px;
      height: 500px;
      background-color: #221e1e;
      border-radius: 30px;
      .TitlePresentation {
        text-align: center;
      }
      .Hobbies {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
      }
      .TitleHobbies {
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
      border: solid 1px #b3a8a8;
      font-size: 1.1em;
      padding: 20px;
      margin-top: 50px;
      width: 350px;
      height: 500px;
      background-color: #221e1e;
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
