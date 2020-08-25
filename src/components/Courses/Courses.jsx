import React from 'react';
import Course from './Course/Course';

const Courses = ({ items }) => {
    return (
        <div>
            {
                items.map(item => <Course {...item} />)
            }
        </div>
    )
}

export default Courses;