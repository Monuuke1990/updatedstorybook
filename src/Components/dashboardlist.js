import React from "react";






const dashlist = props => {

    
  return (
    <div className="Wrapper_dashboard">
      <div className="content-wrapper">
        <section className="content-header">
          <div className="row">
            <div className="col-md-6">
              <div className="jarvis_title">{props.title}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="jarvis_subtitle">{props.subtitle}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="desctitle">{props.desctitle}</div>
              <div className="jarvis_desc">{props.desc}</div>
            </div>
            <div className="col-md-7">
                <div className="img_container">
                <img src={`${process.env.PUBLIC_URL}/assets/images/group-2.png`}/></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default dashlist;
