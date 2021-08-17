import React from 'react'

function About(props) {
    console.log('about page')
    return (
        <div>
            {props.name}
            This about  page.
        </div>
    )
}
export default  React.memo(About)
