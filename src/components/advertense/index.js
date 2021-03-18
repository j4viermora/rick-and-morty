import React from 'react';

const WarningHome = ( { children } ) => {
    return(
    <div className="notification is-info is-light">
        {/* <button className="delete"></button> */}
        {children}
    </div>
    )

};

export {
    WarningHome
}