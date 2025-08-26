import apple from '/images/media/apps/apple.png';
import google from '/images/media/apps/google.png';
import microsoft from '/images/media/apps/microsoft.png';
import amazon from '/images/media/apps/amazon.png';
import tesla from '/images/media/apps/tesla.png';
import meta from '/images/media/apps/meta.png';
import nvidia from '/images/media/apps/nvidia.png';
import alibaba from '/images/media/apps/alibaba.png';

export const StockSeries = [{
  name: 'Value',
  data: [61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 62, 51, 35, 41]
}]
export const StockOptions = {
  chart: {
    type: 'area',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['rgb(12, 215, 177)'],
}

//Portfolio Analysis
export const PortfolioSeries = [{
  'name': 'Invested',
  data: [
    [1727359600000, 30.95],
    [1727446000000, 31.34],
    [1727532400000, 31.18],
    [1727618800000, 31.05],
    [1727878000000, 31.00],
    [1727964400000, 30.95],
    [1728050800000, 31.24],
    [1728137200000, 31.29],
    [1728223600000, 31.85],
    [1728482800000, 31.86],
    [1728569200000, 32.28],
    [1728655600000, 32.10],
    [1728742000000, 32.65],
    [1728828400000, 32.21],
    [1729087600000, 32.35],
    [1729174000000, 32.44],
    [1729260400000, 32.46],
    [1729346800000, 32.86],
    [1729433200000, 32.75],
    [1729778800000, 32.54],
    [1729865200000, 32.33],
    [1729951600000, 32.97],
    [1730038000000, 33.41],
    [1730297200000, 33.27],
    [1730383600000, 33.27],
    [1730470000000, 32.89],
    [1730556400000, 33.10],
    [1730642800000, 33.73],
    [1730902000000, 33.22],
    [1730988400000, 31.99],
    [1731074800000, 32.41],
    [1731161200000, 33.05],
    [1731247600000, 33.64],
    [1731506800000, 33.56],
    [1731593200000, 34.22],
    [1731679600000, 33.77],
    [1731766000000, 34.17],
    [1731852400000, 33.82],
    [1732111600000, 34.51],
    [1732198000000, 33.16],
    [1732284400000, 33.56],
    [1732370800000, 33.71],
    [1732457200000, 33.81],
    [1732712800000, 34.40],
    [1732799200000, 34.63],
    [1732885600000, 34.46],
    [1732972000000, 34.48],
    [1733058400000, 34.31],
    [1733317600000, 34.70],
    [1733404000000, 34.31],
    [1733490400000, 33.46],
    [1733576800000, 33.59],
    [1733922400000, 33.22],
    [1734008800000, 32.61],
    [1734095200000, 33.01],
    [1734181600000, 33.55],
    [1734268000000, 33.18],
    [1734527200000, 32.84],
    [1734613600000, 33.84],
    [1734700000000, 33.39],
    [1734786400000, 32.91],
    [1734872800000, 33.06],
    [1735132000000, 32.62],
    [1735218400000, 32.40],
    [1735304800000, 33.13],
    [1735391200000, 33.26],
    [1735477600000, 33.58],
    [1735736800000, 33.55],
    [1735823200000, 33.77],
    [1735909600000, 33.76],
    [1735996000000, 33.32],
    [1736082400000, 32.61],
    [1736341600000, 32.52],
    [1736428000000, 32.67],
    [1736514400000, 32.52],
    [1736600800000, 31.92],
    [1736687200000, 32.20],
    [1736946400000, 32.23],
    [1737032800000, 32.33],
    [1737119200000, 32.36],
    [1737205600000, 32.01],
    [1737292000000, 31.31],
    [1737551200000, 32.01],
    [1737637600000, 32.01],
    [1737724000000, 32.18],
    [1737810400000, 31.54],
    [1737896800000, 31.60],
    [1738242400000, 32.05],
    [1738328800000, 31.29],
    [1738415200000, 31.05],
    [1738501600000, 29.82],
    [1738760800000, 30.31],
    [1738847200000, 30.70],
    [1738933600000, 31.69],
    [1739020000000, 31.32],
    [1739106400000, 31.65],
    [1739365600000, 31.13],
    [1739452000000, 31.77],
    [1739538400000, 31.79],
    [1739624800000, 31.67],
    [1739711200000, 32.39],
    [1739970400000, 32.63],
    [1740056800000, 32.89],
    [1740143200000, 31.99],
    [1740229600000, 31.23],
    [1740316000000, 31.57],
    [1740575200000, 30.84],
    [1740661600000, 31.07],
    [1740748000000, 31.41],
    [1740834400000, 31.17],
    [1740920800000, 32.37],
    [1741180000000, 32.19],
    [1741266400000, 32.51],
    [1741439200000, 32.53],
    [1741525600000, 31.37],
    [1741784800000, 30.43],
    [1741871200000, 30.44],
    [1741957600000, 30.20],
    [1742044000000, 30.14],
    [1742130400000, 30.65],
    [1742389600000, 30.40],
    [1742476000000, 30.65],
    [1742562400000, 31.43],
    [1742648800000, 31.89],
    [1742735200000, 31.38],
    [1742994400000, 30.64],
    [1743080800000, 30.02],
    [1743167200000, 30.33],
    [1743253600000, 30.95],
    [1743340000000, 31.89],
    [1743599200000, 31.01],
    [1743685600000, 30.88],
    [1743772000000, 30.69],
    [1743858400000, 30.58],
    [1743944800000, 32.02],
    [1744204000000, 32.14],
    [1744290400000, 32.37],
    [1744376800000, 32.51],
    [1744463200000, 32.65],
    [1744549600000, 32.64],
    [1744808800000, 32.27],
    [1744895200000, 32.10],
    [1744981600000, 32.91],
    [1745068000000, 33.65],
    [1745154400000, 33.80],
    [1745413600000, 33.92],
    [1745500000000, 33.75],
    [1745586400000, 33.84],
    [1745672800000, 33.50],
    [1745759200000, 32.26],
    [1746018400000, 32.32],
    [1746104800000, 32.06],
    [1746191200000, 31.96],
    [1746277600000, 31.46],
    [1746364000000, 31.27],
    [1746709600000, 31.43],
    [1746796000000, 32.26],
    [1746882400000, 32.79],
    [1746968800000, 32.46],
    [1747228000000, 32.13],
    [1747314400000, 32.43],
    [1747400800000, 32.42],
    [1747487200000, 32.81],
    [1747573600000, 33.34],
    [1747832800000, 33.41],
    [1747919200000, 32.57],
    [1748005600000, 33.12],
    [1748092000000, 34.53],
    [1748178400000, 33.83],
    [1748437600000, 33.41],
    [1748524000000, 32.90],
    [1748610400000, 32.53],
    [1748696800000, 32.80],
    [1748783200000, 32.44],
    [1749042400000, 32.62],
    [1749128800000, 32.57],
    [1749215200000, 32.60],
    [1749301600000, 32.68],
    [1749388000000, 32.47],
    [1749647200000, 32.23],
    [1749733600000, 31.68],
    [1749820000000, 31.51],
    [1749906400000, 31.78],
    [1749992800000, 31.94],
    [1750252000000, 32.33],
    [1750338400000, 33.24],
    [1750424800000, 33.44],
    [1750511200000, 33.48],
    [1750597600000, 33.24],
    [1750856800000, 33.49],
    [1750943200000, 33.31],
    [1751029600000, 33.36],
    [1751116000000, 33.40],
    [1751202400000, 34.01],
    [1751638000000, 34.02],
    [1751724400000, 34.36],
    [1751810800000, 34.39],
    [1752070000000, 34.24],
    [1752156400000, 34.39],
    [1752242800000, 33.47],
    [1752329200000, 32.98],
    [1752415600000, 32.90],
    [1752674800000, 32.70],
    [1752761200000, 32.54],
    [1752847600000, 32.23],
    [1752934000000, 32.64],
    [1753020400000, 32.65],
    [1753279600000, 32.92],
    [1753366000000, 32.64],
    [1753452400000, 32.84],
    [1753625200000, 33.40],
    [1753884400000, 33.30],
    [1753970800000, 33.18],
    [1754057200000, 33.88],
    [1754143600000, 34.09],
    [1754230000000, 34.61],
    [1754489200000, 34.70],
    [1754575600000, 35.30],
    [1754662000000, 35.40],
    [1754748400000, 35.14],
    [1754834800000, 35.48],
    [1755094000000, 35.75],
    [1755180400000, 35.54],
    [1755266800000, 35.96],
    [1755353200000, 35.53],
    [1755439600000, 37.56],
    [1755698800000, 37.42],
    [1755785200000, 37.49],
    [1755871600000, 38.09],
    [1755958000000, 37.87],
    [1756044400000, 37.71],
    [1756303600000, 37.53],
    [1756476400000, 37.55],
    [1756562800000, 37.30],
    [1756649200000, 36.90],
    [1756908400000, 37.68],
    [1757081200000, 38.34],
    [1757167600000, 37.75],
    [1757254000000, 38.13],
    [1757513200000, 37.94],
    [1757599600000, 38.14],
    [1757686000000, 38.66],
    [1757772400000, 38.62],
    [1757858800000, 38.09],
    [1758118000000, 38.16],
    [1758204400000, 38.15],
    [1758290800000, 37.88],
    [1758377200000, 37.73],
    [1758463600000, 37.98],
    [1758809200000, 37.95],
    [1758895600000, 38.25],
    [1758982000000, 38.10],
    [1759068400000, 38.32],
    [1759327600000, 38.24],
    [1759414000000, 38.52],
    [1759500400000, 37.94],
    [1759586800000, 37.83],
    [1759673200000, 38.34],
    [1759932400000, 38.10],
    [1760018800000, 38.51],
    [1760105200000, 38.40],
    [1760191600000, 38.07],
    [1760278000000, 39.12],
    [1760537200000, 38.64],
    [1760623600000, 38.89],
    [1760710000000, 38.81],
    [1760796400000, 38.61],
    [1760882800000, 38.63],
    [1761228400000, 38.99],
    [1761314800000, 38.77],
    [1761401200000, 38.34],
    [1761487600000, 38.55],
    [1761746800000, 38.11],
    [1761833200000, 38.59],
    [1761919600000, 39.60],
  ]
}]
export const PortfolioOptions = {
  chart: {
    id: 'area-datetime',
    type: 'area',
    height: 382,
    zoom: {
      autoScaleYaxis: true
    },
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 7,
      left: 0,
      blur: 1,
      color: ["var(--primary-color)"],
      opacity: 0.1,
    },
  },
  grid: {
    borderColor: '#f3f3f3',
    strokeDashArray: 3
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  xaxis: {
    type: 'datetime',
    min: new Date('02 Feb 2025').getTime(),
    tickAmount: 6,
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  },
  colors: ["var(--primary-color)"],
  stroke: {
    width: [1.5],
    curve: ['smooth']
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: "var(--primary01)",
            opacity: 1
          },
          {
            offset: 75,
            color: "var(--primary01)",
            opacity: 1
          },
          {
            offset: 100,
            color: "var(--primary01)",
            opacity: 1
          }
        ]
      ]
    }
  },
}

interface StockDataItemType {
  id: number;
  company: string;
  imgSrc: any;
  title: string;
  subtitle: string;
  percent: string;
  percentColor: string;
  value: string;
  chartId: string;
  chartOptions: typeof StockOptions;
  chartSeries: typeof StockSeries;
}

interface WatchlistDataItemType {
  id: number;
  name: string;
  symbol: string;
  price: string;
  change: string;
  changeType: string;
  image: string;
  imageClass: boolean;
}

interface TrendingDataItemType {
  id: number;
  name: string;
  icon: string;
  iconColor: string;
  value: string;
  percentChange: string;
  amountChange: string;
}

interface RecentStocksItemType {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  valueChange: string;
  progressBarWidth: string;
  progressColor: string;
}

interface StockTableItemType {
  id: number;
  name: string;
  symbol: string;
  price: string;
  date: string;
  marketCap: string;
  change: string;
  volume: string;
  logo: any;
}

export const StockData: StockDataItemType[] = [
  {
    id: 1,
    company: "apple",
    imgSrc: apple,
    title: "Apple",
    subtitle: "AAPL",
    percent: "+1.50",
    percentColor: "success",
    value: "244.60 USD",
    chartId: "apple-stock-chart",
    chartOptions: StockOptions,
    chartSeries: StockSeries,
  },
  {
    id: 2,
    company: "google",
    imgSrc: google,
    title: "Alphabet",
    subtitle: "GOOGL",
    percent: "-5.25",
    percentColor: "danger",
    value: "185.23 USD",
    chartId: "alphabet-stock-chart",
    chartOptions: StockOptions,
    chartSeries: StockSeries,
  },
  {
    id: 3,
    company: "microsoft",
    imgSrc: microsoft,
    title: "Microsoft Corp",
    subtitle: "MSFT",
    percent: "+2.30%",
    percentColor: "success",
    value: "408.43 USD",
    chartId: "microsoft-stock-chart",
    chartOptions: StockOptions,
    chartSeries: StockSeries,
  },
  {
    id: 4,
    company: "amazon",
    imgSrc: amazon,
    title: "Amazon.com",
    subtitle: "AMZN",
    percent: "-10.50%",
    percentColor: "danger",
    value: "228.68 USD",
    chartId: "amazon-stock-chart",
    chartOptions: StockOptions,
    chartSeries: StockSeries,
  },
  {
    id: 5,
    company: "tesla",
    imgSrc: tesla,
    title: "Tesla Inc",
    subtitle: "TSLA",
    percent: "+8.00%",
    percentColor: "success",
    value: "355.84 USD",
    chartId: "tesla-stock-chart",
    chartOptions: StockOptions,
    chartSeries: StockSeries,
  },
  {
    id: 6,
    company: "meta",
    imgSrc: meta,
    title: "Meta Inc.",
    subtitle: "META",
    percent: "-3.20%",
    percentColor: "danger",
    value: "736.67 USD",
    chartId: "meta-stock-chart",
    chartOptions: StockOptions,
    chartSeries: StockSeries,
  },
  {
    id: 7,
    company: "nvidia",
    imgSrc: nvidia,
    title: "NVIDIA Corp",
    subtitle: "NVDA",
    percent: "+5.75%",
    percentColor: "success",
    value: "138.85 USD",
    chartId: "nvidia-stock-chart",
    chartOptions: StockOptions,
    chartSeries: StockSeries,
  }
],
  //  My Watchlist
  Watchlistdata: WatchlistDataItemType[] = [
    {
      id: 1,
      name: "Apple Inc",
      symbol: "AAPL",
      price: "$189.32",
      change: "-0.78%",
      changeType: "danger",
      image: apple,
      imageClass: true
    },
    {
      id: 2,
      name: "Tesla Inc",
      symbol: "TSLA",
      price: "$342.15",
      change: "+1.45%",
      changeType: "success",
      image: tesla,
      imageClass: true
    },
    {
      id: 3,
      name: "Microsoft Corp",
      symbol: "MSFT",
      price: "$408.97",
      change: "+0.62%",
      changeType: "success",
      image: microsoft,
      imageClass: false
    },
    {
      id: 4,
      name: "Amazon.com Inc",
      symbol: "AMZN",
      price: "$156.48",
      change: "-0.23%",
      changeType: "danger",
      image: amazon,
      imageClass: false
    },
    {
      id: 5,
      name: "NVIDIA Corp",
      symbol: "NVDA",
      price: "$732.20",
      change: "+2.14%",
      changeType: "success",
      image: nvidia,
      imageClass: false
    },
    {
      id: 7,
      name: "Meta Platforms Inc",
      symbol: "META",
      price: "$678.56",
      change: "-1.35%",
      changeType: "danger",
      image: meta,
      imageClass: false
    },
    {
      id: 7,
      name: "Alphabet Inc",
      symbol: "GOOGL",
      price: "$138.75",
      change: "+0.89%",
      changeType: "success",
      image: google,
      imageClass: false
    },
    {
      id: 8,
      name: "Alibaba Group",
      symbol: "BABA",
      price: "$104.23",
      change: "-0.47%",
      changeType: "danger",
      image: alibaba,
      imageClass: false
    }
  ],
  //Trending Stocks 
  Trendingdata: TrendingDataItemType[] = [
    {
      id: 1,
      name: "Apple",
      icon: "bi-apple",
      iconColor: "muted",
      value: "$12,289.44",
      percentChange: "0.14%",
      amountChange: "+$1,780.80"
    },
    {
      id: 2,
      name: "Bitcoin",
      icon: "bi-currency-bitcoin",
      iconColor: "warning",
      value: "$58,151.02",
      percentChange: "2.14%",
      amountChange: "+$5,745.62"
    },
    {
      id: 3,
      name: "Tesla",
      icon: "bi-card-list",
      iconColor: "success",
      value: "$14,452.36",
      percentChange: "4.02%",
      amountChange: "+$4,125.63"
    },
    {
      id: 4,
      name: "Amazon",
      icon: "bi-gift",
      iconColor: "primary",
      value: "$63,251.11",
      percentChange: "5.14%",
      amountChange: "+$936.30"
    },
    {
      id: 5,
      name: "Aliexpress",
      icon: "bi-truck",
      iconColor: "danger",
      value: "$5,401.50",
      percentChange: "3.32%",
      amountChange: "+$4,360.65"
    },
    {
      id: 6,
      name: "Samsung",
      icon: "bi-phone",
      iconColor: "secondary",
      value: "$10,732.12",
      percentChange: "1.24%",
      amountChange: "+$3,221.29"
    }
  ],
  // Recent Activities
  Recentstocks: RecentStocksItemType[] = [
    {
      id: 1,
      name: "Apple Inc",
      symbol: "AAPL",
      logo: apple,
      valueChange: "+$5,000",
      progressBarWidth: "85",
      progressColor: 'primary'
    },
    {
      id: 2,
      name: "Microsoft Corp",
      symbol: "MSFT",
      logo: microsoft,
      valueChange: "+$11,246",
      progressBarWidth: "80",
      progressColor: 'secondary'
    },
    {
      id: 3,
      name: "NVIDIA Corp",
      symbol: "NVDA",
      logo: nvidia,
      valueChange: "+$1,566",
      progressBarWidth: "50",
      progressColor: 'success'
    },
    {
      id: 4,
      name: "Amazon.com Inc",
      symbol: "AMZN",
      logo: amazon,
      valueChange: "$23,855",
      progressBarWidth: "60",
      progressColor: 'warning'
    },
    {
      id: 5,
      name: "Alphabet Inc",
      symbol: "GOOGL",
      logo: google,
      valueChange: "+$6,274",
      progressBarWidth: "70",
      progressColor: 'info'
    },
    {
      id: 6,
      name: "Tesla Inc",
      symbol: "TSLA",
      logo: tesla,
      valueChange: "+$8,643",
      progressBarWidth: "50",
      progressColor: 'danger'
    },
  ],
  // My Stocks
  StockTable: StockTableItemType[] = [
    {
      id: 1,
      name: "Apple Inc",
      symbol: "AAPL",
      price: "$244.60",
      date: "Jan 15, 2025",
      marketCap: "2.5 Trillion USD",
      change: "+3.51%",
      volume: "18.5M",
      logo: apple,
    },
    {
      id: 2,
      name: "NVIDIA Corp",
      symbol: "NVDA",
      price: "$138.85",
      date: "Feb 10, 2025",
      marketCap: "1.1 Trillion USD",
      change: "-3.51%",
      volume: "20.2M",
      logo: nvidia,
    },
    {
      id: 3,
      name: "Amazon.com Inc",
      symbol: "AMZN",
      price: "$228.68",
      date: "Nov 5, 2024",
      marketCap: "1.7 Trillion USD",
      change: "+0.72%",
      volume: "30.3M",
      logo: amazon,
    },
    {
      id: 4,
      name: "Microsoft Corp",
      symbol: "MSFT",
      price: "$408.43",
      date: "Aug 20, 2024",
      marketCap: "3.0 Trillion USD",
      change: "-1.11%",
      volume: "25.6M",
      logo: microsoft,
    },
    {
      id: 5,
      name: "Alphabet Inc",
      symbol: "GOOGL",
      price: "$185.23",
      date: "Dec 3, 2024",
      marketCap: "1.8 Trillion USD",
      change: "+0.96%",
      volume: "15.7M",
      logo: google,
    },
    {
      id: 6,
      name: "Tesla Inc",
      symbol: "TSLA",
      price: "$355.84",
      date: "Jan 10, 2025",
      marketCap: "710 Billion USD",
      change: "-0.06%",
      volume: "22.4M",
      logo: tesla,
    },
  ];

