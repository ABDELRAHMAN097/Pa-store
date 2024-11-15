import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBriefcase, faHeadset, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const StartWorkHero = () => {
  return (
    <section className="text-white container" dir="rtl">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto w-[100%] text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold !text-white sm:text-5xl">
              ابحث عن مسار حياتك المهنية مع <br />
              <h3 className="text-primary-text text-center">start work</h3>
            </h2>
            
            <a
              href="#"
              className="mt-8 inline-block rounded w-full text-center bg-primary-text px-12 py-3 text-lg font-bold text-white transition transform hover:text-white hover:scale-105 focus:outline-none focus:ring "
            >
              ابدأ اليوم
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { icon: faStar, title: "فرص رائعة", description: "احصل على أفضل الفرص الوظيفية." },
              { icon: faBriefcase, title: "تدريب متميز", description: "تدريب عملي لتأهيلك لسوق العمل." },
              { icon: faHeadset, title: "دعم مستمر", description: "نحن هنا لمساعدتك في كل خطوة." },
              { icon: faCheckCircle, title: "فرص نمو", description: "فرص للترقية والتقدم في مسيرتك." },
              { icon: faStar, title: "شبكة واسعة", description: "الوصول إلى شبكة من المهنيين." },
              { icon: faBriefcase, title: "توظيف مباشر", description: "توظيف مباشر لدى الشركات الرائدة." }
            ].map((benefit, index) => (
              <a
                key={index}
                className="block border-primary-text rounded-xl border  p-4 shadow-sm transition-transform duration-300 transform hover:scale-105 hover:shadow-lg  "
                href="#"
              >
                <span className=" rounded-lg flex justify-center !text-white p-3">
                  <FontAwesomeIcon className="w-6 h-6" icon={benefit.icon} />
                </span>
                <h2 className="mt-2 font-bold text-center !text-white">{benefit.title}</h2>
                {/* <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 !text-white">
                  {benefit.description}
                </p> */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWorkHero;
