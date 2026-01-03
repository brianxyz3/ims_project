import { AnalysisCard } from "./AnalysisCard"
import Graph from "./Graph"
import { DashboardCard } from "./DashboardCard"
import HorizontalBarChart from "./HorizontalBarChart"
import PieChart from "./PieChart"
import MultiLineChart from "./MultiLineChart"


const graphData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
]

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]


const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
      
      <div className="order-2 md:-order-1 col-span-6 grid grid-cols-1 md:grid-cols-10 gap-4 overflow-hidden">
        <div className="md:col-span-5">
          <AnalysisCard description="Showing total visitors for the last 6 months" title="Sales Trend" total="$100000" trend="up" trendValue={5.3}>
            <Graph data={graphData} />
          </AnalysisCard>
        </div>
        <div className="md:col-span-5">
          <AnalysisCard description="Showing total visitors for the last 6 months" title="Sales Trend" total="$100000" trend="up" trendValue={5.3}>
            <MultiLineChart />
          </AnalysisCard>
        </div>
        
        <div className="hidden md:block md:col-span-6">
          <PieChart />
        </div>

        <div className="md:col-span-4">
          <div className="h-18 w-full mb-4 rounded-xl border border-border/50 bg-linear-to-br from-foreground/0 to-foreground/15 hover:shadow-lg hover:border-border/80 hover:transition-all hover:duration-200 p-2">
            <h3 className="text-xl font-semibold text-foreground">Current PnL</h3>
            <p className="font-bold text-green-600">20000</p>
          </div>
          <AnalysisCard description="Showing total visitors for the last 6 months" title="Customer Growth" total="1500" trend="up" trendValue={8.1}>
            <HorizontalBarChart data={chartData} />
          </AnalysisCard>
        </div>
      </div>


      <div className="md:col-span-2 flex flex-col justify-start gap-6">
        <   DashboardCard title="Total Sales" value="$25,000" analysis={5} trend="up" />
        <   DashboardCard title="New Customers" value="150" analysis={10} trend="up" />
        <   DashboardCard title="Pending Orders" value="45" analysis={-3} trend="down" />
        <   DashboardCard title="Support Tickets" value="12" analysis={2} trend="up" />
      </div>
    </div>
  )
}

export default DashboardGrid