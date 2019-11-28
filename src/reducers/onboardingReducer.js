import { fromJS } from 'immutable';


const initialState = {
    userData: {},
    userDataLoading: false,
    userDataError: ''
}

export function onboarding(state = fromJS(initialState), action) {
    let oldState = {};

    return state;       // @TODO: remove this
}