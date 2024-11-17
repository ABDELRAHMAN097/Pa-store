import { Link } from 'react-router-dom'; // Adjust this import based on your routing library

const HomeCategories = () => {
  return (
    <div className="section">
      <div className='w-container flex gap-[20px] mb-[20px] flex-col justify-center items-center '>
        <h1 className='text-primary-text text-5xl lg:text-7xl'>PA Store</h1>
        <h3 className='text-gray-700 text-xl max-w-[90%]  lg:text-4xl text-center lg:max-w-6xl'>موقع لبيع الكتب والدورات الخاصة ب <span>الاكاديمية الفلسطينية</span> وهو مدمج مع <span>start work</span> المسؤول عن ايجاد وظيفة احلامك</h3>
        <div className="flex flex-col md:flex-row md:justify-center">
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
          <Link to={'/start-work'} className='mt-4 md:mt-0'>
            <button className='bg-primary-text w-full ml-[5px] lg:w-fit  md:w-auto mx-auto hover:bg-white border-primary-text text-white hover:text-primary-text !text-2xl px-32 lg:px-20 py-4 duration-300 border'>
              اعرف اكثر عن Start Work
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default HomeCategories;
