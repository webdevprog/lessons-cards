import React from 'react';
import Course from './Course/Course';
import './courses.scss';

const Courses = ({ items, currencyBonus }) => {
    return (
        <div class="courses-container">
            {
                items.map(item => <Course key={item.courseId} {...item} showBonus={currencyBonus} />)
            }
        </div>
    )
}

export default Courses;