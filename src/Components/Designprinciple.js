import React from "react";

function designprinciple(props) {
  const heading = [
    {
      title: "Jarvis Design Principles",
      subtitle:
        "These principles reflect the Jarvis design philosophy and underline how you can apply these (loosely even) to supercharge your user’s productivity. ",
      desctitle:"Do the hard work for your users",
      desc:
        "Prioritization of data, surfacing relevant information and delivering timely  prompts are the bedrock of Jarvis. The priority list is a prime, but not only, example of this. The priority list parses all the tickets and activities that a user might have to go through and provides a concise list of the tasks that the user absolutely needs to address at that particular moment in time. For an IBX tech, this leads to a huge reduction in decision fatigue freeing up a ton of cognitive power to the actual work they have to do. Other examples of this include targetted notifications. Jarvis proposes rich personalized prompts and alerts based on the user’s profile and task history enabling more recognition, less recall leading lower cognitive friction. Another important example is providing contextual information and controls for the user. For example, the right toolbars are context specific. The right toolbar shows a list of tools that are context-specific to the page the user is in. Even within the toolbar, starting a conversation in Teams from a ticket details page, gives users a pre-filled message as.a starting point while providing context to the user at the other end of the conversation. "
    }
  ];

  const arryheading = heading.map((info, i) => {
    return (
      <div>
        <Designprinciplelist
          title={heading[i].title}
          subtitle={heading[i].subtitle}
          desctitle={heading[i].desctitle}
          desc={heading[i].desc}
        />
      </div>
    );
  });
  return <div>{arryheading}</div>;
}
export default designprinciple;

function Designprinciplelist(props) {
  return (
    <div className="Subcontainer">
      <div className="content-wrapper">
        <section className="content-header">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title">{props.title}</div>
              <div className="jarvis_para">{props.subtitle}</div>
              <div className="sub-title">{props.desctitle}</div>
              <div className="jarvis_para">{props.desc}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
