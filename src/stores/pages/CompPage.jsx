import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const CompPage = () => {

  const filteredProduct = computerData;

  return (
    <>
      <Navbar />

      <div className="pageSection">
        {filteredProduct.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/computers/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>

              <div className="proModel">
                {item.company}, {item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CompPage;