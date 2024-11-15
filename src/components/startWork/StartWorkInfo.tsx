const StartWorkInfo = () => {
  return (
    <div className="flex min-h-[90%] items-center justify-center pb-10 !mt-0" dir="rtl">
      <div className="container flex flex-col max-w-screen-xl gap-8  md:flex-row">

        <div className="relative flex flex-col rounded-md border w-full md:w-[45%] bg-white border-slate-200 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
          <span className="absolute inset-0 rounded-md border-2 border-primary-text opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <div className="h-1/2 flex-1">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png"
              className="w-full object-cover object-right-top"
              alt="Support Center"
            />
          </div>
          <div className="p-10">
            <h3 className="text-center font-medium text-primary-text text-4xl">دعم شامل لمساعدتك</h3>
            <p className="mt-2 text-slate-500 text-2xl text-center">
              نحن نقدم لك دعمًا شاملاً من خلال منصات متعددة لضمان حصولك على الدعم الذي تحتاجه لتحقيق أهدافك المهنية.
            </p>
          </div>
        </div>

        <div className='flex flex-col  justify-center  items-center w-full gap-8 md:w-[55%]'>
          <div className="relative flex flex-col w-full bg-white rounded-md h-full border border-slate-200 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
            <span className="absolute inset-0 rounded-md border-2 border-primary-text opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <div className="flex-1 p-10">
              <h3 className="text-center font-medium text-primary-text text-4xl">فرص عمل مميزة</h3>
              <p className="mt-2 text-slate-500 text-2xl text-center">
                نساعدك في العثور على فرص العمل المثالية التي تتناسب مع مهاراتك وطموحاتك.
              </p>
            </div>
            <div className="relative hidden h-48 lg:block">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png"
                className="absolute inset-0 h-full w-full object-cover object-left-top rounded-b-md"
                alt="Opportunities"
              />
            </div>
          </div>

          <div className="relative flex flex-col w-full bg-white rounded-md h-full justify-center items-center border border-slate-200 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
            <span className="absolute inset-0 rounded-md border-2 border-primary-text opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <div className="flex-1 p-10">
              <h3 className="text-center font-medium text-primary-text text-4xl">شراكات مع الشركات</h3>
              <p className="mt-2 text-slate-500 text-2xl text-center">
                نعمل مع مجموعة من الشركات لتوفير فرص عمل حقيقية للمواهب مثل مواهبك.
              </p>
            </div>
            <div className="relative hidden h-48 lg:block">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/1205a454c4b64452a51930c9b0043f8db9ff8271/d202e/new/landing/chat-bot.png"
                className="absolute inset-0 h-full w-full object-cover object-left-top rounded-b-md"
                alt="Partnerships"
              />
            </div>
          </div>
          <div className="relative flex flex-col w-full bg-white rounded-md h-full justify-center items-center border border-slate-200 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
            <span className="absolute inset-0 rounded-md border-2 border-primary-text opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <div className="flex-1 p-10">
              <h3 className="text-center font-medium text-primary-text text-4xl">وظيفة في اسرع وقت</h3>
              <p className="mt-2 text-slate-500 text-2xl text-center">
                احصل علي وظيفة احلامك في اسرع وقت ممكن
              </p>
            </div>
            <div className="relative hidden h-48 lg:block">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/1205a454c4b64452a51930c9b0043f8db9ff8271/d202e/new/landing/chat-bot.png"
                className="absolute inset-0 h-full w-full object-cover object-left-top rounded-b-md"
                alt="Partnerships"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartWorkInfo;
