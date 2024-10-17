import { Page } from "@/components/page/Page";
import { Tags } from "@/components/tag/Tags";
import { TECH } from "@/data/tech";

import styles from "./about-me.module.scss";

export default function AboutMePage() {
  return (
    <Page title="About Me">
      <div className={styles.sectionTitle}>I was born into tech.</div>
      <div className={styles.sectionBody}>
        My father worked at Digital Equipment Corporation (DEC) and being
        somewhat-techy himself he taught me Basic when I was 5 years old. A few
        years later he brought home our second PC with a blazing fast Pentium 1
        133mz CPU and I was tasked with installing a sound card.
        <br />
        <br />
        When I was 13 I asked him: how are web pages made? He showed me I could
        right click and see the source myself. From there on out I was obsessed
        with the web.
        <br />
        <br />
        He may have got caught hacking a few times... He didn't catch me doing
        the real bad things though. I used to make trojans in VB and mess with
        peoples' computers and steal their AIM accounts. I'm glad it was
        pre-patriot act!
      </div>

      <div className={styles.sectionTitle}>I started my career early too.</div>
      <div className={styles.sectionBody}>
        I started working in IT when I was 15 and by 16 I took over all of the
        responsibilities for the front end of a computer repair store, after
        writing the playbook on how we "tuned up" PCs. I did this by creating a
        special CD that had all of the latest tools we needed and automating
        their installs and running them, with an easy UI. Matched up with a
        paper checklist we were able to automate a ton of our work and perform
        it much more quickly and consistently.
        <br />
        <br />I stayed for a few years until joining EMC (now Dell) to manage
        multiple server server rooms. But it was there I switched over to being
        (mostly) a software engineer.
      </div>

      <div className={styles.sectionTitle}>School was weird.</div>
      <div className={styles.sectionBody}>
        Highschool was great, I learned PHP and took classes in VB, C++, Cisco,
        and A+. But college wasn't for me. I had a free ride to any state school
        in Massachusetts, but I think the last straw for me was when my Java
        teacher didn't know what a .jar file was.
      </div>

      <div className={styles.sectionTitle}>Then I found startups.</div>
      <div className={styles.sectionBody}>
        I found myself attracted to startups and had the privilege to work for
        some of Boston's best. Builidum was the strongest startup in the city
        for almost a decade. Their engineering team and culture were unrivaled
        and I got to rise through the ranks from engineer all the way up to
        director.
        <br />
        <br />
        After leaving Buildium, I joined a brand new product Agency Rocket
        Insights (now DEPT) and I grew the company 20x and expanded our presence
        all the way to the west coast. I built over 15 products for (mostly)
        other Boston startups and really embraced the Typescript, Node, and
        React ecosystems.
      </div>

      <div className={styles.sectionTitle}>But the journey continues.</div>
      <div className={styles.sectionBody}>
        I joined Microsoft for a few years, but missed the startup world, so I
        went back to it. Since I've been helping startups again build from 0 and
        expand their practices, while setting the highest standards in code
        quality and efficiency.
        <br />
        <br />
        But I've also done a few other cool things since. I wrote a book on
        engineering under a pseudonym that was the number one best seller for
        weeks. I also was lucky enough to go through Y Combinator (YC).
        <br />
        <br />
        It's been a fun journey. I've got to work and learn in a ton of
        industries from property tech, agricultural tech, meal delivery,
        exercise equipment, cloud, risk, payroll, accounting... you get the
        point. But there's still a lot more to do!
        <br />
        <br />
        And still keep up with the latest hardware and have my own home lab that
        hosts my fault tolerant private DNS on a Docker Compose cluster, 2 solid
        state NASes, among some other things.
      </div>

      <div className={styles.sectionTitle} id="technologies">
        Here are some of the technologies I've worked with 😅:
      </div>
      <div className={styles.sectionBody}>
        <Tags tags={TECH}></Tags>
      </div>

      <div>
        Feel free to reach out on{" "}
        <a href="https://www.linkedin.com/in/DavidOelfke" target="__blank">
          LinkedIn
        </a>
        !
      </div>
    </Page>
  );
}
