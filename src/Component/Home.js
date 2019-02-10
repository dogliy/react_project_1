import React, { Component } from 'react';

import './Home.css';
import GetAll from './GetAll';
import BetweenYears from './BetweenYears';
import UpdateCoachName from './UpdateCoachName';




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getAllTeams: 1,
            betweenYears: 0,
            updateCoachName: 0,
            data:[]
           
        }
        this.flag=1;
      
        this.getAll=this.getAll.bind(this);
        this.showBetweenDates=this.showBetweenDates.bind(this);
        this.updateCoachName=this.updateCoachName.bind(this);
        this.loadInfo=this.loadInfo.bind(this);

    }

 

    showBetweenDates(){

        this.setState({
            getAllTeams: 0,
            betweenYears: 1,
            updateCoachName: 0

        })

    }
    getAll(){
        fetch('https://cors-anywhere.herokuapp.com/https://newteamsapp2018.herokuapp.com/getAllTeams',{method: 'get'})
        .then((response)=>{
            return response.json();

           
        },(error)=>{
            
            console.log(error);
        }).then((array)=>{
           
           
            if(array.length>0)
            {
                this.setState({
                    getAllTeams: 1,
                    betweenYears: 0,
                    updateCoachName: 0,
                    data:[...array]
               })  

            }else{
                alert(array.Details);
            }
               
        })

      
    }
    updateCoachName(){
        this.setState({
            getAllTeams: 0,
            betweenYears: 0,
            updateCoachName: 1
        })

    }

    loadInfo(){
        if(this.flag==1){
            this.flag=0;
            this.getAll();
        }
        if(this.state.getAllTeams===1){
           return this.state.data.map((item,i)=><GetAll key={i}>{item.class}{item.coach_name}{item.team_name}{item.years}{item.details.country}{item.details.date}</GetAll>)
        }else if(this.state.betweenYears===1){
            return(<BetweenYears/>);
        }else if(this.state.updateCoachName===1){
            return(<UpdateCoachName/>);
        }else{
            return(<p></p>);
        }

    }

    render() {
        return (
            <section id="page">
                <section id="topMenuOut">
                    <section  id="getAll" onClick={this.getAll}>getAll</section>
                    <section  id="showBetweenDates" onClick={this.showBetweenDates}>showBetweenDates</section>
                    <section  id="updateCoachName" onClick={this.updateCoachName}>updateCoachName</section> 
                </section>
                <section>{this.loadInfo()}</section>
            </section>

        );
    }
}



export default Home