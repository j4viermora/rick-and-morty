import React from 'react'

export const Col = ( { children, fr } ) => {
    return (
        <div className={`column ${fr}`}>
           { children }
        </div>
    )
}
