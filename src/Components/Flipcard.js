import React , {Component} from 'react'; 
  

export default class blogcard extends Component {
    constructor(props){
        super(props);
        this.state={flipped:false}
        this.flip = this.flip.bind(this);
    }

    flip = () => {
    this.setState({ flipped: !this.state.flipped });
}

render(){
    return(
      <div className="content-wrapper">
        
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-6">
                          <div className="page-container">
        <div onMouseEnter={this.flip} onMouseLeave={this.flip}
         className={"card-container" + (this.state.flipped ? " flipped" : "")}>
           <Front />
             <Back />
         </div>
         </div>
         </div>
         </div>
         </section>
         </div>

    )
}

}

class Front extends React.Component {
  render() {
    return (
      <div className="front">
        <ImageArea />
        <MainArea />
      </div>
    )
  }
}

class Back extends React.Component {
  render() {
    return (
      <div className="back">
        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
         </div>
      </div>
    )
  }
}

class ImageArea extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img className="card-image" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"></img>
        <h1 className="title">An example blog post</h1>
      </div>
    )
  }

}

class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        <div className="blog-post">
          <p className="date">{new Date().toLocaleDateString()}</p>
          <p className="blog-content">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          <p className="read-more">Hover to read more...</p>

        </div>

      </div>
    )
  }
}