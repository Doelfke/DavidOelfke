import { Page } from "@/components/page/Page";
import * as contentful from "contentful";
import Link from "next/link";
import styles from "./[number].module.scss";
import { dateUtils } from "@/utils/dateUtils";
import BlogPost from "@/types/blogPost";
import { blogUtils } from "@/utils/blogUtils";

interface BlogPosts {
  total: number;
  limit: number;
  skip: number;

  items: BlogPost[];
}

interface Props {
  posts: BlogPosts;
}

export async function getStaticPaths(number: string) {
  return {
    paths: [
      {
        params: {
          number: "1",
        },
      },
    ],
    fallback: false,
  };
}

export const getStaticProps = async (number: string) => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const posts = await client.getEntries({
    content_type: "blogPost",
    select: ["fields.title", "fields.subtitle", "sys.id", "sys.createdAt"],
  });

  return { props: { posts }, revalidate: 120 };
};

const BlogPage: React.FC<Props> = (props: Props) => {
  return (
    <Page title="Blog">
      {props.posts.items.map((post) => {
        const postLink = blogUtils.generateUrl(post.sys.id, post.fields.title);

        return (
          <div key={post.sys.id} className={styles.post}>
            <h2 className={styles.title}>
              <Link href={postLink}>{post.fields.title}</Link>
            </h2>
            <div className={styles.date} suppressHydrationWarning>
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
