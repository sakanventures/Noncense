import Link from "next/link"

export default function Podcast() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1446px] grid gap-6 md:gap-8 px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <h2 className="text-2xl font-bold tracking-tight">More Episodes</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
          
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg shadow-lg">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
                </Link>
                <img
                src="/placeholder.svg"
                alt="Product 1"
                width={330}
                height={480}
                className="[grid-area:stack] object-cover w-full h-full"
                />
                <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                <h5 className="font-semibold text-lg tracking-tight">Ethereum Vs Solana</h5>
                </div>
            </div>

            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg shadow-lg">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
                </Link>
                <img
                src="/placeholder.svg"
                alt="Product 1"
                width={330}
                height={480}
                className="[grid-area:stack] object-cover w-full h-full"
                />
                <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                <h5 className="font-semibold text-lg tracking-tight">Ledger Stax</h5>
                </div>
            </div>

            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg shadow-lg">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
                </Link>
                <img
                src="/placeholder.svg"
                alt="Product 1"
                width={330}
                height={480}
                className="[grid-area:stack] object-cover w-full h-full"
                />
                <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                <h5 className="font-semibold text-lg tracking-tight">Spot Ethereum ETF</h5>
                </div>
            </div>

            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg shadow-lg">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
                </Link>
                <img
                src="/placeholder.svg"
                alt="Product 1"
                width={330}
                height={480}
                className="[grid-area:stack] object-cover w-full h-full"
                />
                <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                <h5 className="font-semibold text-lg tracking-tight">Airdrop Mania!</h5>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}