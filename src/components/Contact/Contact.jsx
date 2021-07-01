import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaGitlab } from 'react-icons/fa';
import StyleContact from './Styles';

export default function Contact() {
  return (
    <StyleContact>
      <div className="Liens">
        <p className="Infos">
          <a
            href="https://www.linkedin.com/in/dorchies-c/ "
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </p>
        <p className="Infos">
          <a href="https://github.com/CaroD59" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </p>
        <p className="Infos">
          <a href="https://gitlab.com/CaroD59" target="_blank" rel="noreferrer">
            <FaGitlab />
          </a>
        </p>
      </div>
    </StyleContact>
  );
}
