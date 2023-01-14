import React, { useState } from "react";

import { Fragment } from "react";

function Form(props) {
  

  return (
    <Fragment>
    <form>
      <input type="text" onChange={props.handleFirstNameChange} value={props.firstName} />
      <input type="text" onChange={props.handleLastNameChange} value={props.lastName} />
      <button type="submit">Submit</button>
    </form>
    <form>
        <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
        <input
          type="checkbox"
          id="newsletter"
          onChange={props.handleNewsletterChange}
          
          checked={props.newsletter}
        />
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
}

export default Form;
