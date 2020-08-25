import { coursesAPI } from "../api/api";

const SET_COURSES = 'SET_COURSES';

let initialState = {
    courses: []
}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COURSES:
            return {
                ...state,
                courses: action.courses
            }

        default:
            return state;
    }
}

export const setCourses = (courses) => ({ type: SET_COURSES, courses });

export const getCourses = () => async (dispatch) => {
    let response = await coursesAPI.getCourses();
    dispatch(setCourses(response));
}

export default courseReducer;