
const pricingPlans = [
  {
    title: 'المبتدئ',
    description: 'هذا هو الوصف الخاص بالخطة المبتدئة.',
    price: 20,
    users: '10 مستخدمين',
    storage: '2 جيجابايت من التخزين',
    features: [
      'دعم عبر البريد الإلكتروني',
      'الوصول إلى مركز المساعدة',
      'دعم عبر الهاتف',
      'الوصول إلى المجتمع'
    ]
  },
  {
    title: 'المحترف',
    description: 'هذا هو الوصف الخاص بخطة المحترف.',
    price: 30,
    users: '20 مستخدمين',
    storage: '5 جيجابايت من التخزين',
    features: [
      'دعم عبر البريد الإلكتروني',
      'الوصول إلى مركز المساعدة',
      'دعم عبر الهاتف',
      'الوصول إلى المجتمع'
    ]
  },
  {
    title: 'المؤسسة',
    description: 'هذا هو الوصف الخاص بخطة المؤسسة.',
    price: 100,
    users: '50 مستخدمين',
    storage: '20 جيجابايت من التخزين',
    features: [
      'دعم عبر البريد الإلكتروني',
      'الوصول إلى مركز المساعدة',
      'دعم عبر الهاتف',
      'الوصول إلى المجتمع'
    ]
  }
];

const StartWorkPricing = () => {
  return (
    <div className="w-full bg-white">
      <div className='mt-[0px] mx-auto container ' dir='rtl'>
      <h1 className='text-7xl text-primary-text text-center font-bold'>الاسعار والخطط</h1>
      
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-4  sm:items-stretch md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.title} className={`divide-y ${plan.title === "المحترف" ? "lg:scale-[1.1]" : "lg:scale-[0.95]"} mt-[50px] divide-gray-200 rounded-2xl border border-gray-400 shadow-sm`}>
              <div className="p-6 sm:px-8">
                <h2 className="font-medium bg-white mx-auto border-primary-text border hover:bg-primary-text hover:text-white duration-300 cursor-pointer rounded-[10px] px-[10px] py-[5px] text-2xl sm:text-lg  md:text-2xl   text-center -translate-y-full text-primary-text w-[50%]">
                  {plan.title}
                </h2>

                <p className="mt-2 text-black text-center">{plan.description}</p>

                <p className="mt-2 sm:mt-4 text-center">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">${plan.price}</strong>
                  <span className="text-md font-bold text-gray-400">/شهر</span>
                </p>

                <a
                  className="mt-4 block rounded border border-primary-text bg-primary-text px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary-text focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                  href="#"
                >
                  ابدأ الآن
                </a>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-gray-900 sm:text-xl">ما الذي يتضمنه:</p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <span className="text-gray-900">{plan.users}</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="text-gray-900">{plan.storage}</span>
                  </li>
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-between w-fit gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8  text-primary-text"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-900">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default StartWorkPricing;
