import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null);
    //Run code based on a given condition
    useEffect(() => {
        const hash = getTokenFromUrl();
        //Strip the hash from the url to not show
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);
            //Store the access token from spotify app to this local react app to connect and use the spotify data
            spotify.setAccessToken(_token);
            //Get the logged in user details from the spotify api
            spotify.getMe().then(user => {
                console.log(user);
            });
        }
        console.log('Token received from the spotify:', token);
    }, []);

    return (
        //BEM
        <
        div className = "app" > {
            token ? ( < Player / > ) : ( <
                Login / >
            )
        }

        <
        /div >
    );
}

export default App;