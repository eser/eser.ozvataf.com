import React from 'react';

import { Container, Item, Image, Header, Button } from 'semantic-ui-react';

import Conditional from '../shared/conditional';
import Loading from '../shared/loading';
import ErrorComponent from '../shared/error';

import layoutStyles from '../../layouts/default/assets/styles.scss';
import avatarImage from './avatar.png';

function Home() {
    return (
        <>
            <Container>
                <Header
                    as="h1"
                    content="Eser Ozvataf"
                    style={{
                        fontSize: '3em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '2em',
                    }}
                    />
                <Header
                    as="h2"
                    content="Do whatever you want when you want to."
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginTop: '1.5em',
                    }}
                    />
            </Container>
        </>
    );
}

export {
    Home as default,
};
