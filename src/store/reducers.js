export const coinValue = ( value="0.01" , action ) => {
	switch ( action.type ){
		case "COIN_VALUE_CHANGE":
			return action.payload;
		default: 
			return value
	}
}

export const betValue = ( value="1" , action ) => {
	switch ( action.type ){
		case "BET_VALUE_CHANGE":
			return action.payload;
		default: 
			return value
	}
}