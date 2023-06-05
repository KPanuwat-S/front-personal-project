import Button from "./Button";
const boldProperty = "font-bold";
function CTA({ text, ctaText = "SHOP", primary = true, bold = undefined }) {
  return (
    <div className="text-center">
      {text && (
        <h1 className="text-5xl mb-6">
          {text} <span className={boldProperty}>{bold}</span>
        </h1>
      )}
      <Button text={ctaText} primary={primary}></Button>
    </div>
  );
}

export default CTA;
