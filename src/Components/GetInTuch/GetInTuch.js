import React from "react";

const GetInTuch = () => {
  return (
    <div className="mt-5 mb-5 bg-red-600 p-2">

      <div className="flex justify-center my-7">
        <h1 className=" bg-red-100 text-center aboutUs font-bold">
          Get In Touch & Stay Safe
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
        {/* form */}

        <div className="mx-6">
          <form action="">
            <div className="form-control text-white">
              <label className="label">
                <span className="label-text text-white">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control text-white">
              <label className="label">
                <span className="label-text text-white">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-white">Your Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-500 text-white font-semibold mb-2">
                Send Us
              </button>
            </div>
          </form>
        </div>

        {/* text */}
        
        <div className="flex justify-center items-center">

           <div className="mt-5 lg:mt-0 p-2">

              <h1 className="text-2xl text-red-700 font-semibold bg-yellow-200 text-center py-3 px-2 rounded-lg">Red Flower Building Needs  Power By <br />Safety Automation </h1>
              <h1 className="mt-2 text-2xl text-red-700 font-semibold bg-yellow-200 text-center p-2 rounded-lg"> Safe insure your life & your area between </h1>

              <h1 className="text-xl mt-2 text-red-700 font-semibold bg-yellow-200 text-center p-2 rounded-lg" ><i class="fa-solid fa-envelope"></i> autosafety360@gmail.com</h1>

              <h1 className="text-xl mt-2 text-red-700 font-semibold bg-yellow-200 text-center p-2 rounded-lg" ><i class="fa-solid fa-phone"></i> O1711112644, 01760075031</h1>

           </div>

        </div>

      </div>
    </div>
  );
};

export default GetInTuch;
