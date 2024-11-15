import { List, ListItem } from '@mui/material'

const JobBenefits = () => {
  return (
    <div className=" mx-auto w-full   lg:w-1/2 !min-h-[300px] mb-0 px-0 lg:py-8" dir="rtl">
      {/* Job Details Section */}
      <section className=" h-full mb-0 shadow-xl bg-white  border-2 border-gray-900/20 p-12 rounded-md ">
        <h1 className="text-3xl text-right lg:text-center ">ميزات العمل مع الشركة</h1>
        <List sx={{textAlign: 'left'}}>
            <ListItem sx={{textAlign: 'right'}}>مرتب تنافسي مع ذيادة كل 6 اشهر حسب الاتفاق</ListItem>
            <ListItem sx={{textAlign: 'right'}}>ضمان صحي شامل يتم الاتفاق عليه عند توقيع العقد</ListItem>
            <ListItem sx={{textAlign: 'right'}}>توصيل للشركة من مكانك او اعطائك بدل سفر</ListItem>
            <ListItem sx={{textAlign: 'right'}}>حوافز اضافية عند العمل لساعات اضافية تحسب حسب الخبرة </ListItem>
          </List>
      </section>
    </div>
  )
}

export default JobBenefits