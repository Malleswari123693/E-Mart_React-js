import React from 'react';
import { acData } from '../data/ac';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const AcPage = () => {
  return (
    <>
      <Navbar />

      <div className="pageSection">
        {acData.map((item) => (
          <div key={item.id}>
            <Link to={`/ac/${item.id}`}>
              <div className="pageImg">
                <img src={item.image} alt={item.model} />
              </div>
            </Link>

            <div className="proModel">
              {item.company}, {item.model}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AcPage;