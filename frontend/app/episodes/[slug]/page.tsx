import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Episode() {
  return (
    <div className="w-full">

      <section className="w-full bg-gray-950 py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-50">Episode 42</div>
            <h1 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl lg:text-6xl">
              The Future of Podcasting
            </h1>
            <div className="flex items-center gap-3 text-gray-400">
              <div className="flex items-center gap-2">
                <img src="/placeholder.svg" width="32" height="32" alt="Guest Avatar" className="rounded-full" />
                <span>John Doe</span>
              </div>
              <Separator className="h-4 w-px bg-gray-700" />
              <div>June 10, 2024</div>
            </div>
            <p className="max-w-[600px] text-gray-400">
              In this episode, we explore the exciting future of the podcasting industry. Our guest, John Doe, shares
              his insights on the latest trends, emerging technologies, and the impact of AI on podcast production and
              distribution.
            </p>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <video controls className="w-full h-full object-cover">
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tighter text-gray-950 dark:text-gray-50">Episode Audio</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
              <audio controls className="w-full">
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  type="audio/mpeg"
                />
              </audio>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tighter text-gray-950 dark:text-gray-50">Show Notes</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
              <ScrollArea className="max-h-[300px]">
                <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    In this episode, we explore the exciting future of the podcasting industry. Our guest, John Doe,
                    shares his insights on the latest trends, emerging technologies, and the impact of AI on podcast
                    production and distribution.
                  </p>
                  <p>
                    Some key topics covered in this episode include:
                    <ul className="list-disc pl-4">
                      <li>The rise of voice-first interfaces and their impact on podcast discovery</li>
                      <li>Advancements in audio editing and production tools powered by AI</li>
                      <li>Strategies for building a successful podcast brand and monetizing your content</li>
                      <li>The future of podcast advertising and dynamic ad insertion</li>
                      <li>Emerging podcast formats and the evolution of the medium</li>
                    </ul>
                  </p>
                  <p>
                    Be sure to tune in to hear John's expert insights and predictions for the future of this rapidly
                    evolving industry.
                  </p>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container">
          <div className="mb-8 px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter text-gray-950 dark:text-gray-50">Related Episodes</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Related Episode"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="text-lg font-bold text-gray-950 dark:text-gray-50">
                  Episode 41: The Rise of Generative AI
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  In this episode, we discuss the latest advancements in generative AI and its potential impact on
                  various industries.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Related Episode"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="text-lg font-bold text-gray-950 dark:text-gray-50">
                  Episode 40: The Future of Remote Work
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We explore the long-term implications of the shift to remote work and the technologies shaping the
                  future of work.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Related Episode"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="text-lg font-bold text-gray-950 dark:text-gray-50">
                  Episode 39: The Metaverse Explained
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  In this episode, we dive deep into the concept of the metaverse and its potential to transform our
                  digital experiences.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Related Episode"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="text-lg font-bold text-gray-950 dark:text-gray-50">
                  Episode 38: The Future of Sustainable Energy
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We explore the latest advancements in renewable energy technologies and their potential to shape a
                  more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}