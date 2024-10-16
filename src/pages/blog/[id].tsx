import { Page } from "@/components/page/Page";
import * as contentful from "contentful";
import BlogPost from "@/types/blogPost";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { dateUtils } from "@/utils/dateUtils";

import styles from "./blogpost.module.scss";
import Head from "next/head";

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
  const pageTitle = `David Oelfke - ${props.post.fields.title}`;

  return (
    <Page title="Blog">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.post}>
        <h2 className={styles.title}>{props.post.fields.title}</h2>
        <div className={styles.subTitle}>{props.post.fields.subtitle}</div>
        <div className={styles.date}>
          {dateUtils.format(props.post.sys.createdAt)}
        </div>

        {documentToReactComponents(props.post.fields.body)}
      </div>
    </Page>
  );
};

export default BlogPage;
