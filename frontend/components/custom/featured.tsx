import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Featured() {
  return (
    <div className="flex space-x-6 m-9">
      
      <div 
        className="flex flex-col items-start justify-between p-12 bg-[#f7d1cd] rounded-lg w-1/2 bg-cover bg-center" 
        style={{ backgroundImage: "url('/placeholder.svg')" }}
      >
        <div className="flex space-x-2">
          <Badge variant="secondary">PODCAST</Badge>
          <Badge variant="secondary">CRYPTO</Badge>
        </div>
        <div className="mt-[150px]">
          <h1 className="text-4xl font-bold leading-tight text-white">
            Old unsatiable our now but considered travelling impression
          </h1>
          <Button variant="secondary" className="mt-2">Read More</Button>
        </div>
      </div>

      <div 
        className="flex flex-col items-start justify-between p-12 bg-[#f7d1cd] rounded-lg w-1/2 bg-cover bg-center" 
        style={{ backgroundImage: "url('/placeholder.svg')" }}
      >
        <div className="flex space-x-2">
          <Badge variant="secondary">PODCAST</Badge>
          <Badge variant="secondary">CRYPTO</Badge>
        </div>
        <div className="mt-[150px]">
          <h1 className="text-4xl font-bold leading-tight text-white">
            Old unsatiable our now but considered travelling impression
          </h1>
          <Button variant="secondary" className="mt-2">Read More</Button>
        </div>
      </div>

    </div>
  )
}