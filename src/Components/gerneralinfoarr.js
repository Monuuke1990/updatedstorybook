import React from 'react';
import Generallist from './generalinfo';



const info = (props) =>{
     /*return(
        <div>
       <Generallist title="monika" desc="Uke "/>
        </div>
    )*/

   const infolist=[
      {       id:1,
                title:"Atos",
                 desc:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                 count:"102"
                 
         },
        {       id:2,
                 title:"IBM",
                 desc:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                   count:"103"
         },
         {      id:3,
                 title:"TCS",
                 desc:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                   count:"104"
                  
        },
        {      id:3,
                 title:"TCS",
                 desc:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                   count:"105"
                  
        },
     ]

    const arryvarinfo =  infolist.map((info,i) =>{
        return(<div> 
            <Generallist id ={infolist[i].id} 
                                title={infolist[i].title}
                                desc={infolist[i].desc}
                                Count={infolist[i].count}
                   />    </div>
                   )
                         
                            
    });
    return(
        <div>
            {arryvarinfo}
        </div>
    )
}
   

export default info;