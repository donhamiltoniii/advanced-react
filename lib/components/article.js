import React from 'react';

const style = {
  article: {}
};

const Article = ({ article, store }) => {
  const author = store.lookupAuthor(article.authorId);

  return (
    <article style={style.article}>
      <h3>{article.title}</h3>
      <section>
        <time dateTime={article.date}>{article.date}</time>
      </section>
      <section>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </section>
      <p>{article.body}</p>
    </article>
  );
};

export default Article;
