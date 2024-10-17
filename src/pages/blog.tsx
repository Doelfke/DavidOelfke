import { Page } from "@/components/page/Page";
import * as contentful from "contentful";
import Link from "next/link";
import styles from "./blog.module.scss";
import { dateUtils } from "@/utils/dateUtils";
import BlogPost from "@/types/blogPost";

interface BlogPosts {
  total: number;
  limit: number;
  skip: number;

  items: BlogPost[];
}

interface Props {
  posts: BlogPosts;
}

export const getServerSideProps = async () => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const posts = (await client.getEntries()) as unknown as BlogPosts;

  return { props: { posts } };
};

const BlogPage: React.FC<Props> = (props: Props) => {
  return (
    <Page title="Blog">
      {props.posts.items.map((post) => {
        const postLink = `/blog/${post.fields.title
          .toLowerCase()
          .replaceAll(" ", "-")}-${post.sys.id}`;

        return (
          <div key={post.sys.id} className={styles.post}>
            <h2 className={styles.title}>
              <Link href={postLink}>{post.fields.title}</Link>
            </h2>
            <div className={styles.date}>
              {dateUtils.format(post.sys.createdAt)}
            </div>
            <div className={styles.subTitle}>{post.fields.subtitle}</div>
            <div className={styles.readIt}>
              <Link href={postLink}>Read it &rarr;</Link>
            </div>
          </div>
        );
      })}
    </Page>
  );
};

export default BlogPage;
