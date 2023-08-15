"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

const tools = [
    {
        label: "Conversation",
        icon: ChatBubbleIcon, // replace with a radix icon
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation"
    }
]

export default function DashboardPage() {
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold">
                    Explore the power of AI
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat with the smartest AI
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card
                        key={tool.href}
                        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        {/* Add a right arrowed component */}
                    </Card>
                ))
                }
            </div>
        </div>
    );
}
