import styled from 'styled-components';

const CreationStyle = styled.div`
  .BlocTitle {
    display: flex;
    justify-content: center;
    .Title {
      text-align: center;
      h2 {
        color: #b3a8a8;
      }
    }
  }
  a {
    text-decoration: none;
  }
  .Projects {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
        .ImageSize {
          border-radius: 8px;
          background-size: cover;
          max-width: 100%;
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
