import React from "react";
import Dashlist from "./dashboardlist";

function dashboard(props) {
  const heading = [
    {
      title: "Jarvis Interaction Guidelines",
      subtitle:
        "Strategic and tactical guidelines for making your Equinix application future-ready",
      desctitle: "Bring on your Suggestions",
      desc:
        "This is a living document. Feel free to get in touch with us with your feedback and we would be happy to incorporate them into the guidelines. We are all in this together in this, after all. "
    }
  ];

  const arryheading = heading.map((info, i) => {
    return (
      <div>
        <Dashlist
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
export default dashboard;
