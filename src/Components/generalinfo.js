import React from 'react';

const generallist = (props) => {
    return (
        <div>
        <div class="col-md-3 col-sm-6 col-xs-12">
           
          <div class="info-box">
            <span class="info-box-icon bg-green">{props.Count}</span>

            <div class="info-box-content">
              <span class="info-box-text">{props.title}</span>
              <span class="info-box-text">{props.desc}</span>
            </div>
           
          </div>
         
        </div>  

        </div>
    )
}

export default  generallist;
