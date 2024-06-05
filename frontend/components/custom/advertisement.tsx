import Image from "next/image"

export default function Advertisement() {
    return (
      <div className="flex justify-center pt-12">
        <div className="relative w-[1446px] h-[100px] rounded-lg overflow-hidden">
          <img src="/placeholder.svg" alt="Ad Banner" width={1446} height={100} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 flex items-center justify-center text-center px-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold tracking-tight text-white">Unleash Your Potential</h2>
              <p className="text-xl text-gray-300">Get 50% off our premium courses for a limited time.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }