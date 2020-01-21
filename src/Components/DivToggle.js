import React, {Component} from 'react';

/*export default class Showuser extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"monika"
        };
    }

    handlechange =() =>{
    this.setState({
     name:"Monika Uke"
    });
  }
    render(){
        return(<div> <h2>Hello {this.state.name}</h2><br/>
        
        <button className="btn btn-block btn-info" onClick={ this.handlechange}>click</button>
        
        </div>)
    }
}*/


export default class Showuser extends Component{
    constructor(props){
        super(props);
        this.state={
           showDiv:false
        };
    }

    handlechange =() =>{
    this.setState({
     showDiv:!this.state.showDiv
    });
  }
    render(){
        return(<div >
            <div className="row">
                <div className="col-md-4">
             <button className="btn btn-block btn-info"  onClick={ this.handlechange}>Click me to see profile info</button>
            <br/>
            </div>
             </div>
            
            {this.state.showDiv ?
                 
                  <div className="row">
                 <div class="col-md-4">
         <div >
          <div class="box box-widget widget-user-2">
           
            <div class="widget-user-header bg-yellow">
              <div class="widget-user-image">
                <img class="img-circle" src={`${process.env.PUBLIC_URL}/assets/images/user4-128x128.jpg`} alt="User Avatar"/>
              </div>
             
              <h3 class="widget-user-username">Nadia Carmichael</h3>
              <h5 class="widget-user-desc">Lead Developer</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li><a href="#">Projects <span class="pull-right badge bg-blue">31</span></a></li>
                <li><a href="#">Tasks <span class="pull-right badge bg-aqua">5</span></a></li>
                <li><a href="#">Completed Projects <span class="pull-right badge bg-green">12</span></a></li>
                <li><a href="#">Followers <span class="pull-right badge bg-red">842</span></a></li>
              </ul>
            </div>
          </div>
         </div>
        </div>

<div class="col-md-4">
        
           <div class="box box-widget widget-user">
           
            <div class="widget-user-header bg-black" >
              <h3 class="widget-user-username">Elizabeth Pierce</h3>
              <h5 class="widget-user-desc">Web Designer</h5>
            </div>
            <div class="widget-user-image">
              <img class="img-circle" src={`${process.env.PUBLIC_URL}/assets/images/user4-128x128.jpg`} alt="User Avatar"/>
            </div>
            <div class="box-footer">
              <div class="row">
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">3,200</h5>
                    <span class="description-text">SALES</span>
                  </div>
                 
                </div>
               
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">13,000</h5>
                    <span class="description-text">FOLLOWERS</span>
                  </div>
                 
                </div>
               
                <div class="col-sm-4">
                  <div class="description-block">
                    <h5 class="description-header">35</h5>
                    <span class="description-text">PRODUCTS</span>
                  </div>
                 
                </div>
               
              </div>
              
            </div>
          </div>

        </div>


        <div class="col-md-4">
          
          <div class="box box-widget widget-user-2">
          
            <div class="widget-user-header bg-yellow">
              <div class="widget-user-image">
                <img class="img-circle" src={`${process.env.PUBLIC_URL}/assets/images/user3-128x128.jpg`} alt="User Avatar"/>
              </div>
            
              <h3 class="widget-user-username">Nadia Carmichael</h3>
              <h5 class="widget-user-desc">Lead Developer</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li><a href="#">Projects <span class="pull-right badge bg-blue">31</span></a></li>
                <li><a href="#">Tasks <span class="pull-right badge bg-aqua">5</span></a></li>
                <li><a href="#">Completed Projects <span class="pull-right badge bg-green">12</span></a></li>
                <li><a href="#">Followers <span class="pull-right badge bg-red">842</span></a></li>
              </ul>
            </div>
          </div>
         
        </div>
        
        </div>:null}
        
        </div>)
    }
}


