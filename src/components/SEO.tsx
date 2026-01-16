import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  const defaultTitle = 'Joel Nathan Wanko Tchagang - Full-Stack Engineer';
  const defaultDescription = 'Portfolio of Joel Nathan Wanko Tchagang, a Full-Stack Engineer and System Designer specializing in scalable web applications.';

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const pageDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Helmet>
  );
};

export default SEO;
