const COIN_VALUE_CHANGE = "COIN_VALUE_CHANGE";
const BET_VALUE_CHANGE = "BET_VALUE_CHANGE";

export const onVelueChange = (input) => {
	input.target.checked;
	if ( input.target.name === "coin"  ){
		return {
			type: COIN_VALUE_CHANGE,
			payload: {
				value: input.target.value,
				checked: true
			}
		}
	}else{
		return {
			type: BET_VALUE_CHANGE,
			payload: {
				value: input.target.value,
				checked: true
			}
		}
	}
};