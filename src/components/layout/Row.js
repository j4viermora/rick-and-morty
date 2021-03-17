import React from 'react'

export const Row = ( { children } ) => {
    return (
        <div className="columns is-multiline">
            { children }
        </div>
    )
}
