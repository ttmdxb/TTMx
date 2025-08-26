
// Basic Heatmap Chart
type YRange = {
	min: number;
	max: number;
};

type DataPoint = {
	x: string;
	y: number;
};
function generateData(count: number, yrange: YRange): DataPoint[] {
	let i = 0;
	const series: DataPoint[] = [];

	while (i < count) {
		const x = "w" + (i + 1).toString();
		const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

		series.push({ x, y });
		i++;
	}
	return series;
}

export const Heatbseries = [{
	name: "Metric1",
	data: generateData(18, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric2",
	data: generateData(18, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric3",
	data: generateData(18, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric4",
	data: generateData(18, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric5",
	data: generateData(18, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric6",
	data: generateData(18, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric7",
	data: generateData(18, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric8",
	data: generateData(18, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric9",
	data: generateData(18, {
		min: 0,
		max: 90
	})
}
]
export const Heatboptions = {
	chart: {
		height: 350,
		type: "heatmap",
		events: {
			mounted: (chart: { windowResizeHandler: () => void; }) => {
				chart.windowResizeHandler();
			}
		},
	},
	dataLabels: {
		enabled: false
	},
	colors: ["#985ffd"],
	grid: {
		borderColor: "#f2f5f7",
	},
	title: {
		text: "HeatMap Chart (Single color)",
		align: "left",
		style: {
			fontSize: "13px",
			fontWeight: "bold",
			color: "#c7fff1"
		},
	},
	xaxis: {
		labels: {
			show: true,
			style: {
				colors: "#8c9097",
				fontSize: "11px",
				fontWeight: 600,
				cssClass: "apexcharts-xaxis-label",
			},
		}
	},
	yaxis: {
		labels: {
			show: true,
			style: {
				colors: "#8c9097",
				fontSize: "11px",
				fontWeight: 600,
				cssClass: "apexcharts-yaxis-label",
			},
		}
	}
}

//Multi Series Heatmap Chart
const data = [
	{
		name: "W1",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W2",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W3",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W4",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W5",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W6",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W7",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W8",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W9",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W10",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W11",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W12",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W13",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W14",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	},
	{
		name: "W15",
		data: generateData(8, {
			min: 0,
			max: 90
		})
	}
];
data.reverse();
const colors = ['#985ffd', '#ff49cd', '#fdaf22', '#32d484', '#00c9ff', '#ff6757', 'rgba(53, 181, 170,1)', 'rgb(190, 43, 235)', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29']
colors.reverse();

export const Heatmultiseries = data
export const Heatmultioptions = {
	chart: {
		height: 350,
		type: "heatmap",
		events: {
			mounted: (chart: { windowResizeHandler: () => void; }) => {
				chart.windowResizeHandler();
			}
		},
	},
	dataLabels: {
		enabled: false
	},
	colors: colors,
	xaxis: {
		type: "category",
		categories: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
		labels: {
			show: true,
			style: {
				colors: "#8c9097",
				fontSize: "11px",
				fontWeight: 600,
				cssClass: "apexcharts-xaxis-label",
			},
		}
	},
	title: {
		text: "HeatMap Chart (Different color shades for each series)",
		align: "left",
		style: {
			fontSize: "13px",
			fontWeight: "bold",
			color: "#8c9097"
		},
	},
	grid: {
		padding: {
			right: 20
		},
		borderColor: "#f2f5f7",
	},
	yaxis: {
		labels: {
			show: true,
			style: {
				colors: "#8c9097",
				fontSize: "11px",
				fontWeight: 600,
				cssClass: "apexcharts-yaxis-label",
			},
		}
	}
}

// Color Range Heatmap Chart
export const Heatrangeseries = [{
	name: "Jan",
	data: generateData(20, {
		min: -30,
		max: 55
	})
},
{
	name: "Feb",
	data: generateData(20, {
		min: -30,
		max: 55
	})
},
{
	name: "Mar",
	data: generateData(20, {
		min: -30,
		max: 55
	})
},
{
	name: "Apr",
	data: generateData(20, {
		min: -30,
		max: 55
	})
},
{
	name: "May",
	data: generateData(20, {
		min: -30,
		max: 55
	})
},
{
	name: "Jun",
	data: generateData(20, {
		min: -30,
		max: 55
	})
},
{
	name: "Jul",
	data: generateData(20, {
		min: -30,
		max: 55
	})
},
{
	name: "Aug",
	data: generateData(20, {
		min: -30,
		max: 55
	})
},
{
	name: "Sep",
	data: generateData(20, {
		min: -30,
		max: 55
	})
}
]
export const Heatrangeoptions = {
	chart: {
		height: 350,
		type: "heatmap",
		events: {
			mounted: (chart: { windowResizeHandler: () => void; }) => {
				chart.windowResizeHandler();
			}
		},
	},
	plotOptions: {
		heatmap: {
			shadeIntensity: 0.5,
			radius: 0,
			useFillColorAsStroke: true,
			colorScale: {
				ranges: [{
					from: -30,
					to: 5,
					name: 'low',
					color: '#985ffd'
				},
				{
					from: 6,
					to: 20,
					name: 'medium',
					color: '#ff49cd'
				},
				{
					from: 21,
					to: 45,
					name: 'high',
					color: '#fdaf22'
				},
				{
					from: 46,
					to: 55,
					name: 'extreme',
					color: '#32d484'
				}
				]
			}
		}
	},
	dataLabels: {
		enabled: false
	},
	grid: {
		borderColor: "",
	},
	stroke: {
		width: 1
	},
	title: {
		text: "HeatMap Chart with Color Range",
		align: "left",
		style: {
			fontSize: "13px",
			fontWeight: "bold",
			color: "#8c9097"
		},
	},
	xaxis: {
		labels: {
			show: true,
			style: {
				colors: "#8c9097",
				fontSize: "11px",
				fontWeight: 600,
				cssClass: "apexcharts-xaxis-label",
			},
		}
	},
	yaxis: {
		labels: {
			show: true,
			style: {
				colors: "#8c9097",
				fontSize: "11px",
				fontWeight: 600,
				cssClass: "apexcharts-yaxis-label",
			},
		}
	}
}

// Heatmap Range Without Shades
export const Heatshadeseries = [{
	name: "Metric1",
	data: generateData(20, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric2",
	data: generateData(20, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric3",
	data: generateData(20, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric4",
	data: generateData(20, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric5",
	data: generateData(20, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric6",
	data: generateData(20, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric7",
	data: generateData(20, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric8",
	data: generateData(20, {
		min: 0,
		max: 90
	})
},
{
	name: "Metric8",
	data: generateData(20, {
		min: 0,
		max: 90
	})
}
]
export const Heatshadeoptions = {
	chart: {
		height: 350,
		type: "heatmap",
		events: {
			mounted: (chart: { windowResizeHandler: () => void; }) => {
				chart.windowResizeHandler();
			}
		},
	},
	stroke: {
		width: 0
	},
	plotOptions: {
		heatmap: {
			radius: 30,
			enableShades: false,
			colorScale: {
				ranges: [{
					from: 0,
					to: 50,
					color: '#985ffd'
				},
				{
					from: 51,
					to: 100,
					color: '#ff49cd'
				},
				],
			},

		}
	},
	grid: {
		borderColor: "#f2f5f7",
	},
	dataLabels: {
		enabled: true,
		style: {
			colors: ["#fff"]
		}
	},
	xaxis: {
		type: "category",
		labels: {
			show: true,
			style: {
				colors: "#8c9097",
				fontSize: "11px",
				fontWeight: 600,
				cssClass: "apexcharts-xaxis-label",
			},
		}
	},
	yaxis: {
		labels: {
			show: true,
			style: {
				colors: "#8c9097",
				fontSize: "11px",
				fontWeight: 600,
				cssClass: "apexcharts-yaxis-label",
			},
		}
	},
	title: {
		text: "Rounded (Range without Shades)",
		align: "left",
		style: {
			fontSize: "13px",
			fontWeight: "bold",
			color: "#8c9097"
		},
	},
}
