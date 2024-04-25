import { useState } from "react";
import AddForm from "./components/AddForm";
import Courses from "./components/Courses";
import array from "./data/data";

function App() {
  const [data, setData] = useState(array);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCourses = data.filter((q) => {
    return q.name
      .toLowerCase()
      .trim()
      .includes(searchQuery.trim().toLowerCase());
  });
  console.log(filteredCourses);
  return (
    <>
      <AddForm data={data} setData={setData} />
      <Courses data={filteredCourses} />
    </>
  );
}

export default App;
