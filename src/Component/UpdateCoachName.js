import React, { Component } from 'react';
import './UpdateCoachName.css';



class UpdateCoachName extends Component {
    constructor(props) {
        super(props);
        this.coachNameUpdate=this.coachNameUpdate.bind(this);
    }

    coachNameUpdate(){
     
        var coachData={
            team_name:document.getElementById('TeamName').value,
            coach_name:document.getElementById('coachNewName').value
        };

        const proxy1=`https://cors-anywhere.herokuapp.com/`;
        const url1=`https://newteamsapp2018.herokuapp.com/updateCoachName`;
        console.log(`https://cors-anywhere.herokuapp.com/https://newteamsapp2018.herokuapp.com/updateCoachName`);
        fetch(`${proxy1}${url1}`,{method: "POST",headers: {'Content-Type': 'application/json'},body: JSON.stringify(coachData),credentials: "same-origin"} )
        .then((response)=>{
           
            return response.json();


        },(error)=>{
            alert(error);
        }).then((res)=>{
            if(res.Status=="Succeed"){
                alert("coach name updated");
            }else{
                alert(res.details);
            }
          
        })
      
    }
    

    render() {
        return (
            
            <div id="formOut">
                <section id="formIn">
                    <form >

                                <p>Enter team name</p>
                                 <input type="text"  id="TeamName"></input>
                         

                        <br></br>
                                <p>Enter new coach name</p>
                                  <input type="text"  id="coachNewName"></input>
                        
                        <br></br>
                    </form>

                     <button onClick={this.coachNameUpdate}>click</button>
                 </section>
        
            </div>


        );

    }


}



export default UpdateCoachName