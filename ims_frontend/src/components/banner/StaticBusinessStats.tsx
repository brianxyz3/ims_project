
const stats = [
    {statTitle: "Uptime Guaranted", statValue: "99.9%"},
    {statTitle: "Warehouses", statValue: "500+"},
    {statTitle: "Items Tracked", statValue: "10M+"},
    {statTitle: "Active Users", statValue: "25k+"},
]

const StaticBusinessStats = () => {
  return (
    <section className="w-full px-4 md:px-10 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 md:p-4">

            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col justify-between gap-2 rounded-xl p-6 bg-foreground/10 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-foreground text-sm font-medium uppercase tracking-wide">{stat.statTitle}</p>
                    <p className="text-primary tracking-tight text-3xl md:text-4xl font-black">{stat.statValue}</p>
                </div>
            ))}
        </div>
    </section>

  )
}

export default StaticBusinessStats