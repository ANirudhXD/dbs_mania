import React, { Component } from 'react';

class Nav extends Component {
  render() {
    const { toggleNote, showNote } = this.props;
    
    return (
      
        
      <container>
        
      <div className="nav-button" onClick={() => toggleNote()} >
        { showNote ? 'Cancel' :  '+ Note' }
      </div> 
      </container>
      
    );
  }
}

export default Nav;