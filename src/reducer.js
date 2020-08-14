export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finished developing
    //token: 'BQBVXN4xx42NePtdg-90NPkU4qaAs4Z3LwGioTd3pHIV4KDePeZViXJTgz4L9l74twrEDzvopeHMIpMzHo0tt5s098znahfuAVPqHkKZTaaPPvDhn01QE9JEzUJOKLNcxHHmbDeVDiCvktGH1FvgCRWEj86X'
};

//Reducer -> Listens to the data layer
const reducer = (state, action) => {
    console.log(action);

    //Dispatch the action and listens to the action
    //Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            //Listener
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
            case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };
        default:
            return state;
    }
}

export default reducer;