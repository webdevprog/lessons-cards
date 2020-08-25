import React from 'react';
import Courses from './Courses';
import { connect } from 'react-redux';
import { getCourses, toggleCurrency, getFilterCourses } from '../../redux-store/course-reducer';
import './courses.scss';
import SwitcherCurrency from '../common/SwitcherCurrency/SwitcherCurrency';
import FilterForm from '../common/FilterForm/FilterForm';

class CoursesContainer extends React.Component {

    componentDidMount() {
        this.props.getCourses();
    }

    submit = values => {
        this.props.getFilterCourses(values);
    }

    render() {

        return (
            <section className="courses-wrapper">
                <h2>Витрина</h2>
                <SwitcherCurrency
                    classWrapper="courses-wrapper__switcher"
                    currencyBonus={this.props.currencyBonus}
                    toggleCurrency={this.props.toggleCurrency}
                />
                <FilterForm
                    onSubmit={this.submit}
                    searchResult={this.props.searchResult}
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
    currencyBonus: state.coursePage.currencyBonus,
    searchResult: state.coursePage.searchResult
});

export default connect(mapStateToProps, { getCourses, toggleCurrency, getFilterCourses })(CoursesContainer);
