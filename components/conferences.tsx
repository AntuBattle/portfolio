import { Mic, Badge, Mic2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Link from "next/link";

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
                        <Link href="https://docs.google.com/presentation/d/1Bp-VXnqjqJxZ4CYwWQEBgkdRGXizUG16OF6x6Iys6wE/"className="text-xs text-accent hover:underline inline-flex items-center mt-1" target="_blank">
                          View Slides
                          <svg
                            className="h-3 w-3 ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
    )
}

export default Conferences;