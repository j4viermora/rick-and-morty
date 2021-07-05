import React from 'react';

export function Title( { children } ){
    return(
        <h2 className="title is-2 has-text-white">
            { children }
        </h2>
    )
}