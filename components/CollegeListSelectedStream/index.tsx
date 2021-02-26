import React,{useState, useEffect} from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Input } from "../../components/Input";
import SearchIcon from '@material-ui/icons/Search';

const CollegeListSelectedStream = ({allCoursesWithCounts, onSelecteCourse, selectedCourses}) => {
  const [searchedCourses, setSearchCourses] = useState({})
  useEffect(() => {
    setSearchCourses(allCoursesWithCounts)
  }, [allCoursesWithCounts])

  const onChange = e => {
    let courses = {}
    for (const course in allCoursesWithCounts) {
      if (course
            .toLowerCase()
            .search(e.target.value.trim().toLowerCase()) > -1) {
        courses[course] = allCoursesWithCounts[course]
      }
}
setSearchCourses(courses)
  }
  return (
    <div className="college-list-selected-filter">
      <div className="college-list-selected-filter__filterTitleContainer">
        <p className="college-list-selected-filter__filterTitle">Stream</p>
        <p className="college-list-selected-filter__filterAdd">+</p>
      </div>
      <div className="college-list-selected-filter__searchContainer">
        <Input placeholder={"Find Stream"} margin={"0px 0px 0px 0px"} name="stream_search" onChange={onChange} fullWidth icon={SearchIcon} />
      </div>
      {
          Object.keys(searchedCourses).map((course,i)=>{
            return (
      <div key={i} className="college-list-selected-filter__filterStreamContainer">
        <FormControlLabel className="college-list-selected-filter__checkboxLabel" name={course} onChange={onSelecteCourse} control={<Checkbox name={course} />} checked={selectedCourses.includes(course.toUpperCase())} label={course} />
        {searchedCourses[course]}
      </div>
        )
    })
  }
    </div>
  );
}; 

export { CollegeListSelectedStream };
