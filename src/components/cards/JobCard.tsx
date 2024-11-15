import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div
      dir="rtl"
      className="bg-white border border-primary-text border-opacity-35 shadow-xl shadow-gray-100 w-full  flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md"
    >
      <div>
        <span className="text-primary-text text-sm md:text-lg lg:text-xl font-bold">
          مجال الهندسة
        </span>
        <h3 className="font-bold  mt-px">مطور برمجيات لتطوير المواقع</h3>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-purple-100 text-primary-text rounded-full px-3 py-1 text-sm md:text-md lg:text-lg">
            دوام كامل
          </span>
          <span className="bg-purple-100 text-primary-text rounded-full px-3 py-1 text-sm md:text-md lg:text-lg">
            من المكتب
          </span>
          <span className="text-slate-600 text-sm md:text-md lg:text-lg flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2" // Changed here
            >
              <path
                strokeLinecap="round" // Changed here
                strokeLinejoin="round" // Changed here
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round" // Changed here
                strokeLinejoin="round" // Changed here
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            فلسطين, غزة
          </span>
        </div>
      </div>
      <div>
        <Link to={'/jobs/1'}>
        <button className="bg-primary-text duration-300 hover:bg-primary-text-hover text-white font-medium px-4 py-4 rounded-md flex gap-1 items-center">
          رؤية بيانات الوظيفة
        </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
