import { Page } from '@/components/page/Page';
import { Card } from '@/components/card/Card';
import styles from './about-me.module.scss';

export default function EducationPage() {
  return (
    <Page title="My Education">
      <Card className={styles.container}>
        <div className={styles.sectionTitle}>Massachusetts Institute of Technology</div>
        <ul className={styles.courseList}>
          <li>AI 101</li>
        </ul>
      </Card>

      <Card className={styles.container}>
        <div className={styles.sectionTitle}>Harvard Business School</div>
        <ul className={styles.courseList}>
          <li>Resilient Leadership</li>
          <li>Exercising Leadership: Foundational Principles</li>
        </ul>
      </Card>

      <Card className={styles.container}>
        <div className={styles.sectionTitle}>Fitchburg State University</div>
        <ul className={styles.courseList}>
          <li>CSC 1000 - Intro to Programming</li>
          <li>CSC 1400 - Computer Info Systems</li>
          <li>CSC 1500 - Computer Science I</li>
        </ul>
      </Card>

      <Card className={styles.container}>
        <div className={styles.sectionTitle}>Leominster High School</div>
        <ul className={styles.courseList}>
          <li>C++</li>
          <li>Visual Basic</li>
          <li>A+ Certification</li>
          <li>CCNA Certification</li>
        </ul>
      </Card>
    </Page>
  );
}
