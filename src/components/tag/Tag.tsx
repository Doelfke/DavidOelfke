import styles from "./Tag.module.scss";

interface Props {
  tag: string;
}

export const Tag: React.FC<Props> = (props: Props) => {
  return <div className={styles.tag}>{props.tag}</div>;
};
