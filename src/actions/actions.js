const COIN_VALUE_CHANGE = "COIN_VALUE_CHANGE";
const BET_VALUE_CHANGE = "BET_VALUE_CHANGE";
const SOUND_VALUE_CHANGE = "SOUND_VALUE_CHANGE";
const MUSIC_VALUE_CHANGE = "MUSIC_VALUE_CHANGE";

export const coinValueChange = (input) => {
	return {
		type: COIN_VALUE_CHANGE,
		payload: input.target.value
	}
};

export const betValueChange = (input) => {
	return {
		type: BET_VALUE_CHANGE,
		payload: input.target.value
	}
};

export const soundValueChange = (input) => {
	return {
		type: SOUND_VALUE_CHANGE,
		payload: input.target.value
	}
};

export const musicValueChange = (input) => {
	return {
		type: MUSIC_VALUE_CHANGE,
		payload: input.target.value
	}
};