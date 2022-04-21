import React from "react";

// props ---> message:String, onClose:Function

export default function Error(props) {
  const { message, onClose } = props
  return (
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{message}</h3>
      </section>
      <img
        className="appointment__error-close"
        src="images/close.png"
        onClick={onClose}
      />
    </main>
  )
}