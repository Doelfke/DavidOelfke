import { Page } from '@/components/page/Page';
import { Card } from '@/components/card/Card';
import { Tags } from '@/components/tag/Tags';
import { TECH } from '@/data/tech';

import styles from './about-me.module.scss';

export default function AboutMePage() {
  return (
    <Page title="About Me">
      <Card className={styles.container}>
        <div className={styles.sectionTitle}>I was born into tech.</div>
        <div className={styles.sectionBody}>
          <p>
            My father worked at Digital Equipment Corporation (DEC) and, being the technical type, taught me BASIC when I was 5 years old. A few years later he brought home our
            second PC (a blazing-fast Pentium 1 at 133MHz) and handed me my first real hardware challenge: installing a sound card.
          </p>
          <p>When I was 13, I asked him how web pages were made. He showed me I could right-click and view the source. That was it, I was hooked.</p>
          <p>
            I may have gotten caught hacking a time or two, but my dad never found out about the really bad stuff. I was making trojans in Visual Basic, messing with people&apos;s
            computers, and stealing AIM accounts. Glad it was the pre-Patriot Act era!
          </p>
        </div>
      </Card>

      <Card className={styles.container}>
        <div className={styles.sectionTitle}>I started my career early too.</div>
        <div className={styles.sectionBody}>
          <p>
            I started working in IT at 15, and by 16 I had taken over the front-end operations of a computer repair shop, after writing the playbook on how we &quot;tuned up&quot;
            PCs. I built a custom CD loaded with all the tools we needed, automating their installation and execution through a simple UI. Paired with a paper checklist, we
            dramatically increased our speed and consistency.
          </p>
          <p>I stayed for a few years before joining EMC (now Dell) to manage multiple server rooms, and it was there that I made the shift to software engineering.</p>
        </div>
      </Card>

      <Card className={styles.container}>
        <div className={styles.sectionTitle}>College wasn&apos;t for me.</div>
        <div className={styles.sectionBody}>
          High school was great. I learned PHP and took classes in VB, C++, Cisco, and A+. College, though, wasn&apos;t for me. I had a free ride to any state school in
          Massachusetts, but the last straw came when my Java teacher couldn&apos;t tell me what a .jar file was.
        </div>
      </Card>

      <Card className={styles.container}>
        <div className={styles.sectionTitle}>Then I found startups.</div>
        <div className={styles.sectionBody}>
          <p>
            I was drawn to startups and had the privilege of working for some of Boston&apos;s best. Buildium was arguably the strongest startup in the city for nearly a decade;
            their engineering team and culture were unrivaled, and I rose through the ranks from engineer all the way to director.
          </p>
          <p>
            After leaving Buildium, I joined the newly founded product agency Rocket Insights (now DEPT), where I helped grow the company 20x and expand its reach to the West
            Coast. I built over 15 products, mostly for Boston-area startups, and fully embraced the TypeScript, Node, and React ecosystems.
          </p>
        </div>
      </Card>

      <Card className={styles.container}>
        <div className={styles.sectionTitle}>But the journey continues.</div>
        <div className={styles.sectionBody}>
          <p>
            I joined Microsoft for a few years, but missed the energy of the startup world, so I went back. Since then, I&apos;ve been helping startups build from zero and scale
            their engineering practices, while holding the bar high on code quality and efficiency.
          </p>
          <p>
            Along the way, I&apos;ve had a few other highlights worth mentioning. I wrote an engineering book under a pseudonym that hit the number-one bestseller spot for several
            weeks. I also had the opportunity to go through Y Combinator (YC).
          </p>
          <p>
            It&apos;s been a great ride. I&apos;ve had the chance to work across a wide range of industries: property tech, agtech, meal delivery, fitness equipment, cloud, risk,
            payroll, accounting... you name it. And there&apos;s still plenty more to do.
          </p>
          <p>
            And I still keep up with the latest hardware. My home lab runs fault-tolerant private DNS on a Docker Compose cluster, a couple of solid-state NASes, and a few other
            odds and ends.
          </p>
        </div>
      </Card>

      <Card className={styles.container}>
        <div className={styles.sectionTitle} id="technologies">
          Here are some of the technologies I&apos;ve worked with 😅:
        </div>
        <div className={styles.sectionBody}>
          <Tags tags={TECH}></Tags>
        </div>
      </Card>

      <Card className={styles.container}>
        <div className={styles.sectionBody}>
          Feel free to reach out on{' '}
          <a href="https://www.linkedin.com/in/DavidOelfke" target="__blank">
            LinkedIn
          </a>{' '}
          or follow me on <a href="https://github.com/Doelfke">Github</a>!
        </div>
      </Card>
    </Page>
  );
}
