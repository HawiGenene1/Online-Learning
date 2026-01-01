import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import BrandBanner from "./components/BrandBanner";
import CourseCategories from "./components/CourseCategories";

export default function App(){
  return (
    <>
    <Header /> 
    <main>
      <Hero />
      <BrandBanner />
      <CourseCategories />
    </main>
       <Footer /> 
    </>
  );
}