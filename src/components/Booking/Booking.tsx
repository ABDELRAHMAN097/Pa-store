const Booking = () => {
    return (
      <div className="flex justify-center p-10 bg-gray-50">
        <div className="flex flex-col lg:flex-row w-full bg-white shadow-lg rounded-lg p-6">
  
          {/* القسم الأيسر: اختيار الوقت */}
          <div className="w-full lg:w-1/3 p-5 border-b lg:border-b-0 lg:border-r border-gray-200">
            <h2 className="text-center text-lg font-semibold mb-4">حدد التاريخ والوقت المناسب</h2>
            <div className="flex flex-col space-y-3">
              <button className="w-full py-2 border border-green-500 text-green-600 font-medium rounded-lg hover:bg-green-100">
                PM 9:30
              </button>
              <button className="w-full py-2 border border-green-500 text-green-600 font-medium rounded-lg hover:bg-green-100">
                PM 10:00
              </button>
            </div>
          </div>
  
          {/* القسم الأوسط: جدول التقويم */}
          <div className="w-full lg:w-1/3 p-5 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="text-center text-lg font-semibold mb-4">نوفمبر 2024</div>
            <div className="flex justify-between items-center mb-4">
              <button className="text-gray-500">&lt;</button>
              <div>تغيير الشهر</div>
              <button className="text-gray-500">&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              <div className="text-gray-500">أحد</div>
              <div className="text-gray-500">اثنين</div>
              <div className="text-gray-500">ثلاثاء</div>
              <div className="text-gray-500">أربعاء</div>
              <div className="text-gray-500">خميس</div>
              <div className="text-gray-500">جمعة</div>
              <div className="text-gray-500">سبت</div>
              {/* الأيام */}
              {[...Array(30)].map((_, i) => (
                <div key={i} className={`py-1 rounded-full ${i === 16 ? 'bg-green-500 text-white' : ''}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
  
          {/* القسم الأيمن: تفاصيل الجلسة */}
          <div className="w-full lg:w-1/3 p-5">
            <h2 className="text-xl font-semibold mb-3">استشارة شخصية مع عبدالرحمن خالد | 30 دقيقة</h2>
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">تحديد المستشار</span>
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  ع
                </span>
              </div>
              <div className="text-gray-600">عبدالرحمن خالد الجهني</div>
            </div>
  
            {/* تفاصيل أخرى */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">540 ريال سعودي</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">مدة الجلسة: 0 ساعة 30 دقيقة</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">المكان: مكالمة فيديو - Google Meet</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">التوقيت الزمني: Africa/Cairo</span>
              </div>
            </div>
  
            {/* زر تأكيد الحجز */}
            <div className="mt-5">
              <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                تأكيد الحجز
              </button>
            </div>
  
            {/* زر إلغاء */}
            <div className="mt-2">
              <button className="w-full py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300">
                إلغاء
              </button>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Booking;
  