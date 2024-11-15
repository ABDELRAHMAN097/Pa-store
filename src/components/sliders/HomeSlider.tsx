import './style/startWorkHomeSlider.scss'; // Adjust the path to your SCSS file
import {Link} from 'react-router-dom'
const slidesData = [
  {
    title: 'PA Store',
    subtitle: 'موقع لبيع الكتب والدورات الخاصة ب الأكاديمية الفلسطينية وهو مدمج مع start work المسؤول عن ايجاد وظيفة احلامك',
  },
  {
    title: 'PA Group',
    subtitle: 'شركة فلسطينية متخصصة في تقديم التدريب والتطوير المهني للموظفين والموظفات في جميع القطاعات والصناعات.',
  },
  {
    title: 'PA Start Work',
    subtitle: 'موقع لبيع الكتب والدورات الخاصة ب الأكاديمية الفلسطينية وهو مدمج مع start work المسؤول عن ايجاد وظيفة احلامك',
  },
  
  
];


const Slide = ({ title, subtitle }:{title:string, subtitle:string}) => (
  <div className="untitled__slide">
    <div className="untitled__slideBg"></div>
    <div className="untitled__slideContent w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
      <h1 className="slideTitle">{title}</h1>
      <h3 className="slideSubtitle">{subtitle}</h3>
      <div className="flex flex-col md:flex-row md:justify-center gap-3">
          <Link to="/store" className="mb-4 md:mb-0">
            <button className='bg-primary-text w-full lg:w-fit hover:bg-white border-primary-text text-white hover:text-primary-text mx-2 !text-2xl px-10 py-4 duration-300 border'>
              تصفح الكتب
            </button>
          </Link>
          <Link to="/store" className="mb-4 md:mb-0">
            <button className='bg-primary-text w-full lg:w-fit hover:bg-white border-primary-text text-white hover:text-primary-text mx-2 !text-2xl px-10 py-4 duration-300 border'>
              تصفح الدورات
            </button>
          </Link>
          <Link to="/start-work" className="mb-4 md:mb-0">
            <button className='bg-primary-text w-full lg:w-fit hover:bg-white border-primary-text text-white hover:text-primary-text mx-2 !text-2xl px-10 py-4 duration-300 border'>
              تصفح الوظائف
            </button>
          </Link>
          
        </div>
    </div>
  </div>
);


const HomeSlider = () => (
  <div className='relative h-[500px]'>
    <div className="untitled">
    <div className="untitled__slides">
      {slidesData.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </div>
    <div className="untitled__shutters">
    
    </div>
    
  </div>
  </div>
);

export default HomeSlider;
