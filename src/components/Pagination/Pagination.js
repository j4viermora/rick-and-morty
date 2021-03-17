import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Pagination = () => {
    return (
            <div className="columns">
                <nav className="pagination" role="navigation" aria-label="pagination">
                    <Link to="/"   className="pagination-previous">Previous</Link>
                    <Link  to="/"  className="pagination-next">Next page</Link>
                    <ul className="pagination-list">
                        <li>
                        <Link  to="/"  className="pagination-link" aria-label="Goto page 1">1</Link>
                        </li>
                        <li>
                        <span className="pagination-ellipsis">&hellip;</span>
                        </li>
                        <li>
                        <Link  to="/"  className="pagination-link" aria-label="Goto page 45">45</Link>
                        </li>
                        <li>
                        <Link to="/"   className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</Link>
                        </li>
                        <li>
                        <Link  to="/"  className="pagination-link" aria-label="Goto page 47">47</Link>
                        </li>
                        <li>
                        <span className="pagination-ellipsis">&hellip;</span>
                        </li>
                        <li>
                        <Link  to="/"  className="pagination-link" aria-label="Goto page 86">86</Link>
                        </li>
                    </ul>
                    </nav>
        </div>
    )
}

export default Pagination
