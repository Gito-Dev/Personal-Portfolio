import React from "react";

export default function Home() {
  return (
    <div className="h-screen p-4">
      <div className="flex flex-col h-full gap-4">
        <div className="w-full h-[10vh] group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 bg-opacity-20  transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="relative flex h-full w-full items-center justify-center p-6 text-gray-800">
            <h2 className="text-2xl font-bold">Header</h2>
          </div>
        </div>

        <div className="flex gap-4 h-[75vh]">
          <div className="w-1/4 group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 bg-opacity-20  transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            <div className="relative flex h-full w-full items-center justify-center p-6 text-gray-800">
              <h2 className="text-2xl font-bold">Sidebar</h2>
            </div>
          </div>

          <div className="grow group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 bg-opacity-20  transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            <div className="relative flex h-full w-full items-center justify-center p-6 text-gray-800">
              <h2 className="text-2xl font-bold">Content</h2>
            </div>
          </div>
        </div>

        <div className="w-full h-[10vh] group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 bg-opacity-20  transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="relative flex h-full w-full items-center justify-center p-6 text-gray-800">
            <h2 className="text-2xl font-bold">Footer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
