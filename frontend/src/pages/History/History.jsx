import { observer } from "mobx-react";
import { useEffect } from "react";
import { toJS } from "mobx";

import { HistoryTable } from "../../components/HistoryTable";
import { eventsStore } from "../../stores/eventsStore";
import { groupAndSort } from "../../utils";

export const History = observer(() => {
  const { events, resources } = eventsStore;

  useEffect(() => {
    eventsStore.fetchEvents();
  }, []);

  useEffect(() => {
    eventsStore.fetchResources();
  }, [events]);

  if (events && resources) {
    const groupedEvents = groupAndSort(toJS(events));
    const tableData = groupedEvents.reduce((result, item) => {
      const { name, id } = item;
      const {
        details = "",
        code = "",
        values = "",
      } = toJS(resources).find((data) => data.id === `${name}/${id}`) || {};

      result.push({ ...item, details, values, code });
      return result;
    }, []);

    return <HistoryTable list={tableData} />;
  }
});
