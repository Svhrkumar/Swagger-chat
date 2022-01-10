import {
	ACTIVE_CONVERSATION_USER,
	MENU_OPEN,
	SEARCH_USER_DATA,
	SEARCH_USER_DATA_REQ,
} from './action.type';

export const useSearchReducer = (
	state = { searchUserData: [], openMenu: false },
	action
) => {
	switch (action.type) {
		case SEARCH_USER_DATA_REQ:
			return {
				loading: true,
			};
		case SEARCH_USER_DATA:
			return {
				loading: false,
				searchUserData: action.payload,
			};
		case MENU_OPEN:
			let openAction = action.payload;
			if (openAction) {
				return {
					...state,
					openMenu: openAction,
				};
			} else {
				return {
					...state,
					openMenu: openAction,
				};
			}

		default:
			return state;
	}
};

export const userChatReducer = (state = { activeConvUser: [] }, action) => {
	console.log();
	switch (action.type) {
		case ACTIVE_CONVERSATION_USER:
			let user = action.payload;
			console.log('Reducer......', user);
			const existed = state.activeConvUser.find((x) => x.id === user.id);
			if (existed) {
				return {
					...state,
					activeConvUser: state.activeConvUser.map((x) =>
						x.id === existed.id ? user : x
					),
				};
			} else {
				return {
					...state,
					activeConvUser: [...state.activeConvUser, user],
				};
			}

		default:
			return state;
	}
};
