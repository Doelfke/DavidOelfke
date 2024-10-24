import { Page } from "@/components/page/Page";
import Link from "next/link";
import styles from "./blog.module.scss";
import { dateUtils } from "@/utils/dateUtils";
import { blogUtils } from "@/utils/blogUtils";
import { BlogPosts } from "./api/blog/posts";

interface Props {
  posts: BlogPosts;
}

export const getServerSideProps = async () => {
  const req = await fetch(`${process.env.API_BASE_URL}/blog/posts`, {
    next: {
      tags: ["blog-posts"],
    },
  });
  const posts = await req.json();
  return { props: { posts } };
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
