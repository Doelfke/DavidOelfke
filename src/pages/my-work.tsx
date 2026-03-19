import { Page } from '@/components/page/Page';
import { Card } from '@/components/card/Card';
import { WORK_HISTORY } from '@/data/workHistory';

import styles from './my-work.module.scss';

export default function MyWorkPage() {
  return (
    <Page title="My Work">
      {WORK_HISTORY.map((job) => {
        return (
          <Card className={styles.container} key={job.companyName}>
            <div className={styles.titleContainer}>
              <div className={styles.namePosition}>
                <span className={styles.companyName}>{job.companyName}</span>
                <br className={styles.mobileBreak} />
                <span className={styles.positionSeparator}> — </span>
                <span className={styles.position}>{job.position}</span>
              </div>
              <div className={styles.date}>
                {job.startDate} - {job.endDate}
              </div>
            </div>
            <ul className={styles.accomplishments}>
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
                      {i !== job.domains.length - 1 && <div className={styles.divider} />}
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
                      {i !== job.images.length - 1 && <div className={styles.divider} />}
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        );
      })}
    </Page>
  );
}
