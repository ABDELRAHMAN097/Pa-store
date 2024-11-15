import JobDetailsSection from "./components/JobDetailsSection";
import JobBenefits from "./components/JobBenefits";
import WhatYouNeedToApply from "./components/WhatYouNeedToApply";
import CompanyDetails from "./components/CompanyDetails";

const JobDetails: React.FC = () => {
  return (
    <div className="mb-12">
      <JobDetailsSection />
      <div className="flex flex-col lg:flex-row justify-between   gap-4 container">
        <JobBenefits />
        <WhatYouNeedToApply />
      </div>
      <CompanyDetails />
    </div>
  );
};

export default JobDetails;

{
  /* <section className="mb-12">
        

            <div className="flex flex-wrap mb-4">
              <div className="flex items-center mr-4 mb-2">
                <WorkIcon color="primary" />
                <Typography className="ml-2 text-lg md:text-xl lg:text-2xl">النوع: هجين</Typography>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <WorkIcon color="primary" />
                <Typography className="ml-2 text-lg md:text-xl lg:text-2xl">المستوى: أول</Typography>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <WorkIcon color="primary" />
                <Typography className="ml-2 text-lg md:text-xl lg:text-2xl">القسم: الهندسة</Typography>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <MonetizationOnIcon color="primary" />
              <Typography className="ml-2 text-lg md:text-xl lg:text-2xl">الراتب المتوقع: $120,000 - $150,000</Typography>
            </div>

            <div className="flex items-center mb-4">
              <LocationOnIcon color="primary" />
              <Typography className="ml-2 text-lg md:text-xl lg:text-2xl">الموقع: سان فرانسيسكو، كاليفورنيا</Typography>
            </div>

            <Typography variant="body1" className="text-gray-700 mb-4 text-lg md:text-xl lg:text-2xl">
              نحن نبحث عن مصمم منتجات أول يكون مسؤولاً عن تقديم أفضل تجربة مستخدم عبر الإنترنت.
            </Typography>

            <Typography variant="h5" className="font-semibold text-lg md:text-xl lg:text-2xl mb-2 text-gray-800">
              المسؤوليات
            </Typography>
            <Typography className="text-lg md:text-xl lg:text-2xl mb-4">
              - تصميم واجهات المستخدم وتجربة المستخدم.
              <br />
              - العمل مع الفرق المختلفة لتحقيق أهداف المشروع.
              <br />
              - إجراء اختبارات قابلة للاستخدام وتحليل النتائج.
            </Typography>

            <Typography variant="h5" className="font-semibold text-lg md:text-xl lg:text-2xl mb-2 text-gray-800">
              المتطلبات
            </Typography>
            <ul className="list-disc list-inside mb-4 text-lg md:text-xl lg:text-2xl">
              <li>خبرة 5+ سنوات كمصمم منتجات</li>
              <li>إجادة برامج التصميم مثل Figma وSketch أو Adobe XD</li>
              <li>خبرة في تصميم واجهات المستخدم</li>
              <li>فهم قوي لمبادئ قابلية الاستخدام</li>
              <li>مهارات في التعاون والعمل ضمن فريق</li>
            </ul>

            <Typography variant="h5" className="font-semibold text-lg md:text-xl lg:text-2xl mb-2 text-gray-800">
              تفاصيل المنصب والفوائد
            </Typography>
            <Typography className="text-lg md:text-xl lg:text-2xl mb-4">
              - مزايا صحية شاملة.
              <br />
              - خيارات عمل مرنة (هجين، عن بعد).
              <br />
              - برامج تدريب وتطوير مهني.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              className="mt-4 w-full"
              style={{ borderRadius: "8px" }}
            >
              قدم على هذه الوظيفة
            </Button>
          </CardContent>
        </Card>
      </section> */
}
