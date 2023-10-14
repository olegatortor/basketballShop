import React from 'react';
import { Link } from 'react-router-dom';
import './Reads.scss';

function Reads({title, description, image, articleId }) {
    return (
        <div className="reads-item">
          <img src={image} alt={title} className="reads-image" />
          <div className="reads-info">
            <h3 className="reads-title">{title}</h3>
            <p className="reads-description">
              {description.length > 400 ? `${description.slice(0, 400)}...` : description}
            </p>
            <Link to={`/about/${articleId}`} className="btn btn-a">Читати</Link>
          </div>
        </div>
      );
}

export default Reads;