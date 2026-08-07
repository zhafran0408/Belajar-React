/** @format */

import profile from "../assets/profile.jpg";
import { RiMore2Fill } from "react-icons/ri";

function Card() {
  return (
    <section className="grid grid-cols-1 gap-6 bg-black p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

    
      <div className="cursor-pointer">
        <img
          src={profile}
          alt="thumbnail"
          className="h-52 w-full rounded-xl object-cover"
        />

        <div className="mt-3 flex gap-3">
          <img
            src={profile}
            alt="profile"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="flex-1">
            <h2 className="font-semibold text-white">
              Belajar React
            </h2>

            <p className="text-sm text-gray-400">
              Zhafran Coding
            </p>

            <p className="text-sm text-gray-400">
              125K views • 2 weeks ago
            </p>
          </div>

          <RiMore2Fill className="cursor-pointer text-xl text-white" />
        </div>
      </div>

      
      <div className="cursor-pointer">
        <img
          src={profile}
          alt="thumbnail"
          className="h-52 w-full rounded-xl object-cover"
        />

        <div className="mt-3 flex gap-3">
          <img
            src={profile}
            alt="profile"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="flex-1">
            <h2 className="font-semibold text-white">
              Tutorial Tailwind CSS
            </h2>

            <p className="text-sm text-gray-400">
              Frontend ID
            </p>

            <p className="text-sm text-gray-400">
              89K views • 5 days ago
            </p>
          </div>

          <RiMore2Fill className="cursor-pointer text-xl text-white" />
        </div>
      </div>

      
      <div className="cursor-pointer">
        <img
          src={profile}
          alt="thumbnail"
          className="h-52 w-full rounded-xl object-cover"
        />

        <div className="mt-3 flex gap-3">
          <img
            src={profile}
            alt="profile"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="flex-1">
            <h2 className="font-semibold text-white">
              Membuat Website Mirip YouTube
            </h2>

            <p className="text-sm text-gray-400">
              Code Studio
            </p>

            <p className="text-sm text-gray-400">
              210K views • 1 month ago
            </p>
          </div>

          <RiMore2Fill className="cursor-pointer text-xl text-white" />
        </div>
      </div>

      
      <div className="cursor-pointer">
        <img
          src={profile}
          alt="thumbnail"
          className="h-52 w-full rounded-xl object-cover"
        />

        <div className="mt-3 flex gap-3">
          <img
            src={profile}
            alt="profile"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="flex-1">
            <h2 className="font-semibold text-white">
              Belajar JavaScript Dasar
            </h2>

            <p className="text-sm text-gray-400">
              Programming Hub
            </p>

            <p className="text-sm text-gray-400">
              95K views • 3 weeks ago
            </p>
          </div>

          <RiMore2Fill className="cursor-pointer text-xl text-white" />
        </div>
      </div>

    </section>
  );
}

export default Card;
