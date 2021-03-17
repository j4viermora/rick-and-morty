import React from 'react'

export const Col = ( { children } ) => {
    return (
        <div className="column is-one-third">
           { children }
        </div>
    )
}
