import React, { Fragment } from 'react'
import "./styles.scss";
import Header from "./header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from '../../hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { time } = props
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);
  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && (
        <Empty onAdd={() => transition(CREATE)} />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form 
          interviewers={props.interviewers}
          onSave={props.onSave}
          onCancel={back}
          student={props.student}
          interviewer={props.interviewer}
          />
      )}
      )
    </article>
  );
}