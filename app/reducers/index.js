function counterReducer(state = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
        return state + 1;

    case 'DECREMENT':
        return state - 1;

    default:
        return state;
    }
}

export default function counter(state = {}, action) {
    return {
        counter: counterReducer(state.counter, action)
    };
}
