import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/slidersMain.css'; // ملف CSS الخاص بك

// تعريف النوع لخصائص السهم
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomPrevArrow: React.FC<ArrowProps> = (props) => (
  <button {...props} className="slick-arrow slick-prev !border !border-primary-text" onClick={props.onClick}>
    <i className="fa fa-chevron-left"></i>
  </button>
);

const CustomNextArrow: React.FC<ArrowProps> = (props) => (
  <button {...props} className="slick-arrow slick-next !border !border-primary-text" onClick={props.onClick}>
    <i className="fa fa-chevron-right"></i>
  </button>
);

const SuccessStoriesSlider  = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pagination: true,
    draggable: true,
    swipe: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
    <div className="section bg-white overflow-hidden">
      <div className="container overflow-hidden !">
        <div className="row">
          <h1 className='text-5xl text-center text-primary-text my-[30px]'>بعض قصص النجاح</h1>

          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                <div id="tab1" className="tab-pane active">
                  <Slider {...settings} className="products-slick">
                    {/* عناصر السلايدر */}
                    {[...Array(21)].map((_, index) => (
                      <div className='!mx-2 scale-[0.90]  hover:scale-[0.95]  ' key={index}>
                        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-lg hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" >
                            <span className="my-6 grid place-items-center">
                                <img src={`/img/sucees-stories-images/success-story-${index + 1}.jpeg`} key={index} alt="Image 1" className="w-full h-auto" />
                            </span>
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
    </div>
  );
};

export default SuccessStoriesSlider;
