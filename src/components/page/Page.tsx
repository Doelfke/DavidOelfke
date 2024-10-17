import Head from "next/head";
import { PageTitle } from "../page-title/PageTitle";
import styles from "./Page.module.scss";

interface Props extends React.PropsWithChildren {
  title: string;
}

export const Page: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.page}>
      <PageTitle title={props.title} />
      <Head>
        <title>David Oelfke - {props.title}</title>
      </Head>
      {props.children}
    </div>
  );
};
