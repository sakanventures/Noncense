import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function MountainIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 dark:bg-neutral-600">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Nonce|nse</span>
          </Link>
          <div className="w-full max-w-md space-y-2">
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-sm text-gray-500 dark:text-white">Sign up to get the latest updates.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Product</h4>
            <nav className="flex flex-col space-y-1">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Integrations
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Company</h4>
            <nav className="flex flex-col space-y-1">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Blog
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Legal</h4>
            <nav className="flex flex-col space-y-1">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}