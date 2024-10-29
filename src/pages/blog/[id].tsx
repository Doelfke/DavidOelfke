import { Page } from '@/components/page/Page';
import { MARKS } from '@contentful/rich-text-types';
import BlogPost from '@/types/blogPost';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { dateUtils } from '@/utils/dateUtils';
import Head from 'next/head';

import styles from './[id].module.scss';
import { blogUtils } from '@/utils/blogUtils';
import { ReactNode } from 'react';
import { contentfulService } from '@/services/contentful-service';

interface Props {
  post: BlogPost;
}

export async function getStaticPaths() {
  const posts = await contentfulService.getPosts();

  const paths = posts.items.map((post) => ({
    params: {
      id: blogUtils.generateUrl(post.sys.id, post.fields.title).replace('/blog/', '')
    }
  }));

  return { paths, fallback: 'blocking' };
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  try {
    const id = context.params.id.split('-').pop() as string;
    const post = await contentfulService.getPost(id);

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
        <meta property="og:image" content={`https://davidoelfke.dev/api/og-image?text=${props.post.fields.title}`} />
        <meta property="og:title" content={props.post.fields.title} />
        <meta property="og:description" content={props.post.fields.subtitle} />
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
