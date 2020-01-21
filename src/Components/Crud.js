import React, {Component} from 'react'

export default class Crud extends Component{
        constructor(props){
            super(props);
            this.state={
                title:"Hello",
                act:0,
                index:"",
                data:[],
               lastnameId:''
            }
        }

        

submit=(e)=>{
    e.preventDefault();
    console.log("hi");
    let data=this.state.data;
        let Name = this.refs.name.value;
        let LastName = this.refs.lastname.value;
        let datainfo={
            Name,LastName
        }
        data.push(datainfo);

        this.setState({
                data:data
        });
         this.refs.Myform.reset();
         this.refs.name.focus();
}
 
 remove=(i)=>{
   let data = this.state.data;
   data.splice(i['currentTarget'].id,1);
   this.setState({ 
              data:data
   })
     this.refs.Myform.reset();
     this.refs.name.focus();
 }

 edit=(i)=>{
    let data =this.state.data;
            this.refs.lastname.value=data[i['currentTarget'].id].LastName;
             this.refs.name.value=data[i['currentTarget'].id].Name;
            this.refs.name.focus();
            this.setState({
                act:1,
                index:i,
                lastnameId:i['currentTarget'].id
            })
 }

  update=(i)=>{
        i.preventDefault();
      let data=this.state.data;
        let Name = this.refs.name.value;
        let LastName = this.refs.lastname.value;
        let datainfo={
            Name,LastName
        }
        const newArray = Array.from(this.state.data);
         data.push(datainfo);
         newArray[this.state.lastnameId] = datainfo;
         this.setState({data: newArray,   act:0});
         this.refs.Myform.reset();

 }

    render(){
         let data =this.state.data;
        return(<div> 
            
            <div className="content-wrapper">
                <section className="content-header">
        <div className="row">

                    <div className="col-md-6">
                     
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">User Information</h3>
            </div>
           
            <form class="form-horizontal" ref="Myform">
              <div class="box-body">
                <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">Name</label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="Name"  ref="name"   placeholder="Name"/>
                  </div>
                </div>
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Last Name</label>

                  <div class="col-sm-10">
                    <input type="text" name="Desc"   class="form-control" ref="lastname"  placeholder="lastname"/>
                  </div>
                </div>
             </div>
             
              <div class="box-footer">
               
                
                  <input style={this.state.act=== 1 ? { "display": "none" } : { "display": "block" }} type="submit" value="Submit" onClick={this.submit}  class="btn btn-info pull-right"/>
                  <input style={this.state.act=== 1 ? { "display": "block" } : { "display": "none" }} id='updateBtn' type="submit" value="Update" onClick={this.update}  class="btn btn-info pull-right"/>
              </div>
             

            </form>

          
          </div>
   </div>
        
        </div>
         <div className="row">
                    <div className="col-md-6">
                          <ul className="ul-value">
                              {data.map((data,i)=> <li  id={data.Name} key={i}>
                                <div className="tbl-value"> <span>{i+1}. {data.Name}</span>,<span>{data.LastName}</span></div>
                                  <div className="btn-action">
                                      <input id={i} type="submit" value="Remove" onClick={this.remove}  class="btn btn-danger pull-right"/>
                               <input  id={i} type="submit" value="Edit" onClick={this.edit}  class="btn btn-primary pull-right"/>
                              </div></li>)}
               
            </ul></div></div>
        </section>
        </div>
</div>)
    }
}