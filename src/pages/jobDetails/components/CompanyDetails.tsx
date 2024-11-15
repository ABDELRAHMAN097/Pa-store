import { Link } from 'react-router-dom';

const CompanyDetails = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div
        dir="rtl"
        className="bg-white border-2 min-h-[120px] border-gray-900/20 border-opacity-35 shadow-xl w-full flex flex-col sm:flex-row gap-4 sm:items-center justify-between p-4 rounded-md"
      >
        <div className="flex flex-col lg:flex-row items-center w-full sm:w-auto">
          <div className="mr-4 border-2 border-opacity-30 mb-[10px] lg:mb-0 border-primary-text rounded-full">
            <img src="/img/company-logo.png" alt="Company Logo" className="w-[100px] h-[100px] rounded-full" />
          </div>
          <div>
            <h3 className="font-bold text-lg md:text-xl text-center lg:text-right lg:text-2xl">المراعي في السعودية</h3>
            <span className="text-gray-500 text-sm md:text-lg lg:text-xl font-medium">
              شركة متخصصة في الأعلاف والحبوب والأغذية المحفوظة
            </span>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="bg-purple-100 text-primary-text rounded-full px-3 py-1 text-sm md:text-md lg:text-lg">
                عالمية
              </span>
              <span className="bg-purple-100 text-primary-text rounded-full px-3 py-1 text-sm md:text-md lg:text-lg">
                أكثر من 1000 موظف
              </span>
              <span className="bg-purple-100 text-primary-text rounded-full px-3 py-1 text-sm md:text-md lg:text-lg">
                مرتبات تنافسية
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 mx-auto lg:mx-0  sm:mt-0">
          <Link to={'#'}>
            <button className="bg-primary-text duration-300 hover:bg-primary-text-hover text-white font-medium px-4 py-2 rounded-md flex items-center">
              معرفة أكثر عن الشركة
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
