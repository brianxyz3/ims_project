import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type React from "react"

export const description = "A simple area chart"

interface GraphData {
  month: string
  desktop: number
}

interface GraphProps {
  data: GraphData[]
}


const chartConfig = {
  desktop: {
    label: "Inventory",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const Graph: React.FC<GraphProps> = ({data}) => {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={data}
        margin={{
        left: 12,
        right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Area
          dataKey="desktop"
          type="natural"
          fill="var(--color-desktop)"
          fillOpacity={0.2}
          stroke="var(--color-desktop)"
        />
      </AreaChart>
    </ChartContainer>
  )
}

export default Graph;