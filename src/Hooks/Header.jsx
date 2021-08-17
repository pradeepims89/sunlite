import React from 'react'

 function Header(props) {
    console.log('Header page')
    return (
        <div>
            {props.name}
            This header page.
        </div>
    )
}
export default Header;
