import React , {Component} from 'react';
import '../jarvis.css';

export default class form extends Component{
    constructor(props){
        super(props);
       // this.state = {  value:''};
       this.state={email:'',
                    fullname:''
                  }

       // this.handleChange = this.handleChange.bind(this);
        //this.handleDescrChange = this.handleDescrChange.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
    }

    // handleChange(e){
    //     this.setState({value:e.target.value.toUpperCase()});
    //      console.log("Usename", e.target.value);

    // }

  handleChangeupdate =(event) =>{
    this.setState({[event.target.name]:event.target.value});
    console.log("Usename", event.target.value);

  }
    //  handleDescrChange(e){
    //     this.setState({value:e.target.value});
    //     console.log("Description", e.target.value);

    // }
    SubmitForm(e){
        alert(JSON.stringify(this.state) );
        e.preventDefault();
    }
    render(){
        return(
        <div className="content-wrapper">
                <section className="content-header">
        
        <div className="row">

                    <div className="col-md-6">
                     
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">User Information</h3>
            </div>
           
            <form class="form-horizontal" onSubmit={this.SubmitForm}>
              <div class="box-body">
                <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">Email</label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="email" value={this.state.email}  onChange={this.handleChangeupdate} placeholder="Email"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword3" class="col-sm-2 control-label">Fullname</label>

                  <div class="col-sm-10">
                    <input type="text" name="fullname" value={this.state.fullname}  onChange={this.handleChangeupdate} class="form-control" id="inputPassword3" placeholder="Password"/>
                  </div>
                </div>

                
              </div>
             
              <div class="box-footer">
                <button type="submit" class="btn btn-default">Cancel</button>
                
                  <input type="submit" value="Submit"   class="btn btn-info pull-right"/>
              </div>
             
            </form>
          </div>
          
		  


                    </div>


         
        
        </div>
        </section>
        </div>
        
        );
    }
}


