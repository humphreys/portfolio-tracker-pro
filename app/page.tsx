import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Tracker Pro</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Shadcn UI is working!</p>
          <Button>Click me</Button>
        </CardContent>
      </Card>
    </div>
  );
}
