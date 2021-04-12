import React, { useState } from 'react'

export const Pagination = () => {
  
    const [ page, setPage ] = useState(1);

    const handlerPage = () => {
        setPage( page + 1 )
    }
  
    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <button className="pagination-previous" title="This is the first page" disabled>Previous</button>
            <button className="pagination-next" onClick={ handlerPage }>Next page</button>
            <ul className="pagination-list">
            <li>
                <button className="pagination-link is-current" aria-label="Page 1" aria-current="page">{ page }</button>
            </li>
            <li>
                <button className="pagination-link" aria-label="Goto page 2">{ page + 1 }</button>
            </li>
            <li>
                <button className="pagination-link" aria-label="Goto page 3">{ page +2 }</button>
            </li>
            </ul>
      </nav>
    )
}
