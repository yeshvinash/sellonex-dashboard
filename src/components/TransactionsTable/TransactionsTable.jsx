import React from "react";
import { Table, Tag } from "antd";
import styled from "styled-components";

const StyledTable = styled(Table)`
  .ant-table {
    background-color: transparent !important;
    font-family: var(--primary-font) !important;
    .ant-table-thead {
      th {
        background-color: transparent !important;
        border-bottom: none;
        color: var(--white);
        font-weight: 300;
        font-size: 14px;
        padding: 12px;
        &::before {
          display: none;
        }
      }
    }
    .ant-table-tbody {
      > tr:first-child {
        td {
          padding-top: 0;
        }
      }
      > tr:last-child {
        td {
          border: 0;
          padding-bottom: 0;
        }
      }
      tr {
        td {
          font-size: 14px;
          font-weight: 300;
          border-color: var(--black-tint-3);
          color: var(--light-gray);
          padding: 12px;
          word-break: break-word;
          .ant-tag {
            font-family: var(--primary-font) !important;
            background: transparent;
            border: 0;
            font-size: 14px;
            font-weight: 300;
            &.ant-tag-green {
              color: var(--light-green);
            }
            &.ant-tag-orange {
              color: var(--yellow);
            }
          }
        }
      }
    }
  }
`;
export const ResponsiveMediaQuery = styled.div`
  @media screen and (max-width: 991px) {
    ${StyledTable} {
      .ant-table-thead {
        th {
          font-size: 12px;
          padding: 10px;
        }
      }
      .ant-table-tbody {
        tr {
          td {
            font-size: 12px;
            min-width: 100px;
            max-width: 100px;
            padding: 10px;
            &:nth-child(2) {
              min-width: 250px;
              max-width: 250px;
            }
            &:nth-child(3) {
              min-width: 120px;
              max-width: 120px;
            }
            .ant-tag {
              font-size: 12px;
            }
          }
        }
      }
      .ant-table-container {
        overflow-x: auto;
      }
    }
  }
`;

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    render: (text) => <span>{`#${text}`}</span>,
    width: 90,
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 120,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <span>{`$${text}`}</span>,
    width: 100,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Success" ? "green" : "orange"}>{status}</Tag>
    ),
  },
];

const data = [
  {
    key: "1",
    code: "1234567",
    product: "Google Pixel 7 Pro (Hazel colour)",
    date: "28 Dec 2023",
    price: "640",
    status: "Success",
  },
  {
    key: "2",
    code: "1234567",
    product: "iPhone 15 pro max (128 gb, Black) ",
    date: "28 Dec 2023",
    price: "640",
    status: "Pending",
  },
];

const ProductTable = () => (
  <ResponsiveMediaQuery>
    <StyledTable
      className="product-table"
      columns={columns}
      dataSource={data}
      pagination={false}
      rowHoverable={false}
    />
  </ResponsiveMediaQuery>
);

export default ProductTable;
