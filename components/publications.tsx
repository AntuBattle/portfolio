import {FileText} from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";


function Publications(){

    return(
        <Card className="cyber-card">
                  <CardHeader className="pb-2">
                    <FileText className="h-6 w-6 text-accent mb-2" />
                    <CardTitle>Publications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li>
                        <h4 className="font-medium">Sacred or Uncanny? Exploring visitors' reaction to a robotic saint in exhibition.</h4>
                        <p className="text-sm text-foreground/80">Realized a framework for data extraction and manipulation that allowed smoother and higher quality training of the model, which was being carried forward by and together with other paper's co-authors, resulting in an improvenent of SanTO Robot's performance.</p>
                        <p className="text-sm text-muted-foreground">IEEE 33rd International Workshop on Robot and Human Communication (ROMAN), 2024</p>
                        <Link href="https://ieeexplore.ieee.org/abstract/document/10731471" className="text-xs text-accent hover:underline inline-flex items-center mt-1" target="_blank">
                          View Publication
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

export default Publications;