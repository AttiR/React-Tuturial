import React from 'react'
import { useParams } from 'react-router'

const Recordsdeatils = () => {

    let params = useParams();
    return (
        <div>
            <h2>Recods Details</h2>
            <ul>
                {params.recordId}
            </ul>

        </div>
    )
}

export default Recordsdeatils
