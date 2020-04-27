import React from 'react';
import { Link } from 'react-router-dom';
import { emitCurrentPath } from '../../utils/Utils';


import './Why.css';
import confused from '../../resources/img/confused.gif';
import confused2 from '../../resources/img/confused2.gif';
import confused3 from '../../resources/img/confused3.gif';
import trailer from '../../resources/video/el-trailer.mp4';

class Why extends React.Component {

    componentDidMount() {
        // passes the location fo the app (current path) to the parent (App.js)
        emitCurrentPath(this.props);

        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    render() {
        return (
            <div id="why" className="animated">
                {/* <h3>Pourquoi ce projet&nbsp;?</h3> */}
                <video width="600" height="500" controls autoPlay >
                    <source src={trailer} type="video/mp4" />
                </video>
                <p>
                    Grâce à la popularisation des bootcamps, les profils
                    qui ne sont pas «&nbsp;nés pour être dev&nbsp;» sont de
                    plus en plus nombreux à intégrer le monde de la
                    programmation. Et c'est tant mieux 👏
                    <span className="break-text">Mais
                    une fois en entreprise, ces personnes se confrontent
                    souvent à un «&nbsp;mur de verre&nbsp;» de
                    la part de leurs collègues issu·e·s de formations
                    plus traditionnelles, bâti sur des références
                    culturelles ou techniques qu'ils n'ont&nbsp;pas.
                    Les cons&eacute;quences&nbsp;? Mal-être au travail, abandon de carri&egrave;re... et syndrome de l'imposteur, probl&egrave;me r&eacute;pandu dans le milieu de la tech.</span>
                    <span className="break-text"><img src={confused} alt="" /><img src={confused2} alt="" /><img src={confused3} alt="" /></span>
                    <span className="break-text">D&eacute;gommons le syndrome de l'imposteur ensemble&nbsp;!</span>
                    <span className="break-text">Electronic Tales entend être un safe-space d'apprentissage pour et par les
                    dévs juniors, ax&eacute; sur la
                    bienveillance et l'inclusion. Il vise &agrave; r&eacute;duire le gap entre les bootcampeurs&middot;euses/autodidactes et les ing&eacute;nieur&middot;e&middot;s en parlant de tout ce que les formations courtes n'enseignent pas 💾 🔋 🕹️
                    <span className="break-text">D&eacute;marr&eacute; en d&eacute;cembre 2019, notre projet est actuellement en cours de création. Il sera totalement gratuit et open-source. Le premier release est prévu pour la rentrée 2020. D'ici l&agrave;, nous avons besoin de toi&nbsp;!</span></span>
                </p>
                <div id="why-button-wrap" to="/concept">
                    <button id="why-button" className="button-design">
                        <Link to="/concept">
                            Youpi, dites-m'en plus&nbsp;!
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
}


export default Why;