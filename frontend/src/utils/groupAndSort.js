export const groupAndSort = (list) => {
  const groupedEvents = list.reduce((result, item) => {
    const { appointmentId, id } = item;

    (appointmentId && result[appointmentId]) || id === result[appointmentId]
      ? result[appointmentId].push(item)
      : appointmentId && !result[appointmentId]
      ? (result[appointmentId] = [item])
      : (result[id] = [item]);

    return result;
  }, {});

  const sortedTableEvents = Object.values(groupedEvents).sort((a, b) => {
    if (a.length > 1) {
      b.sort((e, f) => sortDates(e.date, f.date));
      startWithAppointment(a);
    }
    if (b.length > 1) {
      b.sort((e, f) => sortDates(e.date, f.date));
      startWithAppointment(b);
    }

    return sortDates(b[0].date, a[0].date);
  });
  
  return sortedTableEvents.flat();
};

const sortDates = (dateString1, dateString2) =>
  new Date(dateString1).getTime() - new Date(dateString2).getTime();

const startWithAppointment = (list) => {
  const appointmentIndex = list.findIndex(
    (item) => item.name === "Appointment" && !item.appointmentId
  );
  if (appointmentIndex !== 0) {
    [list[0], list[appointmentIndex]] = [list[appointmentIndex], list[0]];
  }
  return list;
};
