import { CoursesService } from "../api/coursesApi";
import { Dispatch } from 'redux';
import { GET_CHOICE_COLLEGES, GET_LEVELS, GET_PROGRAMS, GET_STREAMS } from "../const";
const coursesService = new CoursesService();
export const addProgram = (program) => async (dispatch: Dispatch) => {
    const response = await coursesService.addProgram(program);
    if (response.isSuccess) {
        return true
    } else if (!response.isSuccess) {
        return false
    }
};
export const addCollegeCourse = (course) => async (dispatch: Dispatch) => {
    const response = await coursesService.addCollegeCourse(course);
    if (response.isSuccess) {
        return true
    } else if (!response.isSuccess) {
        return false
    }
};
export const updateCollegeCourse = (course) => async (dispatch: Dispatch) => {
    const response = await coursesService.editCollegeCourse(course);
    if (response.isSuccess) {
        return true
    } else if (!response.isSuccess) {
        return false
    }
};
export const deleteCollegeCourse = (course_id) => async (dispatch: Dispatch) => {
    const response = await coursesService.deleteCollegeCourse(course_id);
    if (response.isSuccess) {
        return true
    } else if (!response.isSuccess) {
        return false
    }
};
export const getCourses = () => async (dispatch: Dispatch) => {
    const response = await coursesService.getPrograms();
    if (response.isSuccess) {
        return response.data
    } else if (!response.isSuccess) {
        return []
    }
};
export const getLevels = () => async (dispatch: Dispatch) => {
    const response = await coursesService.getAllLevels();
    if (response.isSuccess) {
        dispatch({type:GET_LEVELS, payload:response.data})
        return response.data
    } else if (!response.isSuccess) {
        dispatch({type:GET_LEVELS, payload:[]})
        return []
    }
};
export const getCollegeCourses = (college_id) => async (dispatch: Dispatch) => {
    const response = await coursesService.getCollegeCourses(college_id);
    if (response.isSuccess) {
        return response.data
    } else if (!response.isSuccess) {
        return []
    }
};
export const getStreams = (course_level) => async (dispatch: Dispatch) => {
    const response = await coursesService.getAllStreams(course_level);
    if (response.isSuccess) {
        dispatch({type:GET_STREAMS, payload:response.data})
        // return response.data
    } else if (!response.isSuccess) {
        dispatch({type:GET_STREAMS, payload:[]})
        // return []
    }
};
export const getProgram = (id) => async (dispatch: Dispatch) => {
    const response = await coursesService.getProgram(id);
    if (response.isSuccess) {
        // dispatch({type:GET_PROGRAMS, payload:response.data})
        return response.data
    } else if (!response.isSuccess) {
        // dispatch({type:GET_LEVELS, payload:[]})
        return null
    }
};
export const getAllPrograms = (course_level, course_stream) => async (dispatch: Dispatch) => {
    const response = await coursesService.getAllPrograms(course_level, course_stream);
    if (response.isSuccess) {
        dispatch({type:GET_PROGRAMS, payload:response.data})
        // return response.data
    } else if (!response.isSuccess) {
        dispatch({type:GET_PROGRAMS, payload:[]})
        // return []
    }
};
export const updateProgram = (program) => async (dispatch: Dispatch) => {
    const response = await coursesService.editProgram(program);
    if (response.isSuccess) {
        return true
    } else if (!response.isSuccess) {
        return false
    }
};
export const removeProgram = (id) => async(dispatch: Dispatch) => {
    const response = await coursesService.deleteProgram(id);
    if (response.isSuccess) {
        return true
    } else if (!response.isSuccess) {
        return false
    }
};

export const getFilters = () => async(dispatch: Dispatch) => {
    const response = await coursesService.getFilters();
    if (response.isSuccess) {
        return response.data
    } else if (!response.isSuccess) {
        return {}
    }
};

export const getCollegesByCourses = (course_level, course_stream, program_id ) => async(dispatch: Dispatch) => {
    const response = await coursesService.getCollegesByCourses(course_level, course_stream, program_id);
    if (response.isSuccess) {
        dispatch({type:GET_CHOICE_COLLEGES, payload:response.data})
        // return response.data
    } else if (!response.isSuccess) {
        dispatch({type:GET_CHOICE_COLLEGES, payload:[]})
        // return []
    }
};
