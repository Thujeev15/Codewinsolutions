import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Codewinsolutions - Expert IT Solutions & Software Development',
  description = 'Leading IT solutions provider in Sri Lanka. We specialize in web development, mobile apps, custom software, digital marketing, UI/UX design, and technical support.',
  keywords = 'web development Sri Lanka, mobile app development, custom software, IT solutions Jaffna, digital marketing, SEO services, UI/UX design, software company Sri Lanka, React development, Node.js development',
  image = '/logo.png',
  url = 'https://www.codewinsolutions.com',
  type = 'website',
  author = 'Codewinsolutions',
  locale = 'en_US',
  siteName = 'Codewinsolutions',
  twitterHandle = '@codewinsolutions',
  schema
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://www.codewinsolutions.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://www.codewinsolutions.com${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Language */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#45d6c4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Geographic SEO */}
      <meta name="geo.region" content="LK-52" />
      <meta name="geo.placename" content="Jaffna" />
      <meta name="geo.position" content="9.6615;80.0255" />
      <meta name="ICBM" content="9.6615, 80.0255" />

      {/* Business Information */}
      <meta name="contact" content="contact@codewinsolutions.com" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
