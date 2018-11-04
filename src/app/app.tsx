import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './layouts/default/layout';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Attendences from './pages/attendences/attendences';
import Contact from './pages/contact/contact';
import NotFound from './pages/notFound/notFound';

function App() {
    return (
        <Switch>
            <Route path="/" exact={true} strict={true} render={() => <Layout><Home /></Layout>} />

            <Route path="/about/" exact={true} strict={true} render={() => <Layout><About /></Layout>} />
            <Route path="/projects/" exact={true} strict={true} render={() => <Layout><Projects /></Layout>} />
            <Route path="/attendences/" exact={true} strict={true} render={() => <Layout><Attendences /></Layout>} />
            <Route path="/contact/" exact={true} strict={true} render={() => <Layout><Contact /></Layout>} />

            <Route render={() => <NotFound />} />
        </Switch>
    );
}

export {
    App as default,
};
