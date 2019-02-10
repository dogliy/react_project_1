import React, { Component } from 'react';
import './GetAll.css';





class GetAll extends Component {
    constructor(props) {
      super(props);
      this.createAllTeams=this.createAllTeams.bind(this);
    }
     
    createAllTeams(){
        //alert(this.props.children.length);

    }
        
    
    render() {
      return (<section id="outBox"><section id="inBox">{this.props.children[0]}<br></br>{this.props.children[1]}<br></br>{this.props.children[2]}<br></br>{this.props.children[3]}<br></br>{this.props.children[4]}<br></br>{this.props.children[5]}<br></br></section></section>)
    }
  }



export default GetAll