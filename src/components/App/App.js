import React from 'react';
import axios from 'axios';
import './App.scss';
import Card from '../Card/Card';
import Followers from '../Followers/Followers';

class App extends React.Component {
    constructor () {
        super();

        this.state = {
            url: 'https://api.github.com/users/hera',
            user: {},
            followers: {}
        };
    }

    componentDidMount () {
        // Get user data
        axios.get(this.state.url)
            .then((response) => {
                this.setState({
                    user: response.data
                });
                
                // Get the user's followers, save data in state
                return axios.get(response.data.followers_url);
            })
            .then((response) => {
                this.setState({
                    followers: response.data
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
                <Followers users={this.state.followers} />
            </div>
        );
    }
}

export default App;
