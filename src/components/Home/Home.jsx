import { AiFillHtml5 } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';
import { IoLogoNodejs } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiCss3 } from 'react-icons/si';
import StyleHome from './Styles';

export default function Home() {
  return (
    <StyleHome>
      <div className="BigContainer">
        <div className="Presentation">
          <h2 className="TitlePresentation">Bienvenue !</h2>
          <p className="pPrésentation1">
            “ En formation à la Wild Code School de Lille, j&apos;ai eu la
            chance de pouvoir réaliser une reconversion après un parcours
            professionnel dans le Tourisme. Développeuse web est, pour moi, un
            métier qui fait sens, et dans lequel j&apos;ai envie de
            m&apos;investir. &quot;Apprendre à apprendre&quot; est la formule
            qui a orientée mon choix vers la Wild Code School. L’autonomie, la
            rigueur et le respect de l’autre font également partis des valeurs
            qui me tiennent à cœur. Aujourd&apos;hui, je cherche un stage de fin
            de formation au sein d&apos;une entreprise à taille humaine qui me
            permettra de m&apos;épanouir. Mon esprit d&apos;analyse, mon sens de
            l’observation et ma créativité saura m&apos;aider à réussir ! ”
          </p>
          <p className="pPrésentation2">Caroline Dorchies</p>
        </div>
        <div className="Photo">
          <h2 className="TitlePhoto">Informations</h2>
          <img src="/img/realme.jpg" alt="" className="Photo" />
          <div className="pPhoto">
            <p>Nom : Dorchies</p>
            <p className="Infos">Prénom : Caroline</p>
            <p className="Infos">Âge : 30</p>
            <p className="Infos">Lieu : Lille</p>
            <p className="Infos">
              Profession : Développeuse Web Junior FullStack
            </p>
            <p className="Infos">
              Technos : <AiFillHtml5 /> <SiCss3 /> <SiJavascript /> <FaReact />{' '}
              <IoLogoNodejs /> <GrMysql />
            </p>
          </div>
        </div>
        <div className="Presentation">
          <h2 className="TitleHobbies">Hobbies</h2>
          <div className="Hobbies">
            <div className="hobbielist">
              <img src="img/games.png" alt="" />
            </div>
            <div className="hobbielist">
              <img src="img/board.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </StyleHome>
  );
}
