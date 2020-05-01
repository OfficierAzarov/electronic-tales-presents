import React from 'react';
import { Link } from 'react-router-dom';

import { emitCurrentPath } from '../../utils/Utils';

import ConceptItems from './concept-items/ConceptItems';

import './Concept.css';

class Concept extends React.Component {

    state = {
        scroll: true,
        isPopping: false
    }

    componentDidMount() {
        // passes the location fo the app (current path) to the parent (App.js)
        emitCurrentPath(this.props);

        window.scrollTo({top: 0, behavior: 'smooth'});
        if (document.body.scrollTop === 0) {
            if (window.innerHeight < 800) {
                window.addEventListener('scroll', this.pop);
            }
        }
    }

    pop = () => {
        if (this.state.scroll) {
            this.setState({isPopping: true}, this.setState({scroll: false}));
        }
    }


    // scrollDown = () => {
    //     window.scrollBy({
    //         top: 300,
    //         behavior: 'smooth'
    //     })
    // }

    render() {
        return (
            <div id="concept" className="animated">
                <div className="h-container">
                    <h2>&Agrave; Electronic Tales, on veut rendre <br/>la computer culture <em>human readable</em>.</h2>
                    <h3>C'est-à-dire accessible &agrave; tous&middot;tes.</h3>
                    <h4>Pour cela, on s'est assis&middot;e&middot;s, <span className="strike">on a mang&eacute; des tartines au beurre demi-sel,</span> on a r&eacute;flechi, on a d&eacute;fini des axes (et ourdi des concepts).</h4>
                    <i className="fas fa-chevron-down" 
                    style={{opacity: !this.state.isHidden ? 0 : 1}}
                    onClick={this.scrollDown}></i>
                </div>
                <ConceptItems isPopping={this.state.isPopping} />
                <div className= "button-wrap" to="/tracks">
                    <button id="concept-button" className="button-design">
                        <Link to="/tracks">
                            Super&nbsp;! Et concrètement&nbsp;?
                        </Link>
                    </button>
                </div>
        </div>
        )
    }
}

export default Concept;