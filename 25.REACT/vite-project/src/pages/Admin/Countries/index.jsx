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
const AdminCountries = () => {
  const [data, setdata] = useOutletContext();

  //   deleteOne(endpoint.countries, id).then((response) => {
  //     if (response.status === 200) {
  //       const filtered = [...data].filter((q) => q.id != id);
  //       setdata(filtered);
  //       console.log(response.status);
  //     }
  //   });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Image",
      dataIndex: "flagImg",
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
      title: "Population",
      dataIndex: "population",
      render: (element) => {
        const displayPopulation = element / 1_000_000;
        return <span>{displayPopulation} Million</span>;
      },
      sorter: (a, b) => a.population - b.population,
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
                setdata((currentCountries) => {
                  return [...currentCountries.filter((q) => q.id != record.id)];
                });
                //delete api
                deleteOne(endpoint.countries, record.id);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }}
          danger
        >
          <DeleteIcon />
        </Button>
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
        pageSize: 5,
      }}
    />
  );
};

export default AdminCountries;
