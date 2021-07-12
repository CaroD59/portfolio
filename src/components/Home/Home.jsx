import { AiFillHtml5 } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';
import { IoLogoNodejs, IoMdMicrophone } from 'react-icons/io';
import { FaReact, FaChessPawn } from 'react-icons/fa';
import { MdMovieFilter } from 'react-icons/md';
import { BiCodeAlt } from 'react-icons/bi';
import { GiCat } from 'react-icons/gi';
import { SiJavascript, SiCss3, SiYoutubegaming } from 'react-icons/si';
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
          </div>
        </div>
        <div className="Presentation">
          <h2 className="TitleTechnos">Technologies</h2>
          <div className="Technos">
            <div className="technoslist0">
              <AiFillHtml5 />
            </div>
            <div className="technoslist1">
              <SiCss3 />
            </div>
            <div className="technoslist2">
              <SiJavascript />
            </div>
            <div className="technoslist3">
              <FaReact />
            </div>
            <div className="technoslist4">
              <IoLogoNodejs />
            </div>
            <div className="technoslist5">
              <GrMysql />
            </div>
          </div>
          <h2 className="TitleLanguages">Langues étrangères</h2>
          <div className="Languages">
            <div className="flags">
              <img src="img/fr.png" alt="" />
            </div>
            <div className="flags">
              <img src="img/en.png" alt="" />
            </div>
          </div>
          <h2 className="TitleHobbies">Hobbies</h2>
          <div className="Hobbies">
            <div className="hobbieslist">
              <GiCat />
            </div>
            <div className="hobbieslist">
              <SiYoutubegaming />
            </div>
            <div className="hobbieslist">
              <FaChessPawn />
            </div>
            <div className="hobbieslist">
              <MdMovieFilter />
            </div>
            <div className="hobbieslist">
              <IoMdMicrophone />
            </div>
            <div className="hobbieslist">
              <BiCodeAlt />
            </div>
          </div>
        </div>
      </div>
    </StyleHome>
  );
}
