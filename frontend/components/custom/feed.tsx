import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

      <div className="w-[500px] ml-8">
        <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">An delighted offending curiosity my is dashwoods</h3>
            <p className="text-sm text-muted-foreground">WILLIAM LEWIS · MARCH 9, 2018</p>
          </div>
          <div>
            <h3 className="font-semibold">Celebrated her had sentiments understood are projection set</h3>
            <p className="text-sm text-muted-foreground">WILLIAM LEWIS · MAY 11, 2018</p>
          </div>
          <div>
            <h3 className="font-semibold">Uneasy no settle whence nature narrow in afraid</h3>
            <p className="text-sm text-muted-foreground">WILLIAM LEWIS · APRIL 29, 2018</p>
          </div>
          <div>
            <h3 className="font-semibold">Uneasy no settle whence nature narrow in afraid</h3>
            <p className="text-sm text-muted-foreground">WILLIAM LEWIS · APRIL 29, 2018</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}