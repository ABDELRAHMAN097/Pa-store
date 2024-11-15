import { List, ListItem } from "@mui/material";

const JobDetailsSection = () => {
  return (
    <div className="container mx-auto px-4 py-8" dir="rtl">
      {/* Job Details Section */}
      <section className="mb-12 shadow-xl bg-white border-2 border-gray-900/20 p-6 md:p-12 rounded-md">
        <h1 className="text-3xl md:text-4xl text-center font-bold">
          مبرمج ومطور مواقع وتطبيقات
        </h1>
        <div className="mb-6 mt-4 flex flex-wrap gap-2 justify-center">
          <span className="px-4 py-2 rounded-3xl bg-slate-100 text-xs md:text-sm font-bold text-primary-text">
            من المنزل
          </span>
          <span className="px-4 py-2 rounded-3xl bg-slate-100 text-xs md:text-sm font-bold text-primary-text">
            خبرة اكثر من 5 اعوام
          </span>
          <span className="px-4 py-2 rounded-3xl bg-slate-100 text-xs md:text-sm font-bold text-primary-text">
            برمجة
          </span>
          <span className="px-4 py-2 rounded-3xl bg-slate-100 text-xs md:text-sm font-bold text-primary-text">
            تطوير مواقع
          </span>
        </div>
        <h2 className="text-primary-text font-bold text-lg md:text-xl">
          ملخص:
          <br />
          <span className="text-black font-normal mx-2">
            تبحث شركة "راش أوردر" عن مطور React موهوب. كعضو في فريقنا، ستعمل على مشاريع مثيرة تُحدث فرقًا في عالم التجارة الإلكترونية والتوزيع. ستكون مسؤولًا عن تصميم وتطوير وتنفيذ تطبيقات ويب معقدة باستخدام React والتقنيات ذات الصلة. ستعمل بشكل وثيق مع فرق متعددة التخصصات لتقديم حلول برمجية عالية الجودة تلبي احتياجات عملائنا في مجالات اللوجستيات والمخازن.
            يقع مكتبنا على بُعد خطوات من مركز التكنولوجيا في وادي السيليكون، وفريقنا في طليعة الابتكار في هذا المجال سريع التطور. إذا كنت مستعدًا للانضمام إلى فريق ديناميكي ومثير يرتقي بالتجارة الإلكترونية والتوزيع إلى آفاق جديدة، قدّم الآن وكن جزءًا من إرثنا!
          </span>
        </h2>
        <h2 className="text-primary-text font-bold text-lg md:text-xl mt-6">
          المهام التي ستقوم بها:
          <span className="text-black font-normal inline-block">
            <List sx={{ textAlign: 'left' }}>
              <ListItem sx={{ textAlign: 'right' }}>وجود خبرة 3 سنوات علي الاقل</ListItem>
              <ListItem sx={{ textAlign: 'right' }}>لديه الخبرة الازمة لاستخدام العديد والكثير من التقنيات البرمجية والتعامل مع اسس الحمايه والقدرة علي العمل مع اكثر من فرد مع امتلاك مهارات مهمه في القيادة والتعامل مع الاخرين</ListItem>
              <ListItem sx={{ textAlign: 'right' }}>لديه الخبرة الازمة لاستخدام العديد والكثير من التقنيات البرمجية والتعامل مع اسس الحمايه والقدرة علي العمل مع اكثر من فرد مع امتلاك مهارات مهمه في القيادة والتعامل مع الاخرين</ListItem>
              <ListItem sx={{ textAlign: 'right' }}>لديه الخبرة الازمة لاستخدام العديد والكثير من التقنيات البرمجية والتعامل مع اسس الحمايه والقدرة علي العمل مع اكثر من فرد مع امتلاك مهارات مهمه في القيادة والتعامل مع الاخرين</ListItem>
            </List>
          </span>
        </h2>
        <h2 className="text-primary-text font-bold text-lg md:text-xl mt-6">
          المهارات المطلوبة:
          <span className="text-black font-normal inline-block">
            <List sx={{ textAlign: 'left' }}>
              <ListItem sx={{ textAlign: 'right' }}>وجود خبرة 3 سنوات علي الاقل</ListItem>
              <ListItem sx={{ textAlign: 'right' }}>لديه الخبرة الازمة لاستخدام العديد والكثير من التقنيات البرمجية والتعامل مع اسس الحمايه والقدرة علي العمل مع اكثر من فرد مع امتلاك مهارات مهمه في القيادة والتعامل مع الاخرين</ListItem>
              <ListItem sx={{ textAlign: 'right' }}>لديه الخبرة الازمة لاستخدام العديد والكثير من التقنيات البرمجية والتعامل مع اسس الحمايه والقدرة علي العمل مع اكثر من فرد مع امتلاك مهارات مهمه في القيادة والتعامل مع الاخرين</ListItem>
              <ListItem sx={{ textAlign: 'right' }}>لديه الخبرة الازمة لاستخدام العديد والكثير من التقنيات البرمجية والتعامل مع اسس الحمايه والقدرة علي العمل مع اكثر من فرد مع امتلاك مهارات مهمه في القيادة والتعامل مع الاخرين</ListItem>
            </List>
          </span>
        </h2>
      </section>
    </div>
  );
};

export default JobDetailsSection;
