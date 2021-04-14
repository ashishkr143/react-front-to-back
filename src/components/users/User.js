import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login  )
    }

    static propTypes = {
        loading : PropTypes.bool,
        user : PropTypes.object.isRequired,
        getUser : PropTypes.func.isRequired,
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            company,
            login,
            hirable
        } = this.props.user;
        const {loading }= this.props;
        if(loading)
            return <Spinner></Spinner>
        else
            return (
                <Fragment>
                    <Link className="btn btn-light" to="/">Back to search</Link>
                    Hirable : {' '}
                    {hirable ? <i className="fa fa-check text-success"></i> : <i className="fa fa-times-circle text-danger"></i>}
                    <div className="card grid-2">
                        <div className="all-center">
                            <img src={avatar_url} className="round-img" alt="" style={{width:'150px'}} />
                            <h1>{name}</h1>
                            <p>{location}</p>
                            </div>
                        <div>
                            <div>
                                { bio && <Fragment>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </Fragment> } 
                            </div>
                            <a href={html_url} target="_blank" className="btn btn-dark" rel="noreferer">Visit GitHub Profile</a>
                            <ul>
                                <li>
                                    Login : {login && <Fragment><strong>{login}</strong></Fragment>}
                                </li>
                                <li>
                                   Company : {company && <Fragment><strong>{company}</strong></Fragment>}
                                </li>
                                <li>
                                   Blog : {blog && <Fragment><strong>{blog}</strong></Fragment>}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card text-center"> 
                        <div className="badge badge-primary">Followers : {followers}</div>
                        <div className="badge badge-success">Following : {following}</div>
                        <div className="badge badge-light">Public Repos : {public_repos}</div>
                        <div className="badge badge-dark">Public Gists : {public_gists}</div>
                    </div>
                </Fragment>
            )
    }
}

export default User
