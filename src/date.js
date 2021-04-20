import React, { Component } from 'react';

// import { render } from 'react-dom';

   

class Dates extends Component {

  constructor() {
      super();

    this.state = {

      currentDateTime: Date().toLocaleString()

    }

  }

  

  render() {

    return (

      <div>

        <p>

          { this.state.currentDateTime }

        </p>

      </div>

    );

  }

}


export default Dates;