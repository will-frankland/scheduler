


export function getAppointmentsForDay(state, day) {
  const appointmentList = [];

  const filteredDays = state.days.filter(dayOfWeek => dayOfWeek.name === day);
  if (filteredDays.length === 0) {
    return [];
  }
  filteredDays[0].appointments
    .forEach(num =>
      appointmentList.push(state.appointments[num])
    )
  return appointmentList;
}

// getInterviewersForDays
export function getInterviewersForDay(state, day) {
  const interviewersList = [];

  const filteredDays = state.days.filter(dayOfWeek => dayOfWeek.name === day);
  if (filteredDays.length === 0) {
    return [];
  }
  filteredDays[0].interviewers
    .forEach(num =>
      interviewersList.push(state.interviewers[num])
    )
  return interviewersList;
}


export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  const interviewData = {};
  const accessInterviewDetails = state.interviewers[interview.interviewer]
  const student = interview.student
  // console.log("-->", accessInterviewDetails);
  interviewData["student"] = student
  interviewData["interviewer"] = accessInterviewDetails
  return interviewData;
}