const initialState = {
    title: 'GeekTech'
}

export default function mainReducer(state = initialState, action) {
    if (action.type === 'CHANGE_TITLE') {
        return {...state, title: 'Geeks'}
    }

    return state
}