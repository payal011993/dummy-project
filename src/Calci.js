
import React from 'react'


export default class Calci extends React.Component
{
    constructor(){
        super();
        
this.state={
    NUM1:'',
    NUM2:'',
    Result:'',
    
    }
 }
add=()=>{
    
    let NUM1=parseInt(this.state.NUM1);
    let NUM2=parseInt(this.state.NUM2);
    let res=NUM1+NUM2;
    document.getElementById('text').value=res;
}
sub=()=>
{
    
    let NUM1=parseInt(this.state.NUM1);
    let NUM2=parseInt(this.state.NUM2);
    let res=NUM1-NUM2;
    document.getElementById('text').value=res;
    
}
mul=()=>
{
    
    let NUM1=parseInt(this.state.NUM1);
    let NUM2=parseInt(this.state.NUM2);
    let res=NUM1*NUM2;
    document.getElementById('text').value=res;
}
div=()=>
{
    
    let NUM1=parseInt(this.state.NUM1);
    let NUM2=parseInt(this.state.NUM2);
    let res=NUM1/NUM2;
    document.getElementById('text').value=res;
}


render(){
    return(
        <div>
            
            <h3> <center style={{border:'2px solid', padding:'4px 4px ', margin:'4px 4px'}}>ADDITION SUBSTRACTION MULTIFICATION DIVISION</center></h3 >
            <center>
            <label>NUM1:</label>
            <input type='text' name='NUM1' onChange={(e)=>{this.setState({NUM1:e.target.value})}}style={{ border:' 2px solid',padding:'4px 4px',margin:'4px 4px'}} />
           <label>NUM2:</label>
           <input type='text' name='NUM2' onChange={(e)=>{this.setState({NUM2:e.target.value})}} style={{ border:' 2px solid',padding:'4px 4px',margin:'4px 4px'}}/>
           <div>
         <button onClick={this.add}style={{ border:' 2px solid',padding:'4px 4px',margin:'4px 4px', height:'50px', width:'100px'}} >ADDITION</button>
         <button onClick={this.sub} style={{ border:' 2px solid',padding:'4px 4px',margin:'4px 4px', height:'50px', width:'125px'}}>SUBSTRACTION</button>
         <button onClick={this.mul} style={{ border:' 2px solid',padding:'4px 4px',margin:'4px 4px', height:'50px', width:'125px'}}>MULTIFICATION</button>
         <button onClick={this.div}style={{ border:' 2px solid',padding:'4px 4px',margin:'4px 4px', height:'50px', width:'100px'}}>DIVISION</button>

         </div>
          <label>Result:</label>
           <input id='text' style={{ border:' 2px solid',padding:'4px 4px',margin:'4px 4px'}}/>  
       
        
           </center>
        
        </div>
    )
}

}
       
    
