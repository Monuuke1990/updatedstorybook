import React , {Component} from 'react';

export default class  carousal  extends Component{
     constructor(){
        super();
       this.state={
            items:[
                {desc:"Hi Monika",
                id:"1",
                src: "./assets/images/la.jpg"
            },
                 {desc:"Hi Mahesh",
                 id:"2",
                  src: "./assets/images/chicago.jpg"
                },
                 {desc:"Hi Sanjay",
                 id:"3",
                  src: "./assets/images/ny.jpg"
                },
                  
            ]
        }
     }
    render(){
       
        return(<div className="content-wrapper">
                <section className="content-header">
        <div className="row">
            <div className="col-md-12">

                <div id="myCarousel" class="carousel slide" data-ride="carousel">

  {/*<ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>*/}

   <ol class="carousel-indicators">
 {this.state.items.map((ITEMS,index)=>
      (

    <li data-target="#myCarousel" data-slide-to={index} class={index==0?"active":""}></li>
  
 
))}
 </ol>
  
  <div class="carousel-inner">
   
      {this.state.items.map((ITEMS,index)=>
      (
          
          <div class={index==0?"item active":"item"} key={ITEMS.id} >
           <div style={{backgroundImage:`url(${ITEMS.src})`,height:"500px",positio:"relative"}}>
               <h1 style={{color:"#fff", textAlign:"center",bottom: "50px",position: "absolute",left: "42%"}}>{ITEMS.desc} </h1>
           </div>
              
           
    </div>))}
        
  </div>

 
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
               </div>
        </div>
        </section>
        </div>)}
    
}