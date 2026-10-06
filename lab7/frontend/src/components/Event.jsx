import React from 'react'

const MyButton = () => {

    const handleclick = () => {
        alert('Button Clicked')
    }
    return(
        <button style={{height: "40px", width: "100px"}} onClick={handleclick}> Click Me</button>
    )
}; 

const Event = () => {
    return (
        <div><MyButton/></div>
    )
}

export default Event
