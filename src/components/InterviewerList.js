import React from "react";
import "./InterviewerList.scss";
import InterviewListItem from "./InterviewerListItem";


// props = interviewers: array, setInterviewer:function, interviewer:number

export default function InterviewerList(props) {
  const InterviewerListArray = props.interviewers.map(interviewer => {

    return (
      <InterviewListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />
    )
  });
  return <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{InterviewerListArray}</ul>
  </section>
}
