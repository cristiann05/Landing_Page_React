import React from 'react';

const Cards = () => {
  return (
    <div className="container my-5">
      <div className="row gx-4 gy-4"> {/* Adjusted row for spacing */}
        {/* Card 1 */}
        <div className="col-md-3 d-flex justify-content-center mb-3">
          <div className="card" style={{ width: '16rem' }}>
            <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 d-flex justify-content-center mb-3">
          <div className="card" style={{ width: '16rem' }}>
            <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 d-flex justify-content-center mb-3">
          <div className="card" style={{ width: '16rem' }}>
            <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 d-flex justify-content-center mb-3">
          <div className="card" style={{ width: '16rem' }}>
            <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
