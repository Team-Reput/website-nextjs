import HeroSection from "./components/HeroSection";
import EUSection from "./components/EUSection";
import SolutionsSection from "./components/SolutionsSection";
import TextileChallenges from "./components/TextileChallenges";
 
import IndustryTransformations from "./components/IndustryTransformations";
import SustainabilitySection from "./components/SustainabilitySection";
import CarbonCalculatorBanner from "./components/CarbonCalculatorBanner";
import StoriesOfImpact from "./components/StoriesOfImpact";
import Testimonials from "./components/Testimonials";
// import SustainabilityInsights from "./components/SustainabilityInsights";
import SimpleBanner from "./components/SimpleBanner";
import Earth from "./components/earth";
import Eudr from "./components/Eudr";

 

 
export default function Home() {
  return (
    <>
     <main > 
      <HeroSection />
      <EUSection />
      <SolutionsSection/>
     
      <Earth/>
      <TextileChallenges/>
 
      <Eudr/>


      <IndustryTransformations/>
      <SustainabilitySection/>
      <CarbonCalculatorBanner/>
      <StoriesOfImpact/>  
      <Testimonials/>
      {/* <SustainabilityInsights/> */}
      <SimpleBanner/>

    </main>
  </>
  );
}






 