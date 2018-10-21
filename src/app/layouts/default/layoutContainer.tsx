declare var global: any;

import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutContainerProps {
}

interface LayoutContainerState {
}

class LayoutContainer extends React.Component<LayoutContainerProps, LayoutContainerState> {
    constructor(props: LayoutContainerProps, context: any) {
        super(props, context);

        this.state = {};
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    render(): JSX.Element {
        return (
            <React.Fragment>
                <header id="header">
                    <h1><NavLink exact={true} to="/">Eser Ozvataf</NavLink></h1>
                    <p>Yazılım Mimarı</p>
                    <div id="follow-icons">
                        <a href="http://github.com/eserozvataf"><i className="fa fa-github-square fa-2x"></i></a>
                        <a href="http://twitter.com/eserozvataf"><i className="fa fa-twitter-square fa-2x"></i></a>
                        <a href="http://linkedin.com/in/eserozvataf"><i className="fa fa-linkedin-square fa-2x"></i></a>
                        <a href="mailto:eser@ozvataf.com"><i className="fa fa-envelope-square fa-2x"></i></a>
                    </div>

                    <h6><NavLink exact={true} to="/">Blog</NavLink></h6>
                    <h6><NavLink to="/about/">Hakkımda</NavLink></h6>
                    <h6><NavLink to="/projects/">Projeler</NavLink></h6>
                    <h6><NavLink to="/contact/">İletişim</NavLink></h6>
                </header>
                <main id="content">
                    {this.props.children}
                </main>
                <footer id="footer">
                    <section id="footer-message">© 2018 Eser Ozvataf.</section>
                </footer>
            </React.Fragment>
        );
    }
}

export {
    LayoutContainer as default,
    LayoutContainerProps,
    LayoutContainerState,
};
