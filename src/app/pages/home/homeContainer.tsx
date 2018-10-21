import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ConditionalView from '../shared/conditionalView';
import LoadingView from '../shared/loadingView';
import ErrorView from '../shared/errorView';

import getMediumPostsRequestAction from '../../actions/getMediumPostsRequestAction';

import * as styles from '../../assets/styles.scss';

interface HomeContainerProps {
    blog: any;
    getMediumPostsRequestAction: () => void;
}

interface HomeContainerState {
}

class HomeContainer extends React.Component<HomeContainerProps, HomeContainerState> {
    constructor(props: HomeContainerProps, context: any) {
        super(props);
    }

    componentWillMount(): void {
        this.update();
    }

    componentDidUpdate(prevProps: HomeContainerProps): void {
        // this.update();
    }

    update(): void {
        this.props.getMediumPostsRequestAction();
    }

    render(): JSX.Element {
        if (this.props.blog.error !== false) {
            console.error(this.props.blog.error);

            return (
                <ErrorView message="An error occurred" />
            );
        }

        if (this.props.blog.data === null) {
            return (
                <LoadingView />
            );
        }

        return (
            <React.Fragment>
                {this.props.blog.data.map(post => (
                    <section key={`post-${post.id}`} id={post.id} className="post">
                        <h3 className="post-title">
                            <a href={`https://medium.com/@eserozvataf/${post.uniqueSlug}`}>{post.title}</a>
                            <span className="separator"> · </span>
                            {new Date(post.firstPublishedAt).toLocaleDateString('tr', { day: 'numeric', month: 'long', year: 'numeric' } )}
                            <span className="taglist">
                                <ConditionalView test={post.virtuals.tags.length > 0}>
                                    {` · `}
                                </ConditionalView>
                                {post.virtuals.tags.map(tag => (
                                    <a key={`post-${post.id}-tag-${tag.slug}`} href="javascript:void(0);">{tag.name}</a>
                                ))}
                            </span>
                        </h3>
                    </section>
                ))}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    blog: state.blog,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMediumPostsRequestAction,
}, dispatch);

const HomeContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export {
    HomeContainerConnected as default,
    HomeContainer,
    HomeContainerProps,
    HomeContainerState,
};
