import React,{Component} from 'react';


export default class header extends Component{
    render(){
        return(


  <header className="main-header">
   
    <a href="index2.html" className="logo">
       <img  src={`${process.env.PUBLIC_URL}/assets/images/group-30.png`} alt="User Avatar"/>
     
    </a>
   
    <nav className="navbar navbar-static-top">
    
      <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>

      
    </nav>
  </header>
 

           

        )
    }
}