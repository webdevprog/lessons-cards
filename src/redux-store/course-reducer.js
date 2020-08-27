import { coursesAPI } from "../api/api";

const SET_COURSES = 'SET_COURSES';
const TOGGLE_CURRENCY = 'TOGGLE_CURRENCY';
const FILTER_COURSES = 'FILTER_COURSES';
const TOGGLE_FECTCHING = 'TOGGLE_FECTCHING';
const SET_DATA_SELECT = 'SET_DATA_SELECT';

let initialState = {
    courses: [],
    isFetching: true,
    currencyBonus: false,
    searchResult: null,
    selects: null
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

        case TOGGLE_FECTCHING:
            return {
                ...state,
                isFetching: action.fetching
            }

        case FILTER_COURSES:
            let filteredCourses;
            if (Object.keys(action.filterData).length) {
                filteredCourses = [...state.courses];
                Object.keys(action.filterData).forEach((signName) => {
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
                });
            }
            return {
                ...state,
                courses: filteredCourses === undefined ? [...state.courses] : filteredCourses,
                searchResult: filteredCourses !== undefined ? filteredCourses.length ? true : false : null
            }

        case SET_DATA_SELECT:
            return {
                ...state,
                selects: action.selects
            }

        default:
            return state;
    }
}

export const setCourses = (courses) => ({ type: SET_COURSES, courses });
export const toggleFetching = (fetching) => ({ type: TOGGLE_FECTCHING, fetching });
export const toggleCurrency = (currencyBonus) => ({ type: TOGGLE_CURRENCY, currencyBonus });
export const filterCourses = (filterData) => ({ type: FILTER_COURSES, filterData });
export const setDataSelect = (selects) => ({ type: SET_DATA_SELECT, selects });

export const getCourses = () => async (dispatch) => {
    dispatch(toggleFetching(true))
    let response = await coursesAPI.getCourses();
    dispatch(setCourses(response));
    dispatch(toggleFetching(false))
}

export const getFilterCourses = (filterData) => async (dispatch) => {
    dispatch(toggleFetching(true))
    let response = await coursesAPI.getCourses();
    await dispatch(setCourses(response));
    dispatch(filterCourses(filterData));
    dispatch(toggleFetching(false))
}

export const getDataSelect = () => async (dispatch) => {
    let response = await coursesAPI.getDataForFrom();
    dispatch(setDataSelect(response));
}

export default courseReducer;