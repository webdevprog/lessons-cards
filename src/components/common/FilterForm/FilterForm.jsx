import React from 'react'
import { Field, reduxForm } from 'redux-form'

let FilterForm = props => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit}>
        <div>
            <Field name="subject" component="select">
                <option value="">Все предметы</option>
                <option value="Алгебра">Алгебра</option>
                <option value="Биология">Биология</option>
            </Field>
            <Field name="grade" component="select">
                <option>Все классы</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
            </Field>
            <Field name="genre" component="select">
                <option value="">Все жанры</option>
                <option value="Демо">Демо</option>
                <option value="Задачник">Задачник</option>
                <option value="Подготовка к ВПР">Подготовка к ВПР</option>
                <option value="Подготовка к ЕГЭ">Подготовка к ЕГЭ</option>
                <option value="Рабочая тетрадь">Рабочая тетрадь</option>
            </Field>

            <Field name="title" component="input" placeholder="Поиск" />
        </div>
    </form>
}

FilterForm = reduxForm({
    form: 'filterCourse',
    onChange: (values, dispatch, props) => {
        props.submit();
    },
})(FilterForm)

export default FilterForm;