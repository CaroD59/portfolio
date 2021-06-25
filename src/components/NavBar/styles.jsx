import styled from 'styled-components';

const StyleHeader = styled.div`
  .NavBar {
    background-color: black;
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    -webkit-border-bottom-right-radius: 50px;
    -webkit-border-bottom-left-radius: 50px;
    -moz-border-radius-bottomright: 50px;
    -moz-border-radius-bottomleft: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    .LogoContainer {
      .LogoImg {
        width: 100px;
        height: 100px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
      }
    }
    .Links {
      li {
      }
    }
  }
`;

export default StyleHeader;
