import React from 'react'

const Dropdown = () => {
    return (
        <>
            <div className="app">
                <div className="menu-container">
                    <div className="dropdown-menu">
                        <h3>Create Product</h3>
                        <ul>
                            <DropdownItem text={'Create Product'}/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


function DropdownItem(props) {
    return <>
            <li className="dropdownItem">
                <a>{props.text}</a>
            </li>
        </>
}



export default Dropdown
