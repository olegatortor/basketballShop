import React from 'react';
import './Blog.scss';

function BlogArticle({ imgSrc, title, text }) {
  return (
    <div className="blog-article">
      <img src={imgSrc} alt={title} className='blog-img'/>
      <div className="blog-descr">
        <h3 className='blog-title'>{title}</h3>
        <p className='blog-text'>{text}</p>
      </div>
    </div>
  );
}

export default BlogArticle;