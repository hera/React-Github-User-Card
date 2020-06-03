import React from 'react';
import './Follower.scss';

class Follower extends React.Component {
    render () {
        const user = this.props.user;

        return (
            <div className="Follower">
                <h2>{ user.login }</h2>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <img src={ user.avatar_url } alt={ user.name } className="avatar" />
                            </td>
                        </tr>
                        <tr>
                            <td>GitHub profile:</td>
                            <td>{ <a href={ user.html_url }>{ user.html_url }</a> || "Unknown" }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Follower;