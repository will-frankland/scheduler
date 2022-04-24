import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";


// EDIT props ----> !student:string!, !interviewer:Number!, !interviewers:Array!, onSave:Function, onCancel:Function
// CREATE props --> interviewers:Array, onSave:Function, onCancelFunction

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const reset = function () {
    setStudent("")
    setInterviewer(null);
  }
  const cancel = function () {
    reset()
    props.onCancel()
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={(event) => setInterviewer(event)}
          interviewer={props.interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger >Cancel</Button>
          <Button onClick={props.onSave} confirm >Save</Button>
        </section>
      </section>
    </main>
  )
}
