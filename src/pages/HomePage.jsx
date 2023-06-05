import Poster from "../components/Poster";
import poster from "../assets/HomePagePics/poster-01.jpg";
import poster2 from "../assets/HomePagePics/poster-02.jpg";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import ProductGroup from "../features/productCatalog/ProductGroup";

function HomePage() {
  return (
    <>
      <Hero text="Get Your Everyday Look Colorized" />
      <div className="mt-20">
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
      <div className="mb-[120px]">
        <CTA
          text="Explore UrbanChic to dress like eveary day is"
          bold="a special day."
        ></CTA>
      </div>
      <ProductGroup />
    </>
  );
}

export default HomePage;
