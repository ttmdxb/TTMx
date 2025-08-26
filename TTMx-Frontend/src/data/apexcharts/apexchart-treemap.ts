
// Basic Treemap Chart
export const Treebasicseries = [
	{
		data: [
			{
				x: "New Delhi",
				y: 218
			},
			{
				x: "Kolkata",
				y: 149
			},
			{
				x: "Mumbai",
				y: 184
			},
			{
				x: "Ahmedabad",
				y: 55
			},
			{
				x: "Bangaluru",
				y: 84
			},
			{
				x: "Pune",
				y: 31
			},
			{
				x: "Chennai",
				y: 70
			},
			{
				x: "Jaipur",
				y: 30
			},
			{
				x: "Surat",
				y: 44
			},
			{
				x: "Hyderabad",
				y: 68
			},
			{
				x: "Lucknow",
				y: 28
			},
			{
				x: "Indore",
				y: 19
			},
			{
				x: "Kanpur",
				y: 29
			}
		]
	}
]
export const Treebasicoptions = {
	legend: {
		show: false
	},
	chart: {
		height: 350,
		type: "treemap",
		events: {
			mounted: (chart: { windowResizeHandler: () => void; }) => {
				chart.windowResizeHandler();
			}

		},
	},
	colors: ["#985ffd"],
	title: {
		text: "Basic Treemap",
		align: "left",
		style: {
			fontSize: "13px",
			fontWeight: "bold",
			color: "rgb(13,255,193)"
		},
	},
}

//Multi Dimensional Treemap Chart
export const Treemultiseries = [
	{
		// name: "Desktops",
		data: [
			{
				x: "ABC",
				y: 10
			},
			{
				x: "DEF",
				y: 60
			},
			{
				x: "XYZ",
				y: 41
			}
		]
	},
	{
		// name: "Mobile",
		data: [
			{
				x: "ABCD",
				y: 10
			},
			{
				x: "DEFG",
				y: 20
			},
			{
				x: "WXYZ",
				y: 51
			},
			{
				x: "PQR",
				y: 30
			},
			{
				x: "MNO",
				y: 20
			},
			{
				x: "CDE",
				y: 30
			}
		]
	}
]
export const Treemultioptions = {
	colors: ["#985ffd", "#ff49cd"],
	legend: {
		show: false
	},
	chart: {
		height: 350,
		type: "treemap",
		events: {
			mounted: (chart: { windowResizeHandler: () => void; }) => {
				chart.windowResizeHandler();
			}

		},
	},
	title: {
		text: "Multi-dimensional Treemap",
		align: "center",
		style: {
			fontSize: "13px",
			fontWeight: "bold",
			color: "#8c9097"
		},
	},
}

// Distributed Treemap Chart
export const Treedisseries = [
	{
		data: [
			{
				x: "New Delhi",
				y: 218
			},
			{
				x: "Kolkata",
				y: 149
			},
			{
				x: "Mumbai",
				y: 184
			},
			{
				x: "Ahmedabad",
				y: 55
			},
			{
				x: "Bangaluru",
				y: 84
			},
			{
				x: "Pune",
				y: 31
			},
			{
				x: "Chennai",
				y: 70
			},
			{
				x: "Jaipur",
				y: 30
			},
			{
				x: "Surat",
				y: 44
			},
			{
				x: "Hyderabad",
				y: 68
			},
			{
				x: "Lucknow",
				y: 28
			},
			{
				x: "Indore",
				y: 19
			},
			{
				x: "Kanpur",
				y: 29
			}
		]
	}
]
export const Treedisoptions = {
	legend: {
		show: false
	},
	chart: {
		height: 350,
		type: "treemap",
		events: {
			mounted: (chart: { windowResizeHandler: () => void; }) => {
				chart.windowResizeHandler();
			}

		},
	},
	title: {
		text: "Distibuted Treemap (different color for each cell)",
		align: "center",
		style: {
			fontSize: "13px",
			fontWeight: "bold",
			color: "#8c9097"
		},
	},
	colors: [
		'#985ffd', '#ff49cd', '#fdaf22', '#32d484', '#00c9ff', '#ff6757', 'rgba(53, 181, 170,1)', 'rgb(190, 43, 235)'
	],
	plotOptions: {
		treemap: {
			distributed: true,
			enableShades: false
		}
	}
}

// Treemap with color ranges
export const Treecolorseries = [
	{
		data: [
			{
				x: 'INTC',
				y: 1.2
			},
			{
				x: 'GS',
				y: 0.4
			},
			{
				x: 'CVX',
				y: -1.4
			},
			{
				x: 'GE',
				y: 2.7
			},
			{
				x: 'CAT',
				y: -0.3
			},
			{
				x: 'RTX',
				y: 5.1
			},
			{
				x: 'CSCO',
				y: -2.3
			},
			{
				x: 'JNJ',
				y: 2.1
			},
			{
				x: 'PG',
				y: 0.3
			},
			{
				x: 'TRV',
				y: 0.12
			},
			{
				x: 'MMM',
				y: -2.31
			},
			{
				x: 'NKE',
				y: 3.98
			},
			{
				x: 'IYT',
				y: 1.67
			}
		]
	}
]
export const Treecoloroptions = {
	legend: {
		show: false
	},
	chart: {
		height: 350,
		type: 'treemap'
	},
	title: {
		text: 'Treemap with Color scale',
		style: {
			fontSize: '13px',
			fontWeight: 'bold',
			color: '#8c9097'
		},
	},
	dataLabels: {
		enabled: true,
		style: {
			fontSize: '12px',
		},
		formatter: function (text: string, op: { value: number }): (string | number)[] {
			return [text, op.value];
		},
		offsetY: -4
	},
	plotOptions: {
		treemap: {
			enableShades: true,
			shadeIntensity: 0.5,
			reverseNegativeShade: true,
			colorScale: {
				ranges: [
					{
						from: -6,
						to: 0,
						color: '#985ffd'
					},
					{
						from: 0.001,
						to: 6,
						color: '#ff49cd'
					}
				]
			}
		}
	}
}


