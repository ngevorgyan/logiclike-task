import { useEffect, useMemo, useState } from "react";
import LeftSideBar from "./components/left-side-bar/LeftSideBar";
import Courses from "./components/courses/Courses";
import { ICourses, ICourseFilterList } from "./types";
import "./App.scss";

const filterList: ICourseFilterList[] = [
  { id: 0, title: "Все темы" },
  { id: 1, title: "Логика и мышление" },
  { id: 2, title: "Загадки" },
  { id: 3, title: "Головоломки" },
  { id: 4, title: "Путешествия" },
];

function App() {
  const [courses, setCourses] = useState<ICourses[]>([]);
  const [selectedCurse, setSelectedCourse] = useState<number>(filterList[0].id);

  const changeFilter = (id: number): void => {
    setSelectedCourse(id);
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch("https://logiclike.com/docs/courses.json");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [selectedCurse]);

  const filterdCourses: ICourses[] = useMemo(() => {
    if (selectedCurse === filterList[0].id) {
      return courses;
    }

    return courses.filter((item) =>
      item.tags.includes(filterList[selectedCurse].title)
    );
  }, [selectedCurse, courses]);

  return (
    <div className="container">
      <LeftSideBar
        filterList={filterList}
        selectedCurse={selectedCurse}
        changeFilter={changeFilter}
      />
      <Courses filterdCourses={filterdCourses} />
    </div>
  );
}

export default App;
