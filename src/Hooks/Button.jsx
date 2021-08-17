import React from 'react'

 function Button(props) {
console.log("button--" +props.children)
    return (
        <div>
            <button className="error" type="button" onClick={props.clickHandler}>{props.children}</button>
        </div>
    )
}
export default  React.memo(Button)
