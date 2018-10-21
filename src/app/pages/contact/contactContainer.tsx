import * as React from 'react';
import ReactMarkdown from 'react-markdown';

interface ContactContainerProps {
}

interface ContactContainerState {
}

class ContactContainer extends React.Component<ContactContainerProps, ContactContainerState> {
    constructor(props: ContactContainerProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        return (
            <ReactMarkdown source={`
# İletişim

Telegram:
http://telegram.me/esero

E-mail:
[eser@ozvataf.com](mailto:eser@ozvataf.com)
`} />
        );
    }
}

export {
    ContactContainer as default,
    ContactContainerProps,
    ContactContainerState,
};
