import React, { useEffect, useState, useMemo } from 'react';

import Conditional from '../shared/conditional';
import Loading from '../shared/loading';
import Error from '../shared/error';

import layoutStyles from '../../layouts/default/assets/styles.scss';

const dataSourceUrl = 'https://03x2915wpg.execute-api.eu-west-1.amazonaws.com/default/getMediumPosts';

async function getMediumPosts() {
    const response = await fetch(dataSourceUrl);
    const result = await response.json();

    const posts = Object.keys(result.payload.references.Post).map(
        x => result.payload.references.Post[x]
    );

    return posts;
}

function Home() {
    const [ blogPosts, setBlogPosts ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        getMediumPosts()
            .then((posts) => setBlogPosts(posts))
            .catch((err) => setError(err));
    }, 'blogPosts');

    if (error !== null) {
        return (
            <Error message={error} />
        );
    }

    if (blogPosts === null) {
        return (
            <Loading />
        );
    }

    return (
        <>
            <h1>Blog Yazılarım</h1>
            {blogPosts.map(post => (
                <section key={`post-${post.id}`} className={layoutStyles.post}>
                    <h3 className={layoutStyles.postTitle}>
                        <a href={`https://medium.com/@eserozvataf/${post.uniqueSlug}`}>{post.title}</a>
                        <span className={layoutStyles.separator}> · </span>
                        {new Date(post.firstPublishedAt).toLocaleDateString('tr', { day: 'numeric', month: 'long', year: 'numeric' } )}
                        <span className={layoutStyles.taglist}>
                            <Conditional test={post.virtuals.tags.length > 0}>
                                {` · `}
                            </Conditional>
                            {post.virtuals.tags.map(tag => (
                                <a key={`post-${post.id}-tag-${tag.slug}`} href="javascript:void(0);">{tag.name}</a>
                            ))}
                        </span>
                    </h3>
                </section>
            ))}
            <section key="post-rest" className={layoutStyles.post}>
                <h3 className={layoutStyles.postTitle}>
                    <a href={`https://medium.com/@eserozvataf`}>Devamı...</a>
                </h3>
            </section>
        </>
    );
}

export {
    Home as default,
};
