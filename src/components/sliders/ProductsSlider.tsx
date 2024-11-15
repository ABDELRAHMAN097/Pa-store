import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/slidersMain.css'; // ملف CSS الخاص بك
import { Link } from 'react-router-dom';
import { useProductContext } from '../ProductContext/ProductContext'; // استخدام الـ Context
import OutlineButton from '../helpers/buttons/OutlineButton';

// تعريف النوع لخصائص السهم (إن وجد)
interface ProductSliderProps {
  title: string;
  types?: string[];  // إضافة خاصية types
  selectedType?: string;  // إضافة خاصية selectedType
  buttonTitle: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, types = [], selectedType, buttonTitle }) => {
  const { products } = useProductContext(); // جلب المنتجات من الـ Context

  // تصفية المنتجات بناءً على النوع المحدد إذا كانت types موجودة
  const filteredProducts = types.length > 0
    ? products.filter(product => product.category === selectedType)
    : products;

  // إعدادات السلايدر (Slider)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    pagination: true,
    draggable: true,
    swipe: true,
    nextArrow: <div>Next</div>,
    prevArrow: <div>Prev</div>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="section overflow-hidden">
      <div className="container overflow-hidden mb-[20px]">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title text-7xl text-center font-bold text-primary-text">{title}</h3>
          </div>

          <div className="col-md-12 py-[50px]">
            <div className="row">
              <div className="products-tabs">
                <div id="tab1" className="tab-pane w-full active">
                  <Slider {...settings} className="products-slick">
                    {/* عناصر السلايدر */}
                    {filteredProducts.map((product, index) => (
                      <div className="product !scale-[0.95] hover:!scale-1" key={product.id}>
                        <Link to={`/ProductDetails/books/${product.id}`}>
                          <div className="product-img">
                            <img src={product.images[0]} alt={product.name} />
                            <div className="product-label">
                              <span className={index % 2 === 0 ? 'sale' : 'new'}>
                                {index % 2 === 0 ? '-30%' : 'جديد'}
                              </span>
                            </div>
                          </div>
                          <div className="product-body">
                            <p className="product-category">{product.category}</p>
                            <h3 className="product-name">
                              <a href="#">{product.name}</a>
                            </h3>
                            <h4 className="product-price">
                              ${product.price.toFixed(2)}{' '}
                              <del className="product-old-price">
                                ${product.oldPrice.toFixed(2)}
                              </del>
                            </h4>
                            <div className="product-rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="product-btns">
                              <button className="add-to-wishlist">
                                <i className="fa fa-heart-o"></i>
                                <span className="tooltipp">إضافة إلى المفضلة</span>
                              </button>
                              <button className="add-to-compare">
                                <i className="fa fa-exchange"></i>
                                <span className="tooltipp">إضافة للمقارنة</span>
                              </button>
                              <button className="quick-view">
                                <i className="fa fa-eye"></i>
                                <span className="tooltipp">عرض سريع</span>
                              </button>
                            </div>
                          </div>
                        </Link>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <i className="fa fa-shopping-cart"></i>
                            إضافة الي سلة
                          </button>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* زر عرض المزيد */}
      <OutlineButton isLink={true} link="/products" LinkclassNames='flex justify-center' classNames='' text={buttonTitle} />
    </div>
  );
};

export default ProductSlider;
