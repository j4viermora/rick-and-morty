import React from 'react'

export const InfoEpisodes = ({
    count,
    pages,
    path
}) => {
    return (
        <div className="notification is-primary is-light">
               <p> <strong>Total {`${ path }`  }:</strong> { count } </p>
               <p> <strong>Total pages:</strong> { pages } </p>
        </div>
    )
}
