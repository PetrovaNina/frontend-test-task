const url = "http://localhost:5010";

const performRequest = (url, method, body) =>
  fetch(url, {
    method,
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());

export const getEvents = () => performRequest(`${url}/events`, "POST");

export const getResources = (ids) =>
  performRequest(`${url}/resources`, "POST", { ids });
