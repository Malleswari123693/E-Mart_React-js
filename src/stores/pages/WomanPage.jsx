import React from 'react';
import { womanData } from '../data/woman';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const WomanPage = () => {
  return (
    <>
      <Navbar />

      <div className="pageSection">
        {womanData.map((item) => (
          <div key={item.id}>
            <Link to={`/woman/${item.id}`}>
              <div className="pageImg">
                <img src={item.image} alt={item.model} />
              </div>
            </Link>

            <div className="proModel">
              {item.brand}, {item.model}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WomanPage;