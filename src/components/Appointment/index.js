import React, { Fragment } from 'react'
import "./styles.scss";
import Header from "./header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from '../../hooks/useVisualMode';
import Confirm from './Confirm';
import Status from './Status';
import Error from './Error';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVING = "ERROR_SAVING";
const ERROR_DELETING = "ERROR_DELETING";


export default function Appointment(props) {
  const { time } = props
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVING))
  }

  function deleteAppointment(event) {
    transition(DELETING, true)
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETING, true))
  }

  function edit() {
    transition(EDIT);
  }

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
          onDelete={() => transition(CONFIRM)}
          onEdit={edit}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={deleteAppointment}
          interview={props.interview}
          student={props.student}
          interviewer={props.interviewer}
        />
      )}
      {mode === EDIT && (
        <Form
          name={props.interview.name}
          interviewer={props.interview.interviewer["id"]}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          onCancel={back}
          onConfirm={deleteAppointment}
        />
      )}
      {mode === SAVING && (<Status message="Saving" />)}
      {mode === DELETING && (<Status message="Deleting" />)}
      {mode === ERROR_SAVING && (<Error message="Unable to save" onClose={() => back()} />)}
      {mode === ERROR_DELETING && (<Error message="Unable to delete" onClose={() => back()} />)}
    </article>
  );
}