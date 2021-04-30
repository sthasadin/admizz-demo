import React from "react";
import { getCollege } from "../../store/Action/college.action";
import {
  getLevels,
  getStreams,
  getAllPrograms,
  getCollegesByCourses,
} from "../../store/Action/courses.action";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { Button } from "../Button";
import { DropDownSelect } from "../DropDownSelect";

const selectCollege = (props) => {
  const [selectedLevelId, setSelectedLevelId] = React.useState("");
  const [streamOption, setStreamOption] = React.useState([]);
  const [programOption, setProgramOption] = React.useState([]);
  const [collegeOption, setCollegeOption] = React.useState([]);
  // const [appliedCollege, setAppliedCollege] = React.useState([]);
  const collegeDetails = useSelector((state) => state.college.college);
  const [selectedStream, setSelectedStream] = React.useState({
    label: "",
    value: "",
  } as any);
  const [selectedProgram, setSelectedProgram] = React.useState({
    label: "",
    value: "",
  });
  const [selectedCollege, setSelectedCollege] = React.useState({
    label: "",
    value: "",
  });

  const dispatch = useDispatch();

  //fetch stream
  React.useEffect(() => {
    (async () => {
      const fetchLevel = await dispatch(getLevels());
      const selectLevelObj = fetchLevel.find(
        (id) => id.name === props.selectedData?.selectedLevel
      );
      setSelectedLevelId(selectLevelObj?._id);
      const fetchStream = await dispatch(getStreams(selectLevelObj?._id));
      setStreamOption(
        fetchStream.map((res) => {
          return {
            label: res.name,
            value: res._id,
          };
        })
      );
    })();
  }, []);

  // fetch program
  React.useEffect(() => {
    (async () => {
      setSelectedProgram({
        label: "",
        value: "",
      });
      setSelectedCollege({
        label: "",
        value: "",
      });
      const fetchProgram = await dispatch(
        getAllPrograms(selectedLevelId, selectedStream.value)
      );
      setProgramOption(fetchProgram);
    })();
  }, [selectedStream]);

  //fetch college
  React.useEffect(() => {
    (async () => {
      setSelectedCollege({
        label: "",
        value: "",
      });
      //prevent from unnecessary api call by dependency update
      if (selectedProgram) {
        const fetchCollege = await dispatch(
          getCollegesByCourses(
            selectedLevelId,
            selectedStream.value,
            selectedProgram.value
          )
        );
        setCollegeOption(fetchCollege);
      }
    })();
  }, [selectedProgram]);

  const { setAppliedCollege, appliedCollege, index, RemoveChoiceArray } = props;

  React.useEffect(() => {
    if (Object.keys(collegeDetails).length > 0) {
      setAppliedCollege(() => [
        ...appliedCollege,
        {
          collegeName: collegeDetails.name,
          image: collegeDetails.college_profile_image,
          address: collegeDetails.address,
          college_slug: collegeDetails.college_slug,
          collegeStream: selectedStream.label,
          collegeProgram: selectedProgram.label,
        },
      ]);
    }
  }, [collegeDetails]);

  // console.log(index);

  const handleSave = async () => {
    // props.handelSave();

    dispatch(getCollege(selectedCollege.value));
    console.log(collegeDetails);
  };

  const programList = programOption?.map((program) => {
    return {
      label: program.name,
      value: program?._id,
    };
  });

  const collegeList = collegeOption?.map((college) => {
    return {
      label: college.college?.name,
      value: college.college?.college_slug,
    };
  });

  // const handleClose = (e) => {
  //   console.log(e);
  // };
  return (
    <>
      <div className="dashboard-basic-info__formContainer">
        <form>
          <Grid
            container
            className="dashboard-basic-info__row"
            justify="space-between"
            direction="row"
          >
            <Grid>
              <div className="dashboard-basic-info__formTitle">
                Choice # {props.choiceNumber}
              </div>
            </Grid>
            {index == undefined ? null : (
              <Grid>
                <img
                  src="/cross-sign.png"
                  alt="cross_sign"
                  onClick={() => RemoveChoiceArray(index)}
                />
              </Grid>
            )}
          </Grid>
          <Grid
            container
            className="dashboard-basic-info__row"
            justify="space-around"
            direction="row"
          >
            <Grid
              className={"dashboard-basic-info__grid"}
              item
              sm={12}
              md={6}
              xs={12}
            >
              <DropDownSelect
                title="Choose Steam"
                options={streamOption}
                defaultvalue={selectedStream}
                handleChange={(e) => setSelectedStream(e)}
              />
            </Grid>
            <Grid
              className={"dashboard-basic-info__grid"}
              item
              sm={12}
              md={6}
              xs={12}
            >
              <DropDownSelect
                title="Select Specific program"
                options={programList}
                defaultvalue={selectedProgram}
                handleChange={(e) => setSelectedProgram(e)}
              />
            </Grid>
          </Grid>
          <Grid
            container
            className="dashboard-basic-info__row"
            justify="space-around"
            direction="row"
          >
            <Grid
              className={"dashboard-basic-info__grid"}
              item
              sm={12}
              md={12}
              xs={12}
            >
              <DropDownSelect
                title="Select College"
                options={collegeList}
                defaultvalue={selectedCollege}
                handleChange={(e) => setSelectedCollege(e)}
              />
            </Grid>
          </Grid>
          <Grid
            container
            className="dashboard-basic-info__row"
            justify="space-around"
            direction="row"
          >
            <div className="dashboard-basic-info__buttonContainer">
              <div
                className="dashboard-basic-info__viewText"
                // onClick={() => props.handelSave()}
                onClick={handleSave}
              >
                Save Choice
              </div>
              <div
                className="dashboard-basic-info__editText"
                onClick={() => props.onClickAddChoice()}
              >
                Add More Choice
              </div>
            </div>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default selectCollege;
