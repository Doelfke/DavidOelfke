import { Page } from "@/components/page/Page";
import BlogPost from "@/types/blogPost";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { dateUtils } from "@/utils/dateUtils";
import Head from "next/head";

import styles from "./[id].module.scss";

interface Props {
  post: BlogPost;
}

export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const id = context.params.id.split("-").pop();

  const req = await fetch(`${process.env.API_BASE_URL}/blog/posts/${id}`, {
    next: {
      tags: [`blog-posts/${id}`],
    },
  });
  const post = await req.json();

  return { props: { post } };
};

const BlogPage: React.FC<Props> = (props: Props) => {
  const pageTitle = `DavidOelfke.dev - ${props.post.fields.title}`;

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
