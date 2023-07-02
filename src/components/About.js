import React from 'react'

export default function About(props) {
  return (
    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#292929', color: props.mode === 'dark' ? 'white' : 'black' }}>
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212121', color: props.mode === 'dark' ? 'white' : 'black' }}>
              It uses technologies like React, bootstrap, JSX to give user seemless user experience.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#292929', color: props.mode === 'dark' ? 'white' : 'black' }}>
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212121', color: props.mode === 'dark' ? 'white' : 'black' }}>
              The "TextUtils" website, it could offer a user interface where you can input text and choose from various operations or manipulations to perform on that text. These operations could include converting the text to uppercase or lowercase, counting words or characters, and more.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#292929', color: props.mode === 'dark' ? 'white' : 'black' }}>
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212121', color: props.mode === 'dark' ? 'white' : 'black' }}>
              "TextUtils" as a React-based website would leverage the power of React, JSX, and other web technologies such as bootstrap to provide a user-friendly and interactive platform for manipulating and transforming text.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
