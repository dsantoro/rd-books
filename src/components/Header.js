import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      siteName: "RD Books"
    }
  }

  render() {

    return(

      <header className="header">
        <div className="row">
          <div className="small-12 columns">
            <span className="logo">{this.state.siteName}</span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
