export interface ICourseFilterList {
  id: number;
  title: string;
}

export interface ICourses {
  id: number;
  name: string;
  bgColor: string;
  image: string;
  tags: string[];
}

export interface IFilterProps {
  selectedCurse: number;
  filterList: ICourseFilterList[];
  changeFilter: (id: number) => void;
}

export interface IListProps {
  filterdCourses: ICourses[];
}
