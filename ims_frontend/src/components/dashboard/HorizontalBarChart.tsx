import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type React from "react"

export const description = "A horizontal bar chart"

interface ChartData {
  month: string
  desktop: number
}

interface HorizontalBarChartProps {
  data: ChartData[]
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig


const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({data}) => {
  return (
    <ChartContainer config={chartConfig}>
        <BarChart
        accessibilityLayer
        data={data}
        layout="vertical"
        margin={{
            left: -20,
        }}
        >
        <XAxis type="number" dataKey="desktop" hide />
        <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
        </BarChart>
    </ChartContainer>
  )
}

export default HorizontalBarChart;