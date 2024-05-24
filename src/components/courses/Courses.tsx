import { FC } from "react";
import { IListProps } from "../../types";
import "./Courses.scss";

const Courses: FC<IListProps> = ({ filterdCourses }) => {
  return (
    <div className="courses-content">
      {filterdCourses.map((course) => (
        <div className="course-content" key={course.id}>
          <div className="course">
            <div className="img" style={{ backgroundColor: course.bgColor }}>
              <img alt="" src={course.image} />
            </div>
            <div className="title">{course.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
