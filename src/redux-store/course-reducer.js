const SET_COURSES = 'SET_COURSES';

let initialState = {
    course: null
}

const courseReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_COURSES: 
            

        default:
            return state;
    }
}

export default courseReducer;