import Head from 'next/head';
import { PageTitle } from '../page-title/PageTitle';
import styles from './Page.module.scss';

interface Props extends React.PropsWithChildren {
  title: string;
}

export const Page: React.FC<Props> = (props: Props) => {
  const pageTitle = `DavidOelfke.dev - ${props.title}`;

  return (
    <div className={styles.page}>
      <PageTitle title={props.title} />
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {props.children}
    </div>
  );
};
