import styled from 'styled-components';

const CreationStyle = styled.div`
  @font-face {
    font-family: 'Pixeled';
    src: local('Pixeled'), url('/fonts/Pixeled.ttf') format('truetype');
  }
  .BlocTitle {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .Title {
      text-align: center;
      font-family: 'Pixeled';
      font-size: 1.3em;
      color: #b3a8a8;
      padding: 10px;
    }
  }
  a {
    text-decoration: none;
  }
  .Projects {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .Project {
      padding: 20px;
      margin: 0;
      background-color: #221e1e;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-radius: 8px;
      border: solid 1px #b3a8a8;
      width: 400px;
      height: 400px;
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 100px;
      :hover {
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
      }
      .image {
        display: flex;
        justify-content: center;
        overflow-y: hidden;
        .ImageSize {
          border-radius: 8px;
          background-size: cover;
          width: 100%;
        }
      }
      .Name {
        text-align: center;
        font-weight: bold;
        color: #b3a8a8;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .Description {
        margin-top: 10px;
        margin-bottom: 20px;
        color: #b3a8a8;
        font-style: italic;
        text-align: justify;
      }
    }
  }
`;

export default CreationStyle;
