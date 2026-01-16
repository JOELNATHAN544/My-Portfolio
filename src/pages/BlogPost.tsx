import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPost, Post } from '@/lib/posts';
import Layout from '@/components/layout/Layout';
import NotFound from './NotFound';
import SEO from '@/components/SEO';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const fetchedPost = await getPost(slug);
        setPost(fetchedPost);
      }
    };
    fetchPost();
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
              <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
