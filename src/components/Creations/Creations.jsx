import axios from 'axios';
import { useEffect, useState } from 'react';
import CreationStyle from './Styles';

export default function Creations() {
  const [creations, setCreations] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/creations`).then(({ data }) => {
      setCreations(data);
    });
  }, []);
  return (
    <CreationStyle>
      <div className="BlocTitle">
        <div className="Title">
          <h2>Mes créations</h2>
        </div>
      </div>
      <div className="Projects">
        {creations.map((crea) => {
          return (
            <a href={crea.github_url_front} target="_blank" rel="noreferrer">
              <div className="Project">
                <div className="image">
                  <img src={crea.github_image} alt="" className="ImageSize" />
                </div>
                <div className="Name">
                  <div className="ProjectName">{crea.title}</div>
                </div>
                <div className="Description">{crea.description}</div>
              </div>
            </a>
          );
        })}
      </div>
    </CreationStyle>
  );
}
