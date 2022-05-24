import cn from "classnames";
import { memo } from "react";
import { generateKey, formatDate } from "../../utils";
import s from "./HistoryTable.module.scss";

export const HistoryTable = ({ list }) => {
  return (
    <section>
      <table className={s.table}>
        <thead>
          <tr className={s.row}>
            <th>Event type</th>
            <th>Details</th>
            <th>Code</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((event, i) => {
            const isSameGroup =
              i > 0 && event.name === list[i - 1].name && event.appointmentId;
            return (
              <TableRow
                key={generateKey(s.row + i)}
                {...event}
                sameGroup={isSameGroup}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

const TableRow = memo(({ name, date, details, values, code, sameGroup }) => (
  <tr className={cn(s.row, { [s.sameGroup]: sameGroup })}>
    <td className={s.first}>
      {!sameGroup && (
        <p
          className={cn(
            s.colored,
            s[
              `${name
                .replace("Intolerance", "")
                .replace("Statement", "")
                .toLowerCase()}`
            ]
          )}
        >
          {name.replace("Intolerance", "").replace("Statement", "")}
        </p>
      )}
    </td>
    <td className={s.second}>
      {details}
      {!!values &&
        !!values.length &&
        values.map((val) =>
          typeof val === "string"
            ? `: ${val}`
            : typeof val === "object"
            ? `: ${val.value} ${val.unit}`
            : ""
        )}
    </td>
    <td className={s.pre_last}>{code}</td>
    <td className={s.last}>{formatDate(date)}</td>
  </tr>
));
