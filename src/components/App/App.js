import React from 'react';
import axios from 'axios';
import './App.scss';
import Card from '../Card/Card';

class App extends React.Component {
    constructor () {
        super();

        this.state = {
            // url: 'https://api.github.com/users/hera',
            url: 'http://127.0.0.1:8080/user.json',
            user: {}
        };
    }

    componentDidMount () {
        axios.get(this.state.url)
            .then((response) => {
                this.setState({
                    user: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })

    }

    render () {
        return (
            <div className="App">
                <h1>GitHub User Card</h1>
                {
                    Object.keys(this.state.user).length
                    ? <Card user={this.state.user} />
                    : <div>Loading...</div>
                }
            </div>
        );
    }
}

export default App;
