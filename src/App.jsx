import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import BrandBanner from "./components/BrandBanner";
import CourseCategories from "./components/CourseCategories";
import courses from "./components/Courses";



export default function App(){
  return (
    <>
    <Header /> 
    <main>
      <Hero />
      <BrandBanner />
      <CourseCategories />
      <courses/>
    </main>
       <Footer /> 
    </>
  );
}