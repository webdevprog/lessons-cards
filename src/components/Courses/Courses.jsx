import React from 'react';
import Course from './Course/Course';
import './courses.scss';

const Courses = ({ items }) => {
    return (
        <section class="courses-wrpper">
            <h2>Витрина</h2>
            <div class="courses-container">
                {
                    items.map(item => <Course {...item} />)
                }
            </div>
        </section>
    )
}

export default Courses;