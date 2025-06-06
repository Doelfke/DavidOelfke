import { Page } from '@/components/page/Page';
import styles from './about-me.module.scss';

export default function EducationPage() {
  return (
    <Page title="My Education">
      <div className={styles.sectionTitle}>Harvard Business School</div>
      <div className={styles.sectionBody}>
        Resilient Leadership
        <br />
        Exercising Leadership: Foundational Principles
      </div>

      <div className={styles.sectionTitle}>Fitchburg State University</div>
      <div className={styles.sectionBody}>
        CSC 1000 - Intro to Programming
        <br />
        CSC 1400 - Computer Info Systems
        <br />
        CSC 1500 - Computer Science I
      </div>

      <div className={styles.sectionTitle}>Leominster High School</div>
      <div className={styles.sectionBody}>
        C++
        <br />
        Visual Basic
        <br />
        A+ Certification
        <br />
        CCNA Certification.
      </div>
    </Page>
  );
}
