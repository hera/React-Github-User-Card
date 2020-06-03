import React from 'react';
import './Followers.scss';
import Follower from '../Follower/Follower';

class Followers extends React.Component {
    render () {
        return (
            <div className="Followers">
                <h2>Followers:</h2>
                {
                    this.props.users.length &&
                    this.props.users.map((user) => {
                        return <Follower user={user} key={user.id} />
                    })
                }
            </div>
        );
    }
}

export default Followers;