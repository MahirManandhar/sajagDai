import React from 'react'
import { Button } from "@chakra-ui/react";

export default function addPlace(props) {
  return (

<>

    <div className="accordion" id={props.data}>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {props.data} 
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body alignCenter">
        <Button type="button" colorScheme="purple" >Add</Button>
        </div>
      </div>
    </div>
  </div>


    </>
  )
}
