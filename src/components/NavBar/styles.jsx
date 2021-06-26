import styled from 'styled-components';

const StyleHeader = styled.div`
  @font-face {
    font-family: 'Pixeled';
    src: local('Pixeled'), url('/fonts/Pixeled.ttf') format('truetype');
  }
  .NavBar {
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    width: 100%;
    height: 65px;
    padding-top: 20px;
    padding-bottom: 20px;
    -webkit-border-bottom-right-radius: 50px;
    -webkit-border-bottom-left-radius: 50px;
    -moz-border-radius-bottomright: 50px;
    -moz-border-radius-bottomleft: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    .LogoImg {
      width: 90px;
      height: 90px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
      border-radius: 50%;
      :hover {
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
      }
    }
    .Pages {
      ul {
        display: flex;
        justify-content: flex-end;
        padding: 0;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          padding: 5px;
          margin-right: 15px;
          width: 90px;
          height: 25px;
          border-bottom: transparent solid 2px;
          a {
            text-decoration: none;
            font-family: 'Pixeled';
            font-size: 1.3em;
            color: #b3a8a8;
          }
          :hover {
            border-bottom: #942222 solid 2px;
            transition: 0.3s;
          }
        }
      }
    }
  }
`;

export default StyleHeader;
