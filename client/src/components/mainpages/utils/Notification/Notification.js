import React from 'react'


const ErrorMsgStyle = {
    background: "rgb(214, 10, 10)",
    color: "#f1f1f1",
    textAlign: "center",
    padding: "10px 5px",
    letterSpacing: "1.3px",
    fontSize: "12px"
}

const successMsgStyle = {
    background: "rgb(9, 158, 54)",
    color: "#f1f1f1",
    textAlign: "center",
    padding: "10px 5px",
    letterSpacing: "1.3px",
    fontSize: "12px"
}


export const showErrMsg = (msg) => {
    return <span style={ErrorMsgStyle}>{msg}</span>
}

export const showSuccessMsg = (msg) => {
    return <span style={successMsgStyle}>{msg}</span>
}
