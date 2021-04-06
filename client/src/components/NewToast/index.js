import React from "react";
import Toast from 'react-bootstrap/Toast'


function NewToast(props) {
 // const { isVisible, favorite } = props.savedUpdate;
  console.log(props.savedUpdate.isVisible)
 // const isVisible="none"
  return (
<Toast style={{ display: props.savedUpdate.isVisible }}>
  <Toast.Header>
    <strong className="mr-auto">Message Update</strong>
  </Toast.Header>
  <Toast.Body>New book added</Toast.Body>
</Toast>

);
}

export default NewToast;