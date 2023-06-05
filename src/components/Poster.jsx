function Poster({ src, text, position, bold = undefined }) {
  const textProperty = "text-5xl mb-5 " + position;
  const boldProperty = "font-bold";
  return (
    <div className="mb-20">
      <h1 className={textProperty}>
        {text} <span className={boldProperty}>{bold}</span>
      </h1>
      <img src={src} className="w-full" />
    </div>
  );
}

export default Poster;
