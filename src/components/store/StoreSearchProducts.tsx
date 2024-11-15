import {Link} from 'react-router-dom'
const StoreSearchProducts = () => {
  return (
    <div id="store" className="col-md-9">
      

      {/* Store Products */}
      <div className="row">
        {Array.from({ length: 9 }, (_, index) => (
          <Link to="/products/id" >
            <div className="col-md-4 col-xs-6" key={index}>
            <div className="product">
              <div className="product-img">
                <img src={`/img/home/start-work-category.jpeg`} alt="" />
                <div className="product-label">
                  {index % 2 === 0 && <span className="sale">-30%</span>}
                  {index % 3 === 0 && <span className="new">NEW</span>}
                </div>
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">Product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                <div className="product-rating">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <i className={starIndex < 4 ? "fa fa-star" : "fa fa-star-o"} key={starIndex}></i>
                  ))}
                </div>
                <div className="product-btns">
                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                </div>
              </div>
              <div className="add-to-cart">
                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
      {/* /store products */}

      {/* Store Bottom Filter */}
      <div className="store-filter clearfix">
        <span className="store-qty">Showing 20-100 products</span>
        <ul className="store-pagination">
          <li className="active">1</li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
        </ul>
      </div>
      {/* /store bottom filter */}
    </div>
  );
};

export default StoreSearchProducts;
