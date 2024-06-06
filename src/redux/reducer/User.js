import React from 'react'
import { LOGIN, LOGOUT, SIGNUP } from '../ActionType';

let initial = {
    userdata: {},
    isLogin: false
}

function User(state = initial, { type, payload }) {
    switch (type) {
        case SIGNUP:
            return {
                ...state, userdata: payload, isLogin: true
            }

        case LOGIN:
            return {
                ...state, userdata: payload, isLogin: true
            }

        case LOGOUT:
            return {
                ...state, userdata: {}, isLogin: false
            }

        default:
            return state
    }
}

export default User