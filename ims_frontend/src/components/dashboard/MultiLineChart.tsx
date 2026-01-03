import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A multiple line chart"

const chartData = [
  { month: "January", sales: 186, purchase: 80 },
  { month: "February", sales: 305, purchase: 200 },
  { month: "March", sales: 237, purchase: 120 },
  { month: "April", sales: 73, purchase: 190 },
  { month: "May", sales: 209, purchase: 130 },
  { month: "June", sales: 214, purchase: 140 },
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  purchase: {
    label: "Purchase",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const MultiLineChart = () => {
  return (
    <>
    <ChartContainer config={chartConfig}>
        <LineChart
        accessibilityLayer
        data={chartData}
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
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
            dataKey="sales"
            type="monotone"
            stroke="var(--color-sales)"
            strokeWidth={2}
            dot={false}
        />
        <Line
            dataKey="purchase"
            type="monotone"
            stroke="var(--color-purchase)"
            strokeWidth={2}
            dot={false}
        />
        </LineChart>
    </ChartContainer>
    </>
  )
}


export default MultiLineChart;