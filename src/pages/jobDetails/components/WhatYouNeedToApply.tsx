import { List, ListItem } from '@mui/material';

const WhatYouNeedToApply = () => {
  return (
    <div className=" mx-0 w-full min-h-full lg:w-1/2 py-8" dir="rtl">
      {/* Job Details Section */}
      <section className="shadow-xl bg-white border-2 border-gray-900/20 p-6 md:p-12 rounded-md h-full">
        <h1 className="text-3xl text-right lg:text-center mb-4">المطلوب للتقديم</h1>
        <List sx={{ textAlign: 'left' }}>
          <ListItem sx={{ textAlign: 'right', display: 'flex', alignItems: 'center' }}>
            
            اثبات خبرة للعمل مع شركات واتمام مشاريع والقدرة علي المناقشة فيها
          </ListItem>
          <ListItem sx={{ textAlign: 'right', display: 'flex', alignItems: 'center' }}>
            
            شهادة تخرج خاصة بهندسة او ما شابهها
          </ListItem>
          <ListItem sx={{ textAlign: 'right', display: 'flex', alignItems: 'center' }}>
            
            اوراق خاصة لاثبات الوجود طوال مدة العمل
          </ListItem>
          <ListItem sx={{ textAlign: 'right', display: 'flex', alignItems: 'center' }}>
            
            تقرير لاخر شركة عملت معها وافادة بأنك شخص مسؤل
          </ListItem>
        </List>
      </section>
    </div>
  );
};

export default WhatYouNeedToApply;
