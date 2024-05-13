import { Table } from "antd";
import {
  useDeleteCustomersMutation,
  useGetAllCustomersQuery,
} from "../../services/companyApi";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "antd";
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const CustomerTable = () => {
  const { data, refetch } = useGetAllCustomersQuery();
  const [deleteCustomers] = useDeleteCustomersMutation();
  const columns = [
    {
      title: "Customer id",
      dataIndex: "id",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
    },
    {
      title: "Address",
      render: (record) => {
        return `${record.address?.city},${record.address?.country}`;
      },
    },
    {
      title: "Phone",
      render: (record) => {
        return `${record.address?.phone}`;
      },
    },
    {
      title: "Add to Favorites",
      render: (record) => {
        return (
          <>
            <Button>
              <FavoriteIcon />
            </Button>
          </>
        );
      },
    },
    {
      title: "Delete",
      render: (record) => {
        return (
          <>
            <Button
              onClick={async () => {
                await deleteCustomers(record.id);
                refetch();
              }}
            >
             <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowKey={"id"}
      pagination={{
        pageSize: 12,
      }}
    />
  );
};

export default CustomerTable;
