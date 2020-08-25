import React, { useState } from 'react';

const Course = ({ courseId, subject, status, grade, genre, shopUrl, price }) => {
    const [isBounus, toggleCurrency] = useState(0);

    let classes = grade.split(';');
    let classesFormat = classes.length === 1 ? classes[0] : classes[0] + ' - ' + classes[classes.length - 1];

    return (
        <div class="course-item">
            <img className="course-item__photo" src={`https://www.imumk.ru/svc/coursecover/${courseId}`} alt={subject} />
            <div className="course-item__subject">{subject}</div>
            <div className="course-item__status">{status === 'free' ? 'Бесплатно' : status}</div>
            <div className="course-item__classes">{`${classesFormat} класс${classes.length > 1 ? 'ы' : ''}`}</div>
            <div className="course-item__type">{genre}</div>
            <div className="course-item-footer">
                <a className="course-item__more" href={shopUrl}>Подробнее</a>
                <span className="course-item__btn" onClick={() => toggleCurrency(!isBounus)}>{isBounus ? price + ' руб' : 'Попробовать'}</span>
            </div>
        </div>
    )
}

export default Course;