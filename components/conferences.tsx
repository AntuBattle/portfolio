import { Mic, Badge, Mic2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

function Conferences(){

    return (
        <Card className="cyber-card">
                  <CardHeader className="pb-2">
                    <Mic className="h-6 w-6 text-accent mb-2" />
                    <CardTitle>Conference Speaking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div>
                            <h4 className="font-medium">Linux Day 2024</h4>
                            <p className="text-sm text-muted-foreground">Università degli Studi di Messina, 2024</p>
                          </div>
                          <Mic2 className="self-start"></Mic2>
                        </div>
                        <p className="text-sm mt-1">
                          "Zero to Git: The Basis of Open Source Collaboration"
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
    )
}

export default Conferences;