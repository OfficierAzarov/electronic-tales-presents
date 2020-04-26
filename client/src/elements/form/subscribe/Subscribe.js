import React from 'react';
import '../subscribe/Subscribe.css';

class Subscribe extends React.Component {

    state = {
        email: ""
    }

    handleChange = e => {
        this.setState({ email: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.email) {
            fetch(`api/memberAdd?email=${this.state.email}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.props.configureNotification(res, this.state.email);
                })
                .catch(err => {
                    this.props.handleError(
                        {
                            status: 'generic',
                            msg: "Oops... Quelque chose s\'est \
                            mal passé côté serveur. \
                            Réessaie ou contacte-nous."});
                        }
                )
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="email" className="form-control" placeholder="yeah.sure@mytrashbox.io" onChange={this.handleChange} />
                <button id="subscribe-button" className="button-design" type="submit">Participer &nbsp;!</button>
            </form>
        );
    }
}

export default Subscribe;