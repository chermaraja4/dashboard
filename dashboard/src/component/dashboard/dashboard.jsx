import "./dashboard.css"
import Piechart from "../Charts/pie"
import Table from "../Table/table"

export default function Dashboard(){
    return (
        <div className="wrapper"> 

            <div className="grid1">
            <div>card1</div> 
                <div><Piechart/></div>
            </div>
            <div className="grid2">
            <div>card1</div> 
                box2</div>
            <div className="grid3">
            <div>card1</div> 
                box3</div>
            <div className="grid4">
            <div>card1</div> 
              {/* <div>
                <div>81%</div>  
                <div> currently over target Budget</div> 
              </div> */}
              {/* <div>
                <div>2</div>  
                <div> currently over target Budget</div> 
              </div> */}
              {/* <div>
                <div>81%</div>  
                <div> currently over target Budget</div> 
              </div> */}
            </div>
            <div className="grid5">
            <div>card1</div> 
                box5</div>
            <div className="grid6">  
            <div>Upcoming Deadliness </div> 
            
               <Table/>   </div>
            <div className="grid7">box7</div>
            <div className="grid8">box8</div>
            <div className="grid9">
                Upcoming Deadliness
               <Table/>                
            </div>
            <div className="grid10">
            <div>card1</div> 
                box10</div>
        </div>
    )
}