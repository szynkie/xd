import { AnyAction } from "redux";
import { IUserLocal } from "../utils/Rest";

export interface UsersState {
    users: {
        id: number,
        user: IUserLocal
    }[]
};

export function users(state: UsersState = { users: [] }, action: AnyAction) {
    switch (action.type) {
        case 'SET_USER': {
            let find = state.users.find(v => v.id === action.user.id);
            if (find?.user) {
                find.user = action.user;
            }

            return { ...state, users: [...state.users] }
        }
        case 'GET_USER': {
            let find = state.users.find(v => v?.id === action.users.id);
            if(!find) {
                return { ...state, users: [...state.users, {
                    id: action.users.id,
                    user: action.users
                }] };
            }

            return state;
        }
        default:
            return state;
    }
}