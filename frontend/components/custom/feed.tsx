import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Latest from "@/components/custom/latest"

export default function Feed() {
  return (
    <div className="flex justify-between m-8">

      <div className="flex space-x-4">
        
        <Card className="rounded-lg w-[300px] rounded-lg">
          <img src="/placeholder.svg" alt="Lifestyle" className="w-full rounded-t-lg" />

          <CardContent>
            <div className="flex space-x-2 py-4">
            <Badge variant="secondary">LIFESTYLE</Badge>
            <Badge variant="secondary">LIFESTYLE</Badge>
            </div>
            <CardTitle>Of acceptance insipidity remarkably is invitation</CardTitle>
          </CardContent>

        </Card>

      </div>

      <Latest/>
    </div>
  )
}