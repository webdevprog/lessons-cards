import { coursesAPI } from "../api/api";

const SET_COURSES = 'SET_COURSES';
const TOGGLE_CURRENCY = 'TOGGLE_CURRENCY';
const FILTER_COURSES = 'FILTER_COURSES';

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

        case FILTER_COURSES:
            let filteredCourses = [...state.courses];
            Object.keys(action.filterData).length && Object.keys(action.filterData).map((signName) => {
                filteredCourses = filteredCourses.filter((item) => {
                    switch (signName) {
                        case 'title':
                            let regexp = new RegExp(action.filterData[signName], "gi");
                            return regexp.test(item[signName]);
                        case 'grade':
                            let gradeArr = item[signName].split(';');
                            return gradeArr.includes(action.filterData[signName]);
                        default:
                            return item[signName] === action.filterData[signName]
                    }
                })
            })
            return {
                ...state,
                courses: filteredCourses
            }

        default:
            return state;
    }
}

export const setCourses = (courses) => ({ type: SET_COURSES, courses });
export const toggleCurrency = (currencyBonus) => ({ type: TOGGLE_CURRENCY, currencyBonus });
export const filterCourses = (filterData) => ({ type: FILTER_COURSES, filterData });

export const getCourses = () => async (dispatch) => {
    let response = await coursesAPI.getCourses();
    dispatch(setCourses(response));
}

export const getFilterCourses = (filterData) => async (dispatch) => {
    let response = await coursesAPI.getCourses();
    await dispatch(setCourses(response));

    dispatch(filterCourses(filterData));
}

export default courseReducer;