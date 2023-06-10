import React from "react";
import Button from "../components/Button";

function FeatureSection() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" className="relative block group">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
                  Casual
                </h3>
                <Button primary={true} text="SHOP" />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="relative block group">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
              </div>

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
                  Summer
                </h3>

                <Button primary={true} text="SHOP" />
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="relative block group">
              <img
                src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/5/Street.gif"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
                  Street Chic
                </h3>

                <Button primary={true} text="SHOP" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FeatureSection;
