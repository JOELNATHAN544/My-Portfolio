import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export async function getPosts(): Promise<Post[]> {
  const postModules = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default' });

  const posts = await Promise.all(
    Object.entries(postModules).map(async ([path, getContents]) => {
      const slug = path.replace('/src/posts/', '').replace('.md', '');
      const rawContent = await getContents() as string;
      const { data, content } = matter(rawContent);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        content,
      };
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const rawContent = await import(`../posts/${slug}.md?raw`);
    const { data, content } = matter(rawContent.default as string);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      content,
    };
  } catch (error) {
    console.error(`Error fetching post: ${slug}`, error);
    return null;
  }
}
