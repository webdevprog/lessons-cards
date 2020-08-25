import React from 'react'
import { Field, reduxForm } from 'redux-form'

let FilterForm = (props) => {
    const { handleSubmit, searchResult } = props;
    const classes = [];
    const subject = ["Алгебра", "Английский язык", "Биология", "География", "Геометрия", "Демо-версия", "Информатика", "История", "                    Литература", "Математика", "Обществознание", "Окружающий мир", "Робототехника", "Русский язык", "Физика", "Химия"];
    const genre = ["Демо", "Задачник", "Подготовка к ВПР", "Подготовка к ЕГЭ", "Рабочая тетрадь"];

    for (let i = 1; i <= 11; i++) {
        classes.push(<option key={i}>{i}</option>)
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="subject" component="select">
                        <option value="">Все предметы</option>
                        {subject.map((item, index) => (<option key={index}>{item}</option>))}
                    </Field>
                    <Field name="grade" component="select">
                        <option value="">Все классы</option>
                        {classes.map(item => item)}
                    </Field>
                    <Field name="genre" component="select">
                        <option value="">Все жанры</option>
                        {genre.map((item, index) => (<option key={index}>{item}</option>))}
                    </Field>

                    <Field name="title" component="input" placeholder="Поиск" />
                </div>
            </form>
            {
                searchResult !== null &&
                <div>
                    <h4>Результаты поиска:</h4>
                    <p>{!searchResult && 'Курсы не найдены'}</p>
                </div>
            }

        </div>
    )
}

FilterForm = reduxForm({
    form: 'filterCourse',
    onChange: (values, dispatch, props) => {
        props.submit();
    },
})(FilterForm)

export default FilterForm;