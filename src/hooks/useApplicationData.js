import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";


export default function useApplicationData() {
  const setDay = day => setState({ ...state, day });
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // update spots when interview booked
    const locateDays = state.days.find((day) => day.appointments.includes(id));
    const days = state.days.map((day) => {
      if (day.name === locateDays.name && state.appointments[id].interview === null)
      { return {
        ...day, spots: day.spots - 1 };
      } else {
        return day;
      }
    });

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments,
          days
        });
      })
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null 
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // update spots when interview cancelled
    const locateDays = state.days.find((day) => day.appointments.includes(id));
    const days = state.days.map((day) => {
      if (day.name === locateDays.name)
      { return {
        ...day, spots: day.spots + 1 };
      } else {
        return day;
      }
    });

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments,
          days
        });
      })
  }

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return { state, setDay, bookInterview, cancelInterview };
}