import Banner from '@/components/banner/Banner'
import FeaturesGrid from '@/components/features/FeaturesGrid'
import FeaturesBenefits from '@/components/features/FeaturesBenefits'
import Hero from '@/components/hero/Hero'
import Cta from '@/components/cta/Cta'
import { PlayCircle } from 'lucide-react'
import { heroImg } from '@/assets/images'

const HomePage = () => {
  return (
    <>
      <Hero isHomePage
        heroTitle='Master Your Inventory.'
        Icon={PlayCircle}
        img={{
          src: heroImg,
          alt:"Modern warehouse with automated shelving and sleek lighting in a high-tech facility"

        }}
        btn1={{text: "Get Started Free", navLink: "/register"}}
        btn2={{text: "View Demo", navLink: ""}}
        heroText='The all-in-one platform for modern businesses to track stock, manage orders, and forecast demand with AI precision. Stop guessing, start growing.'
      />
      <Banner/>
      <FeaturesGrid/>
      <FeaturesBenefits/>
      <Cta title='Ready to stop guessing?'/>
    </>
  )
}

export default HomePage