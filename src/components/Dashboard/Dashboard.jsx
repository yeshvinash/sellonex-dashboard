import React, { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import {
  CountriesCustomerDeviceWrap,
  DashboardMainLeftWrap,
  DashboardMainRightWrap,
  DashboardMainWrap,
  LabelWrap,
  ResponsiveMediaQuery,
  RevenueSalesWrap,
  RevenueSourceSliderWrap,
  TitleWrap,
  TransactionsTargetWrap,
} from "./DashboardStyledComponent";
import ProductTable from "../TransactionsTable/TransactionsTable";
import SVGIcons from "../Data/SVGIcons";
import RevenueSourcesSlider from "../RevenueSourcesSlider/RevenueSourcesSlider";
import AreaChart from "../LineChart/LineChart";
import User from "../../assets/images/icons/user.svg";
import MapImg from "../../assets/images/cover/map.png";
import SalesChart from "../BarChart/BarChart";
import {
  CountryData,
  DeviceData,
  ProductData,
  targetData,
  options,
  selectOptions,
} from "../Data/Constant";

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState("label");

  const handleSelectChange = (value) => {
    setSelectedUser(value);
    console.log("Selected:", value);
  };
  return (
    <ResponsiveMediaQuery>
      <DashboardMainWrap>
        <DashboardMainLeftWrap>
          <RevenueSalesWrap>
            <div className="card-bg">
              <TitleWrap className="d-align-between">
                <h6 className="fw-300">Total Revenue</h6>
                <CustomSelect
                  options={selectOptions}
                  defaultValue="This Month"
                  onChange={handleSelectChange}
                />
              </TitleWrap>
              <div className="revenue-number-wrap">
                <div className="d-align">
                  <h4 className="h4">$ 254,489.25</h4>
                  <LabelWrap className="green">
                    <span>3.48%</span>
                    <span className="">{SVGIcons.Revenue}</span>
                  </LabelWrap>
                </div>
                <p className="fw-400 text-light-gray">
                  Gained <span className="text-light-green">$4571.78</span> this
                  Month!
                </p>
              </div>
              <RevenueSourceSliderWrap>
                <div className="d-align-between slider-title-wrap">
                  <span className="title">Revenue Sources</span>
                  <div className="slider-arrow-wrap">
                    <div className="js-prev">{SVGIcons.LeftArrow}</div>
                    <div className="js-next">{SVGIcons.RightArrow}</div>
                  </div>
                </div>
                <RevenueSourcesSlider />
              </RevenueSourceSliderWrap>
            </div>
            <div className="card-bg">
              <TitleWrap className="d-align-between">
                <h6 className="fw-300">Sales Funnel</h6>
                <CustomSelect
                  options={selectOptions}
                  defaultValue="This Month"
                  onChange={handleSelectChange}
                />
              </TitleWrap>
              <AreaChart />
            </div>
          </RevenueSalesWrap>
          <CountriesCustomerDeviceWrap>
            <div className="country-wrap card-bg">
              <div className="countryleft-wrap">
                <TitleWrap className="d-align-between">
                  <h6 className="fw-300">Customers Countries</h6>
                </TitleWrap>
                <div className="country-content-wrap">
                  {CountryData.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="d-align total-user-wrap">
                          <img src={User} alt="user" />
                          <span className="number">{item.number}</span>
                        </div>
                        <p className="fw-300">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="countryright-wrap">
                <img src={MapImg} alt="map" />
              </div>
            </div>
            <div className="card-bg">
              <TitleWrap className="d-align-between">
                <h6 className="fw-300">Visit by Device</h6>
                <CustomSelect
                  options={selectOptions}
                  defaultValue="This Month"
                  onChange={handleSelectChange}
                />
              </TitleWrap>
              <div className="revenue-number-wrap">
                <div className="d-align">
                  <h4 className="h4">77,257</h4>
                  <LabelWrap className="red">
                    <span>1.57%</span>
                    <span className="">{SVGIcons.VisitDevice}</span>
                  </LabelWrap>
                </div>
              </div>
              <div className="device-cardbox">
                {DeviceData.map((item) => (
                  <div key={item.devicetype} className="device-carditem">
                    <span className="text-white fw-300 device-type">
                      {item.devicetype}
                    </span>
                    <p>
                      {item.numberRatio} <span>{item.percentRatio}</span>
                    </p>
                    <div className="d-align-between">
                      {item.deviceInnerData.map((value, index) => (
                        <div key={index} className="device-name-wrap">
                          <div className="d-align">
                            <span className={`dot-wrap ${value.color}`}></span>
                            <p className="fw-300">{value.devicename}</p>
                          </div>
                          <span className="scale-name">
                            {value.deviceScale}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CountriesCustomerDeviceWrap>
        </DashboardMainLeftWrap>
        <DashboardMainRightWrap>
          <div className="card-bg">
            <SalesChart />
          </div>
          <div className="card-bg">
            <TitleWrap className="">
              <h6 className="fw-400">Top Products</h6>
              <p className="fw-300 text-light-gray">Based on sales and rates</p>
            </TitleWrap>
            <div className="product-cardbox">
              {ProductData.map((item) => (
                <div
                  key={item.name}
                  className="product-carditem d-align-between"
                >
                  <div className="d-align">
                    <div className="product-icon">
                      <img src={item.image} alt="ProductIcon" />
                    </div>
                    <h5 className="text-ellipsis">{item.name}</h5>
                  </div>
                  <span className="number-wrap">{item.number}</span>
                </div>
              ))}
            </div>
          </div>
        </DashboardMainRightWrap>
      </DashboardMainWrap>
      <TransactionsTargetWrap>
        <div className="recent-transactoins-wrap card-bg">
          <TitleWrap className=" d-align-between">
            <h6 className="fw-300">Recent Transactions</h6>
            <p className="fw-300">See All</p>
          </TitleWrap>
          <ProductTable />
        </div>
        <div className="target-wrap card-bg">
          <TitleWrap className="d-align-between">
            <h6 className="fw-300">Target</h6>
            <CustomSelect
              options={options}
              defaultValue="Today"
              onChange={handleSelectChange}
            />
          </TitleWrap>
          <p className="text-light-gray">Traffic parameters</p>
          <div className="target-gridbox">
            {targetData.map((item) => (
              <div key={item.name} className="target-griditem">
                <span className="title fw-400">{item.name}</span>
                <p className="fw-600 text-white">
                  {item.gainNum}
                  <span className="text-light-gray">{item.totalNum}</span>
                </p>
                <span className={`percent ${item.className} `}>
                  {item.percent}
                </span>
              </div>
            ))}
          </div>
        </div>
      </TransactionsTargetWrap>
    </ResponsiveMediaQuery>
  );
};

export default Dashboard;
