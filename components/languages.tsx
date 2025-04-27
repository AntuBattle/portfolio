import { Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

function Language({ language="English", level="Native", percentage="100%" }: {language: string, level: string, percentage: string}, ){

    return (
        <>
            <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{language}</span>
                <span className="text-sm text-muted-foreground">{level}</span>
            </div>
            <div className="w-full bg-secondary/30 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: percentage }}></div>
            </div>
        </>   
    )
}

function Languages(){

    return(

        <div className="grid grid-cols-1 gap-6">
                <Card className="cyber-card">
                  <CardHeader className="pb-2">
                    <Globe className="h-6 w-6 text-accent mb-2" />
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <Language language="Italian" level="Native" percentage="100%"/>
                      </li> 
                      <li>
                        <Language language="English" level="Full Working Proficency (CAE, C1)" percentage="98%"/>
                      </li>
                      <li>
                        <Language language="Japanese" level="Limited Working Proficency (N3)" percentage="70%"/>
                      </li> 
                      <li>
                      <Language language="Spanish" level="Conversational" percentage="60%"/>
                      </li>
                      <li>
                        <Language language="German" level="Elementary Proficency" percentage="10%"/>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
    )
}

export default Languages;