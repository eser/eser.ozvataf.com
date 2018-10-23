import cacheManager from 'es6-cachemanager/lib/esm';

const dataSourceUrl = 'https://03x2915wpg.execute-api.eu-west-1.amazonaws.com/default/getMediumPosts';

async function getMediumPostsFetch(): Promise<any> {
    const promise: Promise<any> = fetch(dataSourceUrl)
        .then((response) => response.json());

    // cacheManager.setDirect([ 'mediumPosts' ], promise);

    return await promise;
}

async function getMediumPosts(): Promise<any> {
    return await cacheManager.get(
        [ 'mediumPosts' ],
        () => getMediumPostsFetch(),
    );
}

function getMediumPostsRequestAction() {
    return async (dispatch, getState) => {
        dispatch({
            type: 'GET_MEDIUM_POSTS_REQUEST_ACTION',
        });

        try {
            const result = await getMediumPosts();

            const posts = Object.keys(result.payload.references.Post).map(
                x => result.payload.references.Post[x]
            );

            dispatch({
                type: 'GET_MEDIUM_POSTS_RESULT_SUCCESS_ACTION',
                payload: posts,
            });
        }
        catch (ex) {
            dispatch({
                type: 'GET_MEDIUM_POSTS_RESULT_FAILED_ACTION',
                payload: ex,
            });
        }
    };
}

export {
    getMediumPostsRequestAction as default,
};
