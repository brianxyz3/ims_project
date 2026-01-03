import { TrendingUp } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type React from "react"
import { Badge } from "../ui/badge"

export const description = "A simple area chart"

interface AnalysisCardProps {
  children: React.ReactNode
  description?: string
  title?: string
  total?: string
  trend?: "up" | "down" | "neutral"
  trendValue?: number
}


const AnalysisCard: React.FC<AnalysisCardProps> = ({children, title, description, total, trend, trendValue}) => {
  return (
    <Card className="border border-border/50">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <h3 className="inline-flex tracking-tight text-3xl md:text-4xl font-bold mr-2 text-foreground">{total}</h3>
          {description}
          <Badge variant={trend} className="border-none text-sm">
            {trendValue}% <TrendingUp className="h-4 w-4" />
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center leading-none font-medium">
              Trending {trend} by 
              <Badge variant={trend} className="p-1 border-none text-sm">{trendValue}% </Badge> this month <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export { AnalysisCard }