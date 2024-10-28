import { Page } from '@/components/page/Page';
import * as contentful from 'contentful';
import { MARKS } from '@contentful/rich-text-types';
import BlogPost from '@/types/blogPost';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { dateUtils } from '@/utils/dateUtils';
import Head from 'next/head';
import { loadEnvConfig } from '@next/env';

import styles from './[id].module.scss';
import { blogUtils } from '@/utils/blogUtils';
import { ReactNode } from 'react';

interface BlogPosts {
  total: number;
  limit: number;
  skip: number;

  items: BlogPost[];
}

interface Props {
  post: BlogPost;
}

export async function getStaticPaths() {
  loadEnvConfig(process.cwd());

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
  });

  const posts = (await client.getEntries()) as unknown as BlogPosts;

  const paths = posts.items.map((post) => ({
    params: {
      id: blogUtils.generateUrl(post.sys.id, post.fields.title).replace('/blog/', '')
    }
  }));

  return { paths, fallback: 'blocking' };
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  loadEnvConfig(process.cwd());

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
  });

  try {
    const post = (await client.getEntry(context.params.id.split('-').pop() as string)) as unknown as BlogPost;

    return { props: { post }, revalidate: 120 };
  } catch {
    return {
      notFound: true
    };
  }
};
const options = {
  renderMark: {
    [MARKS.CODE]: (text: ReactNode) => {
      return (
        <iframe
          height="300"
          style={{ width: '100%' }}
          scrolling="no"
          title="Loading Bar"
          src={`https://codepen.io/doelfke/embed/${text?.toString().trim()}?default-tab=html%2Cresult`}
          frameBorder="no"
          loading="lazy"
          allowFullScreen={true}
        ></iframe>
      );
    }
  }
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
        <div className={styles.date} suppressHydrationWarning>
          {dateUtils.format(props.post.sys.createdAt)}
        </div>

        {documentToReactComponents(props.post.fields.body, options)}
      </div>
    </Page>
  );
};

export default BlogPage;
