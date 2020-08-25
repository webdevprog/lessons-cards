import React, { useState } from 'react';
import './course.scss';

const Course = ({ courseId, subject, grade, genre, shopUrl, price, priceBonus, showBonus }) => {
    const [isPrice, showPrice] = useState(false);

    let classes = grade.split(';');
    let classesFormat = classes.length === 1 ? classes[0] : classes[0] + ' - ' + classes[classes.length - 1];

    return (
        <div class="course-item">
            <img className="course-item__photo" src={`https://www.imumk.ru/svc/coursecover/${courseId}`} alt={subject} />
            <div className="course-item-content">
                <div className="course-item__subject">{subject}</div>
                <div className="course-item__classes">{`${classesFormat} класс${classes.length > 1 ? 'ы' : ''}`}</div>
                <div className="course-item__type">{genre}</div>
                <div className="course-item-footer">
                    <div><a className="course-item__more" href={shopUrl}>Подробнее</a></div>
                    <span
                        className="course-item__btn"
                        onClick={() => showPrice(!isPrice)}
                    >
                        {isPrice ? !showBonus ? price + ' руб' : priceBonus + ' бонусов' : 'Попробовать'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Course;