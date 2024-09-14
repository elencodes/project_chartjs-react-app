import { Chart } from "react-google-charts";

export function ChartPie() {
	return (
		<Chart
			chartType="PieChart"
			data={[
				["Task", "Hours per Day"],
				["JavaScript", 6],
				["SCSS", 8],
				["HTML", 8],
				["JSON", 4],
				["React", 3],
			]}
			options={{
				title: "Toп 5 используемых технологий в обучении",
			}}
			width="100%"
			height="400px"
		/>
	)
}