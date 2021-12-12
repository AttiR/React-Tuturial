import React from 'react'

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name} has a {props.job} job and his age is {props.age}</p>
        </div>
    )
}

export default Hello
