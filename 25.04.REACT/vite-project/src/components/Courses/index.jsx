import "./index.css";
const Courses = ({ data }) => {
  return (
    <div className="courses">
      {data &&
        // eslint-disable-next-line react/prop-types
        data.map((q) => {
          return (
            <>
              <div className="card">
                <img src={q.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{q.name}</h5>
                  <p className="card-text">{q.price}</p>
                  <a href="#" className="btn btn-primary">
                    delete
                  </a>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Courses;
