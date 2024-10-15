import { Tag } from "./Tag";
import styles from "./Tag.module.scss";

interface Props {
  tags: string[];
}

export const Tags: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.tags}>
      {props.tags.map((tag) => {
        return <Tag tag={tag} key={tag} />;
      })}
    </div>
  );
};
