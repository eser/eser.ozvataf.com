const initialState = {
    error: false,
    data: null,
};

function blogReducer(state: any = initialState, message: any): any {
    if (message.type === 'GET_MEDIUM_POSTS_REQUEST_ACTION') {
        return { ...state, error: false, data: null };
    }

    if (message.type === 'GET_MEDIUM_POSTS_RESULT_SUCCESS_ACTION') {
        return { ...state, error: false, data: message.payload };
    }

    if (message.type === 'GET_MEDIUM_POSTS_RESULT_FAILED_ACTION') {
        return { ...state, error: message.payload, data: null };
    }

    return state;
}

export {
    blogReducer as default,
};
