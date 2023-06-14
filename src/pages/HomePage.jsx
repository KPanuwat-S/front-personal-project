import Poster from "../components/Poster";
import poster from "../assets/HomePagePics/poster-01.jpg";
import poster2 from "../assets/HomePagePics/poster-02.jpg";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import ProductGroup from "../features/productCatalog/ProductGroup";
import Footer from "../layout/Footer";
import FeatureSection from "./FeatureSection";
import BestPriceSection from "../components/BestPriceSection";
import { useInView } from "react-intersection-observer";
function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when element comes into view
  });

  const animationClasses = inView ? "fadeInUp" : "";

  return (
    <div>
      <Hero text="Get Your Everyday Look Colorized" />

      <div>
        <Poster
          src={poster}
          text="Get Away the Mundane of "
          bold="Getting Dress"
          position="text-left"
        />

        <Poster
          src={poster2}
          text="Effortlessly Look "
          bold="Good"
          position="text-right"
        />
      </div>
      <div ref={ref} className={animationClasses}>
        <div className="mb-[60px]">
          <CTA
            text="Explore UrbanChic to dress like eveary day is"
            bold="a special day."
          ></CTA>
        </div>
      </div>
      <div ref={ref} className={animationClasses}>
        <BestPriceSection />
      </div>
      <div ref={ref} className={animationClasses}>
        <FeatureSection />
      </div>

      {/* <ProductGroup /> */}
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
