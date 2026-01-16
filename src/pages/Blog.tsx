import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, Post } from '@/lib/posts';
import Layout from '@/components/layout/Layout';

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">Welcome to my blog. Here I share my thoughts on web development, system design, and music.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="p-6 bg-background rounded-lg border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground mb-4">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
