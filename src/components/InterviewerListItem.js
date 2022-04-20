import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";


// Should receive the following props: Id:number, name:string, avatar:url

// map method on interview list. Have a different name for prop value as parameter being passed

export default function InterviewListItem(props) {
  const { name, avatar, setInterviewer, selected } = props
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected
  });

  return (
    <li
      className={interviewerClass} 
      onClick={setInterviewer} >
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  )
}
