import React from 'react';
import ReactMarkdown from 'react-markdown';

function Contact() {
    return (
        <ReactMarkdown source={`
# İletişim

Telegram:
http://telegram.me/esero

E-mail:
[eser@ozvataf.com](mailto:eser@ozvataf.com)
`}
        />
    );
}

export {
    Contact as default,
};
