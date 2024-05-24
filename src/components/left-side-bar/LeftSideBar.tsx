import { FC } from "react";
import { IFilterProps } from "../../types";
import "./LeftSideBar.scss";

const LeftSideBar: FC<IFilterProps> = ({
  filterList,
  selectedCurse,
  changeFilter,
}) => {
  return (
    <div className="filter-content">
      <ul className="list">
        {filterList.map((item) => (
          <li
            className={selectedCurse === item.id ? "active" : ""}
            key={item.id}
            onClick={() => changeFilter(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
