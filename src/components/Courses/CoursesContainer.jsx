import React from 'react';
import Courses from './Courses';
import { connect } from 'react-redux';
import { getCourses } from '../../redux-store/course-reducer';

class CoursesContainer extends React.Component {
    
    componentDidMount() {
        this.props.getCourses();
    }

    render() { 
        return ( 
            <Courses items={this.props.courses}  />
         );
    }
}


let mapStateToProps = (state) => ({
    courses: state.coursePage.courses
});

export default connect(mapStateToProps, {getCourses})(CoursesContainer);
 