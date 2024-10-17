import { Page } from "@/components/page/Page";
import * as contentful from "contentful";
import BlogPost from "@/types/blogPost";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { dateUtils } from "@/utils/dateUtils";

import styles from "./blogpost.module.scss";

interface Props {
  post: BlogPost;
}

export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const post = (await client.getEntry(
    context.params.id.split("-").pop() as string
  )) as unknown as BlogPost;

  return { props: { post } };
};

const BlogPage: React.FC<Props> = (props: Props) => {
  return (
    <Page title={props.post.fields.title}>
      <div className={styles.subTitle}>{props.post.fields.subtitle}</div>
      <div className={styles.date}>
        {dateUtils.format(props.post.sys.createdAt)}
      </div>

      {documentToReactComponents(props.post.fields.body)}
    </Page>
  );
};

export default BlogPage;
