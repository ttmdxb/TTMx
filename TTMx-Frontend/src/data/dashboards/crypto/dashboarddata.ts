import svg3 from '/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg';
import svg5 from '/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg';
import svg6 from '/images/crypto-currencies/crypto-icons/cardano-ada-logo.svg';
import svg7 from '/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg';
import svg8 from '/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg';
import svg9 from '/images/crypto-currencies/crypto-icons/xrp-xrp-logo.svg';
import svg10 from '/images/crypto-currencies/crypto-icons/solana-sol-logo.svg';
import dogecoin from '/images/crypto-currencies/crypto-icons/dogecoin-doge-logo.svg';
import face4 from '/images/faces/4.jpg';
import face5 from '/images/faces/5.jpg';
import face11 from '/images/faces/11.jpg';
import face12 from '/images/faces/12.jpg';
import face14 from '/images/faces/14.jpg';
import face15 from '/images/faces/15.jpg';

const chartSeries = [{
  data: [105, 112, 80, 145, 98, 148, 110, 87, 102]
}]
const chartSeries1 = [{
  data: [112, 87, 105, 102, 145, 98, 110, 148, 80]
}]
const chartSeries2 = [{
  data: [145, 110, 112, 87, 148, 102, 98, 105, 80]
}]
const chartSeries3 = [{
  data: [105, 87, 148, 80, 110, 145, 112, 102, 98]
}]

interface ChartoptionsProps {
  color: string
  colors: string
}

const Chartoptions = ({ color, colors }: ChartoptionsProps) => ({
  chart: {
    height: 20,
    width: 100,
    type: 'area',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    },
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: [1.5],
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: [color],
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
            color: colors,
            opacity: 1
          },
          {
            offset: 75,
            color: colors,
            opacity: 1
          },
          {
            offset: 100,
            color: colors,
            opacity: 1
          }
        ]
      ]
    }
  },
})


interface CryptoCardType {
  imgSrc: string;
  value: string;
  percent: string;
  iconColor: string;
  icon: string;
  id: string;
  chartseries: any;
  chartoptions: object;
  type: string;
}

interface TransactionType {
  icon: string;
  title: string;
  date: string;
  amount: string;
  status: string;
  imgClass?: string;
}

interface transactionActivitiesType {
  avatar: string;
  name: string;
  currency: string;
  amount: string;
  date: string;
  time: string;
  status: string;
}

interface CryptoTableRowType {
  name: string;
  image: string;
  quantity: string;
  price: string;
  totalValue: string;
  change: string;
  changeColor: string;
  profitLoss: string;
  marketCap: string;
  rank: string;
  tdClass?: string;
}

export const cryptoCards: CryptoCardType[] = [
  {
    imgSrc: svg3,
    value: "21.235-BTC",
    percent: "4.21%",
    iconColor: "success",
    icon: "ti ti-trending-up",
    id: "btc-chart",
    chartseries: chartSeries,
    chartoptions: Chartoptions({ color: 'var(--primary-color)', colors: 'var(--primary01)' }),
    type: 'area'
  },
  {
    imgSrc: svg7,
    value: "164.75-ETH",
    percent: "2.21%",
    iconColor: "danger",
    icon: "ti ti-trending-down",
    id: "eth-chart",
    chartseries: chartSeries1,
    chartoptions: Chartoptions({ color: 'rgb(255, 73, 205)', colors: 'rgba(255, 73, 205, 0.1)' }),
    type: 'area'
  },
  {
    imgSrc: svg8,
    value: "31,421-USDT",
    percent: "12.43%",
    iconColor: "success",
    icon: "ti ti-trending-up",
    id: "tether-chart",
    chartseries: chartSeries2,
    chartoptions: Chartoptions({ color: 'rgb(50, 212, 132)', colors: 'rgba(50, 212, 132, 0.1)' }),
    type: 'area'
  },
  {
    imgSrc: svg5,
    value: "4,224-BNB",
    percent: "15.54%",
    iconColor: "danger",
    icon: "ti ti-trending-down",
    id: "bnb-chart",
    chartseries: chartSeries3,
    chartoptions: Chartoptions({ color: 'rgb(253, 175, 34)', colors: 'rgba(253, 175, 34, 0.1)' }),
    type: 'area'
  },
],
  cryptoseries = [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99],
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81],
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96],
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39],
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27],
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55],
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02],
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01],
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ],
  cryptooptions = {
    chart: {
      type: "candlestick",
      height: 400,
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: 'rgb(50, 212, 132)',
          downward: 'rgb(255, 103, 87)'
        },
      },
    },
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 3,
    },
    title: {
      align: "left",
    },
    xaxis: {
      type: "datetime",
      labels: {
        rotate: -90,
        style: {
          colors: "rgb(107 ,114 ,128)",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
        theme: "dark",
      },
      labels: {
        style: {
          colors: "rgb(107 ,114 ,128)",
          fontSize: "10px",
        },
        formatter: function (e: string) {
          return "$" + e
        }
      },
    },
  },
  transactions: TransactionType[] = [
    {
      icon: svg3,
      title: "Deposit",
      date: "2025-02-10 14:30",
      amount: "0.25 BTC",
      status: "Completed",
    },
    {
      icon: svg7,
      title: "Withdrawal",
      date: "2025-02-11 10:00",
      amount: "500 ETH",
      status: "Pending",
    },
    {
      icon: svg10,
      title: "Transfer",
      date: "2025-02-12 16:45",
      amount: "2,000 XRP",
      status: "Completed",
      imgClass: "invert-1"
    },
    {
      icon: svg3,
      title: "Deposit",
      date: "2025-02-13 09:30",
      amount: "1.5 BTC",
      status: "Failed",
    },
    {
      icon: svg8,
      title: "Withdrawal",
      date: "2025-02-14 13:20",
      amount: "1500 USDT",
      status: "Completed",
    },
    {
      icon: svg3,
      title: "Deposit",
      date: "2025-02-14 17:05",
      amount: "5.0 BTC",
      status: "Pending",
    },
  ],
  transactionActivities: transactionActivitiesType[] = [
    {
      avatar: face4,
      name: "Emiley Jackson",
      currency: "Bitcoin",
      amount: "0.12",
      date: "2025-02-10",
      time: "04:24PM",
      status: "Sent",
    },
    {
      avatar: face15,
      name: "Jackie Shraff",
      currency: "Etherium",
      amount: "9.20",
      date: "2025-02-11",
      time: "11:57PM",
      status: "Received",
    },
    {
      avatar: face11,
      name: "Json Taylor",
      currency: "Dash",
      amount: "830.9",
      date: "2025-02-12",
      time: "02:28AM",
      status: "Received",
    },
    {
      avatar: face5,
      name: "Jessica May",
      currency: "Euro",
      amount: "11.23",
      date: "2025-02-13",
      time: "10:08AM",
      status: "Processing",
    },
    {
      avatar: face14,
      name: "Leo Phillip",
      currency: "Bitcoin",
      amount: "0.56",
      date: "2025-02-12",
      time: "02:34PM",
      status: "Sent",
    },
    {
      avatar: face12,
      name: "Lieonel Marsi",
      currency: "Litecoin",
      amount: "125.65",
      date: "2025-02-14",
      time: "06:05PM",
      status: "Received",
    },
  ],
  cryptoStats = [
    {
      label: "Bitcoin value in USD",
      value: "$97,133.00",
      valueColor: "text-dark",
    },
    {
      label: "Price Change",
      value: "+883.00(0.91%) today",
      valueColor: "text-success",
      badge: {
        isbadge: true,
        text: "Increased",
        className: "bg-primary-transparent text-primary",
      },
    },
    {
      label: "Trade Value",
      value: "$34.64 billion",
      valueColor: "text-dark",
    },
    {
      label: "Market Rank",
      value: "#1",
      valueColor: "text-dark",
      badge: {
        isbadge: true,
        text: "3 Years",
        className: "bg-secondary-transparent",
      },
    },
    {
      label: "This Week High",
      value: "$97,253.24",
      valueColor: "text-success",
    },
    {
      label: "This Week Low",
      value: "$95,220.00",
      valueColor: "text-danger",
    },
    {
      label: "Market Dominance",
      value: "70%",
      valueColor: "text-dark",
    },
    {
      label: "Alltime High",
      value: "$109,358.01",
      valueColor: "text-info",
    },
  ],
  assetseries = [85, 75],
  assetoptions = {
    chart: {
      height: 170,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 5,
          size: '50%',
          background: '#000000',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '20px',
            fontFamily: "Poppins, sans-serif",
            offsetY: 0
          },
          value: {
            show: true,
            fontSize: '22px',
            color: undefined,
            offsetY: 12,
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            formatter: function (val: string) {
              return val + "%";
            }
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Balance',
            fontSize: '14px',
            fontWeight: 400,
            formatter: function () {
              return 254;
            }
          }
        }
      }
    },
    tooltip: {
      enabled: true,  // Ensure tooltips are enabled
      y: {
        formatter: function (val: string) {
          return val + '%'; // Format the tooltip value as percentage
        }
      }
    },
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        bottom: -10,
        top: -10
      }
    },
    colors: ["var(--primary-color)", "rgba(255, 73, 205, 1)"],
    labels: ['Funding', 'Trading'],
  },
  cryptoTableRows: CryptoTableRowType[] = [
    {
      name: "Bitcoin (BTC)",
      image: svg3,
      quantity: "2.5",
      price: "$29,472.60",
      totalValue: "$73,681.50",
      change: "+1.2%",
      changeColor: "bg-success",
      profitLoss: "+$5,800.00",
      marketCap: "$6.5 Billion",
      rank: "#1",
    },
    {
      name: "Ethereum (ETH)",
      image: svg7,
      quantity: "15",
      price: "$1,842.30",
      totalValue: "$27,634.50",
      change: "+0.9%",
      changeColor: "bg-success",
      profitLoss: "+$2,000.00",
      marketCap: "$2.2 Billion",
      rank: "#2",
    },
    {
      name: "Dogecoin (DOGE)",
      image: dogecoin,
      quantity: "100,000",
      price: "$0.075",
      totalValue: "$7,500.00",
      change: "+4.5%",
      changeColor: "bg-success",
      profitLoss: "+$320.00",
      marketCap: "$1.8 Billion",
      rank: "#9",
    },
    {
      name: "Tether (USDT)",
      image: svg8,
      quantity: "10,000",
      price: "$1.00",
      totalValue: "$10,000.00",
      change: "0.0%",
      changeColor: "bg-success",
      profitLoss: "$0.00",
      marketCap: "$25 Billion",
      rank: "#3",
    },
    {
      name: "Ripple (XRP)",
      image: svg9,
      quantity: "5,000",
      price: "$0.75",
      totalValue: "$3,750.00",
      change: "+2.5%",
      changeColor: "bg-success",
      profitLoss: "+$500.00",
      marketCap: "$1.5 Billion",
      rank: "#6",
    },
    {
      name: "Cardano (ADA)",
      image: svg6,
      quantity: "10,000",
      price: "$0.35",
      totalValue: "$3,500.00",
      change: "-0.8%",
      changeColor: "bg-danger",
      profitLoss: "-$100.00",
      marketCap: "$350 Million",
      rank: "#8",
      tdClass: 'border-bottom-0'
    },
  ],
  coindata: string[] = [
    "BTC",
    "ETH",
    "XRP",
    "DASH",
    "NEO",
    "LTC",
    "BSD",
  ],
  currencydata: string[] = [
    "USD",
    "AED",
    "AUD",
    "ARS",
    "AZN",
    "BGN",
    "BRL",
  ];
