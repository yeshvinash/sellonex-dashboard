import styled from "styled-components";

export const TitleWrap = styled.div`
  margin-bottom: 14px;
  align-items: flex-start;
  h6,
  p {
    font-weight: 400;
    font-size: 14px;
  }
`;

export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 300;
  border-radius: 4px;
  padding: 4px;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
  &.green {
    color: var(--light-green);
    background: #194832;
  }
  &.red {
    color: var(--red);
    background: var(--dark-red);
  }
`;
export const TransactionsTargetWrap = styled.div`
  display: grid;
  grid-template-columns: 750px auto;
  grid-gap: 14px;
  .target-wrap {
    ${TitleWrap} {
      margin-bottom: 8px;
    }
    p {
      font-size: 12px;
      margin-bottom: 5px;
    }
    .target-gridbox {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      .target-griditem {
        border-radius: 8px;
        padding: 4px 8px;
        background-color: #313131;
        border: 1px solid var(--dark-gray);
        .title {
          font-size: 10px;
          display: inline-block;
          margin-bottom: 4px;
        }
        p {
          font-size: 20px;
          margin-bottom: 0;
          span {
            font-size: 13px;
          }
        }
        .percent {
          font-size: 11px;
          &.green {
            color: var(--light-green);
          }
          &.yellow {
            color: var(--yellow);
          }
        }
      }
    }
  }
`;

export const DashboardMainWrap = styled.div`
  display: grid;
  grid-template-columns: 750px auto;
  grid-gap: 14px;
  margin-bottom: 14px;
`;

export const DashboardMainLeftWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashboardMainRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  & > div:not(:last-child) {
    margin-bottom: 14px;
  }
  ${TitleWrap} {
    h6 {
      margin-bottom: 3px;
    }
    p {
      font-size: 12px;
    }
  }
  .product-carditem {
    border-radius: 8px;
    padding: 9px;
    background-color: #313131;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    h5 {
      font-weight: 400;
      font-size: 12px;
      -webkit-line-clamp: 2;
    }
    .product-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      border-radius: 4px;
      flex-shrink: 0;
      margin-right: 5px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
      }
    }
    .number-wrap {
      color: var(--light-green);
      font-weight: 400;
      font-size: 16px;
    }
  }
`;
export const RevenueSalesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 14px;
  height: 100%;
  .revenue-number-wrap {
    margin-bottom: 14px;
    h4,
    .h4 {
      margin-right: 10px;
      font-size: 26px;
    }
    p {
      font-size: 12px;
      margin-top: 4px;
    }
  }
`;

export const RevenueSourceSliderWrap = styled.div`
  background-color: #313131;
  border: 1px solid var(--dark-gray);
  border-radius: 8px;
  .slider-title-wrap {
    padding: 14px 10px;
  }
  .title {
    font-size: 14px;
    font-weight: 300;
  }
  .slider-arrow-wrap {
    display: flex;
    & > div:not(:last-child) {
      margin-right: 10px;
    }
    .js-prev,
    .js-next {
      border: 1px solid var(--dark-gray);
      width: 18px;
      height: 18px;
      background-color: #3e3e3e;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const CountriesCustomerDeviceWrap = styled.div`
  display: grid;
  grid-template-columns: 460px auto;
  grid-gap: 14px;
  margin-top: 14px;
  height: 100%;

  .revenue-number-wrap {
    h4,
    .h4 {
      margin-right: 10px;
      font-size: 26px;
    }
  }
  .device-cardbox {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-top: 12px;
    .device-carditem {
      padding: 8px;
      background: #313131;
      border: 1px solid var(--dark-gray);
      border-radius: 8px;
      .device-type {
        font-size: 10px;
      }
      p {
        font-size: 20px;
        font-weight: 600;
        span {
          color: var(--light-green);
          font-weight: 300;
          font-size: 12px;
        }
      }
      .device-name-wrap {
        margin-top: 10px;
        flex-basis: 100%;
        &:not(:last-child) {
          border-right: 1px solid rgb(62, 62, 62);
          padding-right: 10px;
        }
        &:not(:first-child) {
          padding-left: 10px;
        }
        .dot-wrap {
          width: 4px;
          height: 4px;
          background-color: transparent;
          border-radius: 50%;
          margin-right: 4px;
          flex-shrink: 0;
          &.red {
            background-color: #ea4f4f;
          }
          &.blue {
            background-color: #5770f4;
          }
          &.green {
            background-color: #23da82;
          }
          &.yellow {
            background-color: #f2c246;
          }
        }
        p {
          font-weight: 300;
          font-size: 10px;
          line-height: 1;
          color: var(--light-gray);
        }
        .scale-name {
          font-size: 12px;
          font-weight: 300;
        }
      }
    }
  }
  .country-wrap {
    display: flex;
  }
  .country-content-wrap {
    margin-top: auto;
    > div:not(:last-child) {
      margin-bottom: 10px;
    }
    img {
      width: 22px;
      height: 22px;
    }
    .number {
      display: inline-block;
      font-size: 22px;
      font-weight: 600;
      margin-left: 6px;
    }
    p {
      color: var(--light-gray);
      font-size: 11px;
    }
  }

  .countryleft-wrap {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .countryright-wrap {
    flex: 1;
    margin-left: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;

export const ResponsiveMediaQuery = styled.div`
  @media screen and (max-width: 1279px) {
    ${TransactionsTargetWrap} {
      grid-template-columns: 100%;
    }
    ${DashboardMainWrap} {
      grid-template-columns: 100%;
    }
  }
  @media screen and (max-width: 991px) {
    ${CountriesCustomerDeviceWrap} {
      grid-template-columns: 100%;
    }
    ${RevenueSalesWrap} {
      grid-template-columns: 100%;
    }
  }
  @media screen and (max-width: 575px) {
    ${TitleWrap} {
      h6,
      p {
        font-size: 13px;
      }
    }
    ${RevenueSalesWrap} {
      .revenue-number-wrap {
        h4,
        .h4 {
          font-size: 24px;
        }
        p {
          font-size: 11px;
        }
      }
    }
    ${CountriesCustomerDeviceWrap} {
      .country-content-wrap {
        .number {
          font-size: 17px;
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
      .device-carditem {
        p {
          font-size: 18px;
        }
      }

      .revenue-number-wrap {
        h4,
        .h4 {
          font-size: 24px;
        }
      }
    }
  }
`;
