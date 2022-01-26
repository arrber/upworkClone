import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    
    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:8000/api/user-data',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h1>My Data</h1>
            </div>
        );
    }
}

export default Profile;