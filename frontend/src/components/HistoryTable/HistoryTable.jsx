import cn from "classnames";
import { generateKey } from "../../utils/generateKey";
import { Container } from "../Layout";
import s from "./HistoryTable.module.scss";

export const HistoryTable = () => {
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
          {Array(50)
            .fill("test")
            .map((e, i) => (
              <tr className={s.row} key={generateKey(s.row + i)}>
                <td className={s.first}>
                  <p className={s.colored}>Observation</p>
                </td>
                <td className={s.second}>Random description</td>
                <td className={s.pre_last}>982641-34</td>
                <td className={s.last}>Mar 28, 2022</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};
