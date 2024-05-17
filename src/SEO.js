import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, author, robots, viewport }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content={viewport} />
    </Helmet>
  );
};

export default SEO;
