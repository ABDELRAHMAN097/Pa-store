import HomeSlider from '../components/sliders/HomeSlider'
import StartWorkHero from '../components/startWork/StartWorkHero'
import StartWorkInfo from '../components/startWork/StartWorkInfo'
import StartWorkContactUs from '../components/startWork/StartWorkContactUs'
import StartWorkPricing from '../components/startWork/StartWorkPricing'
import StartWorkStats from '../components/startWork/StartWorkStats'
import SuccessStoriesSlider from '../components/sliders/SuccessStoriesSlider'
import StartWorkFAQ from '../components/startWork/StartWorkFAQ'

const StartWrok = () => {
  return (
    <div>
      <HomeSlider />
      
      <div className='bg-gray-900'>
        <StartWorkHero />
        <StartWorkInfo />
        

      </div>
      <StartWorkStats />
        <SuccessStoriesSlider  />
        <StartWorkPricing />
      <StartWorkContactUs />

      <StartWorkFAQ />
    </div>
  )
}

export default StartWrok