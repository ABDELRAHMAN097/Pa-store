import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StartWorkContactUs = () => {
  return (
    <div dir="rtl">
      <section className="bg-white !mt-0">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid  grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 flex flex-col justify-around bg-white shadow-lg p-8 lg:py-12">
              <p className="max-w-xl text-5xl ">
                تواصل مع فريق <span className="text-primary-text">Start work</span> 
              </p>

              
              <div className="flex gap-[20px] my-[30px] md:my-0 ">
                <FontAwesomeIcon className="text-[25px] cursor-pointer text-blue-500 " icon={faFacebook} />
                <FontAwesomeIcon className="text-[25px] cursor-pointer text-black " icon={faX} />
                <FontAwesomeIcon className="text-[25px] cursor-pointer text-red-500 " icon={faInstagram} />
                <FontAwesomeIcon className="text-[25px] cursor-pointer text-green-500 " icon={faWhatsapp} />
              </div>
              <p className="text-2xl text-gray-500">سنقوم بالرد عليك في اقرب وقت, رجاء ضع جميع التفاصيل في رسالتك وسنتواصل معك, شكرا لثقتك بنا</p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">الاسم</label>
                  <input
                    className="w-full rounded-lg border-gray-700  p-3 border-[1px]  text-sm"
                    placeholder="الاسم"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">البريد الإلكتروني</label>
                    <input
                      className="w-full rounded-lg border-gray-400  p-3 border-[1px] text-sm"
                      placeholder="عنوان البريد الإلكتروني"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">الهاتف</label>
                    <input
                      className="w-full rounded-lg border-gray-400  p-3 border-[1px] text-sm"
                      placeholder="رقم الهاتف"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Option1"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-primary-text has-[:checked]:border-primary-text has-[:checked]:bg-primary-text has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input className="sr-only" id="Option1" type="radio" tabIndex={-1} name="option" />
                      <span className="text-sm"> المتجر </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option2"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-primary-text has-[:checked]:border-primary-text has-[:checked]:bg-primary-text has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input className="sr-only" id="Option2" type="radio" tabIndex={-1} name="option" />
                      <span className="text-sm"> start work </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option3"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-primary-text has-[:checked]:border-primary-text has-[:checked]:bg-primary-text has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input className="sr-only" id="Option3" type="radio" tabIndex={-1} name="option" />
                      <span className="text-sm"> امر اخر </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">الرسالة</label>
                  <textarea
                    className="w-full rounded-lg border-gray-400  p-3 border-[1px] text-sm"
                    placeholder="الرسالة"
                    rows={8}
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4 w-full">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-primary-text  px-5 py-3 font-medium text-white "
                  >
                    إرسال الاستفسار
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StartWorkContactUs;
