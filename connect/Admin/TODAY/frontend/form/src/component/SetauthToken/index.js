import axios from 'axios';

export const SetauthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else{
        delete axios.defaults.headers.common["Authorization"];
}
}