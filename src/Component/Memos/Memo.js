import React from 'react'

 function Memo(props) {
    console.log("..................Memos.................");
    return (
        <div>
            This is my memos {props.name}
        </div>
    )
}
export default React.memo(Memo);
