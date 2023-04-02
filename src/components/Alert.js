import React from 'react'

function Alert(props) {
  return (
    <div>
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.type}
        </div>
    </div>
  )
}

export default Alert
