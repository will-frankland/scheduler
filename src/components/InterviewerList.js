import React from "react";
import InterviewerListItem from "./InterviewerListItem";


// props = interviewers: array, setInterviewer:function, interviewer:number

export default function InterviewList() {

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"></ul>
    </section>
  )
}