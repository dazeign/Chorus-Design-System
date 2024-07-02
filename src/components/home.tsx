import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent } from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@/components/ui/tooltip";
import { Heart } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Share2 } from "lucide-react";
import { Button } from "./ui/button";
function Home() {
  const likes = 101;

  return (
    <div className="w-screen h-screen">
      <>
        <div className="w-full h-full bg-white">
          <Button>Button</Button>
          <Card className="max-w-md mx-auto my-4 dark:bg-black">
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://via.placeholder.com/40"
                  alt="user-avatar"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg font-semibold">
                  Username
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  2 hours ago
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0"></CardContent>
            <CardFooter className="flex flex-col space-y-4 p-4">
              <div className="flex justify-around py-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost">
                        <Heart className="h-6 w-6 text-red-500" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Like</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost">
                        <MessageSquare className="h-6 w-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Comment</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost">
                        <Share2 className="h-6 w-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div>
                <p
                  className={`font-bold ${likes >= 100 ? "text-red-500" : ""}`}
                >
                  ${likes} likes
                </p>
                <p>
                  <span className="font-bold">Username</span> This is a caption
                  for the post
                </p>
                <p className="text-sm text-muted-foreground">
                  View all 10 comments
                </p>
              </div>
              <div></div>
            </CardFooter>
          </Card>
        </div>
      </>
    </div>
  );
}

export default Home;
