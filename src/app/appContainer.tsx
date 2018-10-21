import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import LayoutContainer from './layouts/default/layoutContainer';
import HomeContainer from './pages/home/homeContainer';
import AboutContainer from './pages/about/aboutContainer';
import ProjectsContainer from './pages/projects/projectsContainer';
import ContactContainer from './pages/contact/contactContainer';
import NotFoundContainer from './pages/notFound/notFoundContainer';

// stylesheets
import './assets/styles.scss';
import './assets/fonts.scss';

interface AppContainerProps {
}

interface AppContainerState {
    initialized: boolean;
}

class AppContainer extends React.Component<AppContainerProps, AppContainerState> {
    constructor(props: AppContainerProps, context: any) {
        super(props, context);

        this.state = {
            initialized: false,
        };
    }

    async init(): Promise<void> {
        if (this.state.initialized) {
            return;
        }

        this.setState({
            initialized: true,
        });

        // this.events.emit('appInit');
    }

    componentDidMount(): void {
        this.init();
    }

    render(): JSX.Element {
        return (
            <Switch>
                <Route path="/" exact={true} strict={true} render={() => <LayoutContainer><HomeContainer /></LayoutContainer>} />

                <Route path="/about/" exact={true} strict={true} render={() => <LayoutContainer><AboutContainer /></LayoutContainer>} />
                <Route path="/projects/" exact={true} strict={true} render={() => <LayoutContainer><ProjectsContainer /></LayoutContainer>} />
                <Route path="/contact/" exact={true} strict={true} render={() => <LayoutContainer><ContactContainer /></LayoutContainer>} />

                <Route render={() => <NotFoundContainer />} />
            </Switch>
        );
    }
}

export {
    AppContainer as default,
};
