import { Button } from "antd";
import { Table, Tooltip } from "antd";
import { deleteOne } from "../../../services";
import { endpoint } from "../../../services/constant";
import { useOutletContext } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AdminProducts = () => {
  const [data, setData] = useOutletContext();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Image",
      dataIndex: "imgSrc",
      render: (element, data, i) => (
        <img src={element} alt={data.name} width={100} />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    },
    {
      title: "Sale Price",
      dataIndex: "salePrice",
      render: (element) => {
        return <span>{element} manat</span>;
      },
      sorter: (a, b) => a.costPrice - b.costPrice,
    },
    {
      title: "Discount Percentage",
      dataIndex: "discountPercentage",
      render: (element) => {
        return <span>{element}</span>;
      },
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
    },
    {
      title: "Stock Count",
      dataIndex: "stockCount",
      render: (element) => {
        return <span>{element}</span>;
      },
      sorter: (a, b) => a.stockCount - b.stockCount,
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (element) => {
        return (
          <Tooltip title={element}>
            <span>{element.slice(0, 30)}...</span>
          </Tooltip>
        );
      },
    },

    {
      title: "Delete",
      dataIndex: "delete",
      render: (element, record) => (
        <>
          <Button
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  //delete api
                  deleteOne(endpoint.products, record.id).then((response) => {
                    if (response.status === 200) {
                      setData((data) => data.filter((q) => q.id != record.id));
                      // const filtered = data.filter((q) => q.id != record.id);
                      // setdata(filtered);
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your card has been deleted.",
                        icon: "success",
                      });
                    }
                  });
                }
              });
            }}
            danger
          >
            <DeleteIcon />
          </Button>
        </>
      ),
    },
    {
      title: "Edit",
      dataIndex: "edit",
      render: (element, data, i) => (
        <Button type="primary" block>
          <EditIcon />
        </Button>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowKey={"id"}
      pagination={{
        pageSize: 4,
      }}
    />
  );
};

export default AdminProducts;
