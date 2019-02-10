import React, { Component } from 'react';
import './BetweenYears.css';
import GetAll from './GetAll';





class BetweenYears extends Component {
    constructor(props) {
        super(props);
  
     
       this.yearsResult=this.yearsResult.bind(this);
       this.state={
           data:[]
       }

       
    }


    yearsResult(){
      
        var proxy=`https://cors-anywhere.herokuapp.com/`;
        var url=`https://newteamsapp2018.herokuapp.com/getTeamBetweenYears?from=${document.getElementById('yearStart').value}&to=${document.getElementById('yearEnd').value}`;
        fetch(`${proxy}${url}`,{method: 'get' }  )
        .then((response)=>{   
            return response.json();
    
        },(error)=>{
            console.log(error);
        }).then((array)=>{
           
            if(array.length>0){
                 this.setState({
                     data:[...array]
                 })

            }else{
                alert(array.Details);
            }
        })
      
    
    }


    render() {
        return (

        
            <div id="formOut">
                <section id="formIn">
                        <form >
                            <p>select lower rank</p>
                            <input type="text" id="yearStart"></input>
                            <br></br>
                            <p>select high rank</p>
                            <input type="text" id="yearEnd"></input>
                            <br></br>
                            
                        </form>


                        <button onClick={this.yearsResult}>click</button>

                        <section>{this.state.data.map((item,index)=>{
                            return <GetAll key={index}>{item.class}{item.coach_name}{item.team_name}{item.years}{item.details.country}{item.details.date}</GetAll>
                        })}</section>
                </section>
            </div>
        );
    }
}



export default BetweenYears