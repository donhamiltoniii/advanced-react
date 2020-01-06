import React from 'react';

import Article from './article';

const ArticleList = ({ articles, store }) => (
  <div className="article-list">
    {Object.values(articles).map(article => (
      <Article key={article.id} store={store} article={article} />
    ))}
  </div>
);

export default ArticleList;
