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
            {!!job.domains.length && (
              <div className={styles.domains}>
                {job.domains.map((domain, i) => {
                  return (
                    <div key={domain} className={styles.domain}>
                      <a href={`https://${domain}`} target="__blank">
                        {domain}
                      </a>
                      {i !== job.domains.length - 1 && (
                        <div className={styles.divider} />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            {!!job.images.length && (
              <div className={styles.images}>
                {job.images.map((image, i) => {
                  return (
                    <div key={image} className={styles.imageLink}>
                      <a href={`/images/${image}`} target="__blank">
                        Image {i + 1}
                      </a>
                      {i !== job.images.length - 1 && (
                        <div className={styles.divider} />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </Page>
  );
}
