import React from 'react'
import { NavBarPane } from '../NavBarPane'
import { Table } from '../Table'

export const Pane = ({ columns = {}, data = {} }) => {
    return (
        <section className='container m-0 p-0 g-0 d-flex flex-column flex-row gap-2'
            >
                <div className="row g-0">
                    <NavBarPane />
                </div>
            <div className="row g-0">
                <Table columns={columns} data={data} />
            </div>
        </section>
    )
}
