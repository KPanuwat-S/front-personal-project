import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="grid-4-cols">
      <div>
        <h1 className="text-red-400">UrbanChic.</h1>
      </div>
      <div>
        <Link />
      </div>
    </div>
  );
}

export default Header;
