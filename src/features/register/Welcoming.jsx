import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import Loading from "../../components/Loading";
function Welcoming() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when element comes into view
  });
  const animationClasses = inView ? "fadeInUp" : "";
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) return <Loading></Loading>;
  return (
    <>
      <>
        <div className="fixed inset-0 bg-white opacity-70 z-20"></div>
        <div className="fixed inset-0 z-50">
          <div className="flex justify-center items-center min-h-full">
            <div
              className="w-[850px] rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col overflow-hidden max-h-[calc(100vh-2rem)]"
              onMouseUp={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center text-xl"></div>
              <div className="overflow-auto">
                <div className="bg-white overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
                  <img
                    alt="Trainer"
                    src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                    className="h-32 w-full object-cover md:h-full"
                  />

                  <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                    <div className="animate-bounce">
                      <i class="text-green-600 fa-regular fa-circle-check fa-xl mb-5"></i>
                    </div>
                    <p className="text-green-600 text-sm font-semibold uppercase tracking-widest">
                      Successful Registeration
                    </p>
                    <h2 className="mt-6 font-black uppercase">
                      <span className="text-xl font-black sm:text-5xl lg:text-4xl">
                        Welcome to UrbanChic!
                      </span>

                      <span className="mt-2 block text-sm"></span>
                    </h2>
                    <Link to={"/shop"}>
                      <div
                        className="mt-8 rounded-xl inline-block w-full bg-gray-800 hover:bg-gray-700 duration-300 py-3 text-sm font-bold uppercase tracking-widest text-white"
                        href=""
                      >
                        Go Shopping
                      </div>
                    </Link>
                    <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                      Discount for new member valid until 24th March, 2024 *
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Welcoming;
