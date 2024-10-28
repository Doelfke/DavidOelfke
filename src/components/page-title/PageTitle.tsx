import styles from './PageTitle.module.scss';

interface Props {
  title: string;
}

export const PageTitle: React.FC<Props> = (props: Props) => {
  return <h1 className={styles.pageTitle}>{props.title}</h1>;
};
