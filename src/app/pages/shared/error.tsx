import React from 'react';

function Error(props) {
    return (
        <div>
            Hata:
            {props.message}
        </div>
    );
}

export {
    Error as default,
};
