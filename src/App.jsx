import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import BrandBanner from "./components/BrandBanner";
import CourseCategories from "./components/CourseCategories";
import Courses from "./components/Courses";
import WhyLearnLive from "./components/WhyLearnLive";
import Testimonials from "./components/Testimonials";



export default function App(){
  return (
    <>
    <Header /> 
    <main>
      <Hero />
      <BrandBanner />
      <CourseCategories />
      <Courses/>
      <WhyLearnLive />
      <Testimonials />
    </main>
       <Footer /> 
    </>
  );
}