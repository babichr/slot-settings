export const values = ( state = {}, action ) =>{
	switch(action.type){
		case "BET_VALUE_CHANGE":
			console.log(typeof action.payload);
			return  { ...state, bet : Number(action.payload) };
		case "COIN_VALUE_CHANGE":
			return { ...state, coin : Number(action.payload)  };
		case "SOUND_VALUE_CHANGE":
			return { ...state, sound : action.payload  };
		case "MUSIC_VALUE_CHANGE":
			return { ...state, music : action.payload  };
		default:
			return state
	}
}
