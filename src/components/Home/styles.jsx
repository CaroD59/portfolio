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
      font-size: 1.1em;
      padding: 20px;
      margin-top: 50px;
      width: 350px;
      height: 500px;
      background-color: #221e1e;
      border-radius: 30px;
      .TitlePresentation {
        text-align: center;
        font-style: italic;
      }
      .TitleLanguages,
      .TitleHobbies {
        text-align: center;
        margin-top: 50px;
        font-family: 'Pixeled';
        font-size: 1.3em;
        color: #b3a8a8;
      }
      .Technos,
      .Languages,
      .Hobbies {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        padding-top: 50px;
        .hobbieslist {
          font-size: 1.5em;
        }
        .flags img {
          width: 3vw;
          height: 6vh;
        }
        .technoslist0 {
          font-size: 1.5em;
          :hover {
            color: #e44d26;
          }
        }
        .technoslist1 {
          font-size: 1.5em;
          :hover {
            color: #2368e0;
          }
        }
        .technoslist2 {
          font-size: 1.5em;
          :hover {
            color: #efd81d;
          }
        }
        .technoslist3 {
          font-size: 1.5em;
          :hover {
            color: #00d0f6;
          }
        }
        .technoslist4 {
          font-size: 1.5em;
          :hover {
            color: #88c249;
          }
        }
        .technoslist5 {
          font-size: 1.5em;
          :hover {
            color: #005e86;
          }
        }
      }
      .TitleTechnos {
        text-align: center;
        margin-top: 20px;
        font-family: 'Pixeled';
        font-size: 1.3em;
        color: #b3a8a8;
      }
      .pPrésentation1 {
        margin-top: 50px;
        font-style: italic;
      }
      .pPrésentation2 {
        margin-top: 50px;
        text-align: center;
        font-family: Yoshi;
        font-size: 1.5em;
        font-style: italic;
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
        margin-top: 20px;
        .btn {
          margin-top: 12px;
          background-color: transparent;
          border: none;
          border-radius: 5px;
          font-family: serif, sans-serif;
          font-weight: bold;
          font-size: 15px;
          width: 350px;
          height: 45px;
          a {
            text-decoration: none;
            color: #b3a8a8;
            padding: 7px;
            border-radius: 10px;
            border-top: #942222 solid 2px;
            border-left: #942222 solid 2px;
            :hover {
              color: #942222;
              border-top: #b3a8a8 solid 2px;
              border-left: #b3a8a8 solid 2px;
            }
          }
        }
        .Infos {
          margin-top: 20px;
          a {
            text-decoration: none;
            font-family: 'Pixeled';
            font-size: 1.5em;
            color: #b3a8a8;
            margin-left: 20px;
          }
        }
      }
    }
  }
`;

export default StyleHome;
