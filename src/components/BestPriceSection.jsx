import React from "react";
import Button from "./Button";

function BestPriceSection() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Best Price
                </h2>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  rerum quam amet provident nulla error!
                </p>
              </header>

              <Button primary={true} text="SHOP" />
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="flex justify-center items-center gap-10">
              <li>
                <a href="#">
                  <div className="object-cover w-[350px] rounded aspect-square">
                    <img
                      src="https://static.zara.net/photos///2023/I/0/2/p/4938/304/500/2/w/3024/4938304500_2_1_1.jpg?ts=1685709801535"
                      alt=""
                    />
                  </div>

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Comfort Polo
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </a>
              </li>

              <li className="place-self-center">
                <a href="#" className="block group">
                  <div className="object-cover w-[350px] rounded aspect-square">
                    <img
                      src="https://static.zara.net/photos///2023/V/0/1/p/2753/132/401/17/w/916/2753132401_2_3_1.jpg?ts=1678896239456"
                      alt=""
                    />
                  </div>

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Smart Blazer for Woman
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestPriceSection;
