
import ProductSlider from '../components/sliders/ProductsSlider';
import MulitSectionProductsSlider from '../components/sliders/MultiSectionProductsSlider';
import StartWorkHomeBanner from '../components/banners/StartWorkHomeBanner';
import OurGoals from '../components/Home/OurGoals';
import HomeSlider from '../components/sliders/HomeSlider';
import Consultations from '../components/Consultations/Consultations';

const Home = () => {
  

  return (
    <div>

      <HomeSlider />
		
      <div className='bg-slate-900'>
        <ProductSlider title='الكتب' types={["خيال", "روايات", "رومانسي", "علوم", "رياضيات", "تاريخ"]} selectedType='تاريخ' buttonTitle='عرض المزيد من الكتب' />
        <ProductSlider title='الدورات' types={["برمجة", "لغات", "تصميم", "بيزنيس", "موسيقي"]} selectedType='موسيقي' buttonTitle='عرض المزيد من الدورات'/>
      </div>
      
      <MulitSectionProductsSlider />

      <StartWorkHomeBanner />
      
      <OurGoals />

      <Consultations/>
      
    </div>
  )
}

export default Home