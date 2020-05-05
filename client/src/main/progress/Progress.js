import React from 'react';

import './Progress.css';

class Progress extends React.Component {

    render() {
        return(
            <div id="progress-container">
                <ul id="stations">
                    <li id="idea" class="station-full">
                        {/* <p>Idée</p> */}
                    </li>
                    <li class="station-full"></li>
                    <li class="station-empty"></li>
                    <li class="station-full"></li>
                    <span id="progress-bar"></span>
                </ul>
                <ul id="station-names">
                    <li>
                        <p>Idée</p>
                        <p class="comment">Tu crois vraiment que c'est une bonne idée&nbsp;?</p>
                    </li>
                    <li>
                        <p>Brainstoooorm</p>
                        <p class="comment">Il reste du café&nbsp;?</p>
                    </li>
                    <li>
                        <p>Naissance d'Electronic Tales Presents <br/> Vous êtes ici !</p>
                        <p class="comment"></p>
                    </li>
                    <li>
                        <p>Release de la plateforme <br/> Vous êtes ici !</p>
                        <p class="comment"></p>
                    </li>
                </ul>
            </div>
            
        )
    }

}

export default Progress;