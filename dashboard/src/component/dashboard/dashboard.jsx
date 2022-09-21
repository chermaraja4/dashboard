import "./dashboard.css"
import * as moment from 'moment';
import Table from "../Table/table"
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Circle from "../circle/circle";
import MyResponsiveBar from "../Charts/Bar"
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Tracker from "../progressTracker/tracker";
export default function Dashboard(){
  var today = new Date();

const  time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const useName=localStorage.getItem("userName");
const card2={
title:"Lorem Ipsum",
content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

}

    return (
      <div className="dashboard">
        <div className="wrapper"> 
            <div className="grid1 position">
          <div className="time">            
            <div>Hi </div>
            <div>Time:{time}</div>
          </div>        
           <div className="username">{useName} </div>       
           <div className="date"> {moment().format('dddd,MMMM DD ,YYYY')} </div>
          
    </div>
          <div className="grid2 position">          
            <ProgressBar  now={80} />
            <div class="second_card">
               <div >       
                 <div>Plannig</div>     
                  <Circle/>
                   <div>Completed</div>
                </div>
                <div>       
                <div>Plannig</div>     
                <Circle/>
                   <div>Completed</div>
                </div>
                <div>       
                <div>Developmet</div>     
                   <div style={{ width: 80, height: 80 }}>
                     <CircularProgressbar value={67} text={`${67}%`} styles={buildStyles({ backgroundColor: '#44af69',textColor:"#44af69", pathColor:"#44af69",textSize: '26px',fontWeight:"bold"})}/>
                   </div>                 
                </div>
                <div>       
                <div>Testing</div>     
                    <Circle/>
                   <div>Waiting</div>
                </div>                             
            </div>            
          </div>
            <div className="grid3 third_card">
              <div>Projected Launch Date</div>
              <div className="Launch_Date"> 
                <div className="flag"><i class="fa fa-flag-checkered fa-3x" aria-hidden="true"></i> </div>
                 <div className="month"> Friday,December 15 <br></br>
                 <span className="days">  121 Days</span>                 
              </div> 
             </div>
            </div>
            <div className="grid4 position">
            <div className="header">Risks</div> 
              <div className="forth_card line_height">
                <div className="number">81%</div>  
                <div className="text"> currently over target Budget</div> 
              </div>
              <div className="forth_card line_height">
                <div className="number">2</div>  
                <div className="text"> currently Task (High Risk)</div> 
              </div>
              <div className="forth_card line_height">
                <div className="number">81%</div>  
                <div className="text">OverDue Task(Medium Risk)</div> 
              </div>
            </div>
            <div className="grid5 position">
            <div className="header"> {card2.title}</div>
             <div>{card2.content}</div>          
               </div>
            <div className="grid6 position">  
            <div className="header">Overdue Tasks </div>             
               <Table/>   </div>
            <div className="grid7 position " >
            <div className="header">Project summary </div>     
            <div className="forth_card spacing">
                <div className="left_side">Start Date:</div>  
                <div className="Ride_side">2017-05-01</div> 
              </div>
              <div className="forth_card spacing">
                <div className="left_side">End Date</div>  
                <div className="Ride_side">2017-12-15</div> 
              </div>
              
              <div className="forth_card spacing">
                <div className="left_side">Project Leader</div>  
                <div className="Ride_side"> Georg Danwill</div> 
              </div>
              <div className="forth_card spacing">
                <div className="left_side">Overall Status</div>  
                <div className="Ride_side">in time</div> 
              </div>
              </div>
            <div className="grid8 position">
            <div className="header"> Avg Handle Time (in Days) for Project-Task </div>   
            
            <div style={{height:"25vh"}}>    <MyResponsiveBar/> </div></div>
            <div className="grid9 position ">
            <div className="header"> Upcoming Deadliness</div> 
               
               <Table/>                
            </div>
            <div className="grid10 position ">
            <div className="header">Project Logs</div> 
                <Tracker/></div>
        </div>
        </div>
    )
}