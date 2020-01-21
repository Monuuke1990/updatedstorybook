import React , {Component} from 'react';

// class component with props 
/*class student extends Component {
    render (){
        return(<div>
            Hi {this.props.name}
        </div>)
    }
}*/
 
// class components with state,  replace props with state 
class student extends Component {
     state={name:'Abhishek'}
    // define  with constructor
    //constructor(props){
      //  super(props);
       
       // this.handleClick=this.handleClick.bind(this);
    //}
handleClick=()=>{
    console.log("hi");
this.setState({name:'Monika Ishwar Uke'})
}

  
    render (){
       
        // define without contructor
        
       // this.state={roll:'101'}
        return(  <div className="content-wrapper">
              

                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
            Hi <p > {this.state.name }</p>
            <button onClick={this.handleClick}>click me</button>
       </div></div> </section></div>)
    }
}



export default student;