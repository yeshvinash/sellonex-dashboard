import ProductIcon from "../../assets/images/icons/product-icon.png";
import SVGIcons from "./SVGIcons";

export const options = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last 7 Days", value: "last7Days" },
];

export const selectOptions = [
  { label: "This Month", value: "This Month" },
  { label: "Last Month", value: "Last Month" },
];

export const targetData = [
  {
    name: "New User",
    gainNum: "125/",
    totalNum: "450",
    percent: "57%",
    className: "green",
  },
  {
    name: "Clicks",
    gainNum: "1.15/",
    totalNum: "6.000",
    percent: "29%",
    className: "yellow",
  },
];

export const ProductData = [
  {
    image: ProductIcon,
    name: "Louis Vuitton",
    number: "$112.4k",
  },
  {
    image: ProductIcon,
    name: "Louis Vuitton1",
    number: "$112.4k",
  },
  {
    image: ProductIcon,
    name: "Louis Vuitton2",
    number: "$112.4k",
  },
  {
    image: ProductIcon,
    name: "Louis Vuitton3",
    number: "$112.4k",
  },
  {
    image: ProductIcon,
    name: "Louis Vuitton4",
    number: "$112.4k",
  },
];

export const DeviceData = [
  {
    devicetype: "Mobile",
    numberRatio: "145.12",
    percentRatio: "70%",
    deviceInnerData: [
      {
        devicename: "Andoid",
        deviceScale: "1.458",
        color: "green",
      },
      {
        devicename: "ios",
        deviceScale: "2.548",
        color: "blue",
      },
    ],
  },
  {
    devicetype: "Desktop",
    numberRatio: "962.12",
    percentRatio: "90%",
    deviceInnerData: [
      {
        devicename: "Windows",
        deviceScale: "1.458",
        color: "yellow",
      },
      {
        devicename: "Mac",
        deviceScale: "2.548",
        color: "red",
      },
    ],
  },
];

export const CountryData = [
  {
    number: "12.5k",
    name: "Total active users",
  },
  {
    number: "124.45k",
    name: "Total visitors",
  },
];
