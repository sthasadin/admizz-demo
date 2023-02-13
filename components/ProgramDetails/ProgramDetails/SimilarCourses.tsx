import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SimilarCoursesList } from "./SimilarCoursesList";
import { getCourses } from "../../../store/Action/courses.action";

const SimilarCourses = ({ data }) => {
  const courseStream = data?.coursestream;
  console.log({ data });
  const [fetchedCourses, setFetchedCourses] = useState([]);

  const studycourse = fetchedCourses?.filter((x) => {
    if (
      x.coursestream.courselevel == courseStream.courselevel &&
      x.coursestream.name.trim().toLowerCase() ==
        courseStream.name.trim().toLowerCase()
    ) {
      return x;
    }
  });

  const dispatch: any = useDispatch();

  const courseLists = async () => {
    const streamData = await dispatch(getCourses());
    setFetchedCourses(streamData);
  };
  React.useEffect(() => {
    courseLists();
  }, []);

  return (
    <div className="similar-courses">
      <div className="similar-courses-title">Similar to {data?.name}</div>
      <div className="course-container">
        {studycourse?.slice(0, 5)?.map((data, i) => {
          return <SimilarCoursesList key={i} studycourse={data} />;
        })}
      </div>
      {/* <div
        className="explore-all"
      >
        Show More
      </div> */}
    </div>
  );
};

export { SimilarCourses };
