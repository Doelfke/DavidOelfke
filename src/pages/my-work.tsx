import { Page } from "@/components/page/Page";
import { WORK_HISTORY } from "@/data/workHistory";

import styles from "./my-work.module.scss";

export default function MyWorkPage() {
  return (
    <Page title="My Work">
      <title>David Oelfke - My Work</title>

      {WORK_HISTORY.map((job) => {
        return (
          <div className={styles.container} key={job.companyName}>
            <div className={styles.titleContainer}>
              <div>
                {job.companyName} - {job.position}
              </div>
              <div className={styles.date}>
                {job.startDate} - {job.endDate}
              </div>
            </div>
            <ul>
              {job.accomplishments.map((accomplishment, i) => {
                return <li key={i}>{accomplishment}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </Page>
  );
}
