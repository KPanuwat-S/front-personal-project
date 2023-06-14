import { useInView } from "react-intersection-observer";
function Poster({ src, text, position, bold = undefined }) {
  const textProperty = "text-5xl mb-5 " + position;
  const boldProperty = "font-bold";

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when element comes into view
  });

  const animationClasses = inView ? "fadeInUp mb-20" : "mb-20";
  const animationText = inView ? "slideInRight" : "";
  return (
    <div ref={ref} className={animationClasses}>
      <div ref={ref} className={animationText}>
        {" "}
        <h1 className={textProperty}>
          {text} <span className={boldProperty}>{bold}</span>
        </h1>
      </div>
      <img src={src} className="w-full" />
    </div>
  );
}

export default Poster;
