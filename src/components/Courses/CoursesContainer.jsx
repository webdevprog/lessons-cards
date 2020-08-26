import React from 'react';
import Courses from './Courses';
import { connect } from 'react-redux';
import { getCourses, toggleCurrency, getFilterCourses } from '../../redux-store/course-reducer';
import './courses.scss';
import SwitcherCurrency from '../common/SwitcherCurrency/SwitcherCurrency';
import FilterForm from '../common/FilterForm/FilterForm';
import Preloader from '../common/Preloader/Preloader';

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
                <header className="courses-header">
                    <h2>Витрина</h2>
                    <SwitcherCurrency
                        classWrapper="courses-wrapper__switcher"
                        currencyBonus={this.props.currencyBonus}
                        toggleCurrency={this.props.toggleCurrency}
                    />
                    <FilterForm
                        onSubmit={this.submit}
                        searchResult={this.props.searchResult}
                        isFetching={this.props.isFetching}
                    />
                </header>
                {!this.props.isFetching ?
                    <Courses
                        items={this.props.courses}
                        currencyBonus={this.props.currencyBonus}
                    />
                    : <Preloader />}
            </section>
        );
    }
}


let mapStateToProps = (state) => ({
    courses: state.coursePage.courses,
    currencyBonus: state.coursePage.currencyBonus,
    searchResult: state.coursePage.searchResult,
    isFetching: state.coursePage.isFetching,
});

export default connect(mapStateToProps, { getCourses, toggleCurrency, getFilterCourses })(CoursesContainer);
