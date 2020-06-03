import React from 'react';
import './Card.scss';

class Card extends React.Component {
    render () {
        const user = this.props.user;

        return (
            <div className="Card">
                <h2>{ user.name }</h2>
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
                        <tr>
                            <td>Located in:</td>
                            <td>{ user.location || "Unknown" }</td>
                        </tr>
                        <tr>
                            <td>Company:</td>
                            <td>{ user.company || "Unknown" }</td>
                        </tr>
                        <tr>
                            <td>Followers:</td>
                            <td>{ user.followers }</td>
                        </tr>
                        <tr>
                            <td>Following:</td>
                            <td>{ user.following }</td>
                        </tr>
                        <tr>
                            <td>Public repos:</td>
                            <td>{ user.public_repos }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Card;
