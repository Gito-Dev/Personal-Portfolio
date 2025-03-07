import React from "react";
import pfp from "../assets/pfp.png";

export default function Home() {
  return (
    <div className="h-screen p-4">
      <div className="flex flex-col md:flex-row h-full gap-4">
        {/* sidebar */}
        <div className="w-full md:w-1/4 h-1/4 md:h-full group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 bg-opacity-20 transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="relative flex flex-col h-full w-full p-6 text-gray-800">
            <div className="w-full flex items-center gap-4">
              <button
                className="w-8 h-8 md:w-20 md:h-20 lg:w-30 lg:h-30 rounded-full bg-[#e84644] hover:bg-[#e84644]/90 transition-all duration-300 flex items-center justify-center shadow-lg"
                style={{
                  backgroundImage: `url(${pfp})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></button>
              <h1 className="text-balance text-2xl font-semibold tracking-tight bg-gradient-to-r from-[#e84644] via-[#ff6b6b] to-[#ff8585] bg-clip-text text-transparent sm:text-3xl drop-shadow-[0_0_15px_rgba(232,70,68,0.75)]">
                Gito.Dev
              </h1>
            </div>
          </div>
        </div>

        {/* content center  */}
        <div className="grow h-3/4 md:h-full group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 bg-opacity-20 transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="relative flex h-full w-full items-center justify-center p-6 text-gray-800">
            <h2 className="text-2xl font-bold">Content</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
