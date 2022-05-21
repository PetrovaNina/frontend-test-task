import { configure, makeAutoObservable, runInAction, toJS } from "mobx";
import { getEvents, getResources } from "../services/events";

export const eventsStore = makeAutoObservable({
  events: null,
  resources: null,

  fetchEvents: () => {
    getEvents().then((res) =>
      runInAction(() => {
        eventsStore.events = res.items;
      })
    );
  },
  
  fetchResources: () => {
    const ids = eventsStore.events
      ? eventsStore.events.map((item) => `${item.name}/${item.id}`)
      : null;

    if (ids)
      getResources(ids).then((res) =>
        runInAction(() => {
          eventsStore.resources = res.items;
        })
      );
  },
});
