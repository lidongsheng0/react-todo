import React from 'react'
import filter from '../contant'
import Link from './link'

function Filter() {
    return (
        <div>
            <Link filter={filter.all}>{filter.all}</Link>
            <Link filter={filter.completed}>{filter.completed}</Link>
            <Link filter={filter.uncompleted}>{filter.uncompleted}</Link>
        </div>
    )
}

export default Filter
