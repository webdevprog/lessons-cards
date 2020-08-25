import { coursesAPI } from "../api/api";

const SET_COURSES = 'SET_COURSES';
const TOGGLE_CURRENCY = 'TOGGLE_CURRENCY';

let initialState = {
    courses: [],
    currencyBonus: false,
}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COURSES:
            return {
                ...state,
                courses: action.courses
            }

        case TOGGLE_CURRENCY:
            return {
                ...state,
                currencyBonus: action.currencyBonus
            }

        default:
            return state;
    }
}

export const setCourses = (courses) => ({ type: SET_COURSES, courses });
export const toggleCurrency = (currencyBonus) => ({ type: TOGGLE_CURRENCY, currencyBonus });

export const getCourses = () => async (dispatch) => {
    let response = await coursesAPI.getCourses();
    dispatch(setCourses(response));
}

export default courseReducer;