import React from 'react';
import Courses from './Courses';
import { connect } from 'react-redux';
import { getCourses, toggleCurrency } from '../../redux-store/course-reducer';
import './courses.scss';
import SwitcherCurrency from '../common/SwitcherCurrency/SwitcherCurrency';

class CoursesContainer extends React.Component {

    componentDidMount() {
        this.props.getCourses();
    }

    render() {
        return (
            <section class="courses-wrapper">
                <h2>Витрина</h2>
                <SwitcherCurrency
                    classWrapper="courses-wrapper__switcher"
                    currencyBonus={this.props.currencyBonus}
                    toggleCurrency={this.props.toggleCurrency}
                />
                <Courses
                    items={this.props.courses}
                    currencyBonus={this.props.currencyBonus}
                />
            </section>
        );
    }
}


let mapStateToProps = (state) => ({
    courses: state.coursePage.courses,
    currencyBonus: state.coursePage.currencyBonus
});

export default connect(mapStateToProps, { getCourses, toggleCurrency })(CoursesContainer);
