import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/slidersMain.css'

interface Product {
  imgSrc: string;
  category: string;
  name: string;
  price: number;
  oldPrice: number;
}
interface ProductsInterface {
  title: string;
  products: Product[];

}



const products: ProductsInterface[] = [

  {
    title: 'صفقات جيدة',
    products: [
      { imgSrc: '/img/home/start-work-category.jpeg', category: 'Category', name: 'Product 1', price: 980.00, oldPrice: 990.00 },
      { imgSrc: '/img/home/start-work-category.jpeg', category: 'Category', name: 'Product 2', price: 980.00, oldPrice: 990.00 },
      { imgSrc: '/img/home/start-work-category.jpeg', category: 'Category', name: 'Product 3', price: 980.00, oldPrice: 990.00 },
    ]
  },
  {
    title: 'الأفضل مبيعا',
    products: [
      { imgSrc: '/img/home/start-work-category.jpeg', category: 'Category', name: 'Product 1', price: 980.00, oldPrice: 990.00 },
      { imgSrc: '/img/home/start-work-category.jpeg', category: 'Category', name: 'Product 2', price: 980.00, oldPrice: 990.00 },
      { imgSrc: '/img/home/start-work-category.jpeg', category: 'Category', name: 'Product 3', price: 980.00, oldPrice: 990.00 },
    ]
  },
  {
    title: 'تخفيضات',
    products: [
      { imgSrc: '/img/home/start-work-category.jpeg', category: 'Category', name: 'Product 1', price: 980.00, oldPrice: 990.00 },
      { imgSrc: '/img/home/start-work-category.jpeg', category: 'Category', name: 'Product 2', price: 980.00, oldPrice: 990.00 },
      { imgSrc: '/img/home/start-work-category.jpeg', category: 'Category', name: 'Product 3', price: 980.00, oldPrice: 990.00 },
    ]
  },


];

const ProductWidget: React.FC<Product> = ({ imgSrc, category, name, price, oldPrice }) => (
  <div className=''>
    <div className="product-widget">
      <div className="product-img">
        <img src={imgSrc} className='rounded-full' alt={name} />
      </div>
      <div className="product-body">
        <p className="product-category">{category}</p>
        <h3 className="product-name"><a href="#">{name}</a></h3>
        <h4 className="product-price">${price.toFixed(2)} <del className="product-old-price">${oldPrice.toFixed(2)}</del></h4>
      </div>
    </div>
    <div className="product-widget">
      <div className="product-img">
        <img src={imgSrc} className='rounded-full' alt={name} />
      </div>
      <div className="product-body">
        <p className="product-category">{category}</p>
        <h3 className="product-name"><a href="#">{name}</a></h3>
        <h4 className="product-price">${price.toFixed(2)} <del className="product-old-price">${oldPrice.toFixed(2)}</del></h4>
      </div>
    </div>
    <div className="product-widget">
      <div className="product-img">
        <img src={imgSrc}  className='rounded-full'alt={name} />
      </div>
      <div className="product-body">
        <p className="product-category">{category}</p>
        <h3 className="product-name"><a href="#">{name}</a></h3>
        <h4 className="product-price">${price.toFixed(2)} <del className="product-old-price">${oldPrice.toFixed(2)}</del></h4>
      </div>
    </div>
  </div>
);

const ProductSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {products.map((productGroup, index) => (
            <div className="col-md-4 col-xs-6 mt-[50px]" key={index}>
              <div className="section-title flex justify-center">
                <h4 className="title flex-end !text-right text-primary-text">{productGroup.title}</h4>
                <div className="section-nav">
                  <div id={`slick-nav-${index + 3}`} className="products-slick-nav"></div>
                </div>
              </div>
              <Slider {...settings}>
                {productGroup.products.map((product, i) => (
                  <ProductWidget key={i} {...product} />
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
