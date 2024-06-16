import Image from "next/image";

export default function Meta() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 gap-28 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-28">
        <section>
          <h2 className="mb-4 text-2xl font-bold">CRYPTO</h2>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="group flex items-start">
                <img
                  src="/placeholder.svg"
                  alt="Content thumbnail"
                  className="w-20 h-20 rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Article Title {index + 1}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {index + 1} days ago • {index + 3} min read
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">HARDWARE</h2>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="group flex items-start">
                <img
                  src="/placeholder.svg"
                  alt="Content thumbnail"
                  className="w-20 h-20 rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Article Title {index + 1}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {index + 1} days ago • {index + 3} min read
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">GOVT</h2>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="group flex items-start">
                <img
                  src="/placeholder.svg"
                  alt="Content thumbnail"
                  className="w-20 h-20 rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Article Title {index + 1}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {index + 1} days ago • {index + 3} min read
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">FINANCE</h2>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="group flex items-start">
                <img
                  src="/placeholder.svg"
                  alt="Content thumbnail"
                  className="w-20 h-20 rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Article Title {index + 1}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {index + 1} days ago • {index + 3} min read
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
