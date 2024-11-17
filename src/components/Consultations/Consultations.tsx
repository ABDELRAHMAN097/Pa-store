import bgfd from '../../assets/Consultations.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faClock, faVideo } from '@fortawesome/free-solid-svg-icons';


const Consultations = () => {
  return (
    <div>
       <div
  dir="rtl"
  className="w-full m-5 flex justify-center items-center"
>
  <h2 className="text-center font-semibold text-primary-text text-5xl lg:text-7xl">الاستشارات</h2>
</div>
    <div className="flex flex-col justify-between p-8 gap-5 md:flex-row rounded-lg shadow-lg overflow-hidden w-full max-w-f mx-auto my-8">
    {/* الجزء الخاص بالمعلومات */}
    <div
    dir='rtl'
    className="bg-white p-6 w-full md:w-1/3 flex flex-col">
      <div>
        <h2 className="text-3xl font-semibold">
          استشارة شخصية مع عبدالرحمن خالد | 30 دقيقة
        </h2>
        <p className="text-green-600 text-2xl font-bold mb-4">540 ريال سعودي</p>
      </div>
      <div>
      <div className="flex flex-col  justify-between">
        <p className="text-2xl my-4 flex  text-right gap-2">
          <span className=""><FontAwesomeIcon icon={faClock} /></span>
          مدة الجلسة: 0 ساعة 30 دقيقة
        </p>
        <p className="text-2xl flex  text-right gap-2">
          <span className=""><FontAwesomeIcon icon={faVideo} /></span>
          المكان: مكالمة فيديو Google Meet
        </p>
      </div>
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold my-4 py-2 px-4 rounded w-full">
          احجز الجلسة الآن
        </button>

     
    </div>

    {/* الجزء الخاص بالصورة والخلفية */}
    <div className="relative w-full md:w-2/3 h-48 md:h-auto">
      <img
        src={bgfd}
        alt="Background"
        className="object-cover w-full h-full rounded-xl"
      />
    </div>
  </div>


  <div className='w-full p-8 text-right'>
    <div className='flex justify-end align-middle'>
    <h2 className='text-3xl align-baseline'>وصف الجلسة</h2>
    <FontAwesomeIcon className='text-3xl ml-5' icon={faCircleInfo} />
    </div>
    <p className='text-right leading-loose'>استشارة خاصة مع عبدالرحمن خالد شخصياً لمدة 30 دقيقة
<br />
اقدر اساعدك في هذه المواضيع:
<br />

-كيف ترفع تفاعل حساباتك وتحصل على مشاهدات ومتابعين بشكل اسرع
<br />

-كيف تبني مشروعك الخاص
<br />

-كيف تستغل مهارتك لزيادة دخلك
<br />

-كيف تسوق لمشروعك بافضل الطرق
<br />

-كيف تصير مشهور في فترة قصيرة
<br />

-كيف تسوق من خلال صناعة المحتوى بالطريقة الصحيحة
<br />

استثمر في نفسك واطلب استشارتك الخاصة الان لنمو مشروعك ..</p>
  </div>
  </div>
  )
}

export default Consultations