function Price({ price, discount }) {
  if (discount > 0) {
    return (
      <div className="mt-2">
        <div className="text-sm font-sm text-gray-700">
          ฿{(price - (price * discount) / 100).toFixed(2)}
        </div>
        <div className="text-xs font-light text-gray-400 line-through">
          ฿{price}
        </div>
      </div>
    );
  }
  return <div className="text-sm font-sm text-gray-700">฿{price}</div>;
}

export default Price;
