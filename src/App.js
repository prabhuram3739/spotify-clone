import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    //const [token, setToken] = useState(null);
    //Pass the functions to the datalayer and pull the details
    const [{ user, token }, dispatch] = useDataLayerValue();
    //Run code based on a given condition
    useEffect(() => {
        const hash = getTokenFromUrl();
        //Strip the hash from the url to not show
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token
            });
            //setToken(_token);

            //Store the access token from spotify app to this local react app to connect and use the spotify data
            spotify.setAccessToken(_token);
            //Get the logged in user details from the spotify api
            spotify.getMe().then(user => {
                //pop up into the datalayer wtih user and pulling the user from the datalayer
                dispatch({
                    type: 'SET_USER',
                    user: user
                });
            });

            //Give the playlists for the user
            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists

                });
            });

            //Get the weekly platylists
            spotify.getPlaylist('37i9dQZEVXcMSQ4opYSmTT').then((response)=> {
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response
                });
            });
        }
        //console.log('Token received from the spotify:', token);
    }, []);
    //console.log("user:", user);
    //console.log("token:", token);
    return (
        //BEM
        <div className = "app" > {
            token ? ( < Player spotify = { spotify }
                / > ) : ( <
                Login / >
            )
        }

        </div >
    );
}

export default App;