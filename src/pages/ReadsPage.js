import React from 'react';
import Header from './../components/header/Header';
import { Link } from 'react-router-dom';
import '../components/reads/Reads.scss'
import { useParams } from 'react-router-dom';
import { readsData } from '../components/reads/ReadsBlock';
import Footer from './../components/footer/Footer';

function ReadsPage() {
  const { articleId } = useParams();
  const article = readsData.find((item) => item.id.toString() === articleId);

  return (
    <>
      <Header />
    
      <div className='reads-page'>
          <img src={`../../${article.image}`} alt={article.title}  className='reads-page-img'/>
          <div className="container">
              <h2 className='reads-page-title'>{article.title}</h2> 
              <p className="reads-page-text">
                {article.description}
              </p>
              
              <Link to={`/about`} className="btn btn-a reads-page-btn">НАзад</Link>
          </div>
      </div>

      
      <Footer />
    </>
  );
}

export default ReadsPage;