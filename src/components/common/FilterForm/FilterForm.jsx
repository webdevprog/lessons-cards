import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './filterform.scss';
import searchIcon from '../../../assets/img/search.svg'

let FilterForm = (props) => {
    const { handleSubmit, searchResult, isFetching, selects } = props;
    const classes = [];

    for (let i = 1; i <= 11; i++) {
        classes.push(<option key={i}>{i}</option>)
    }

    return (
        <div className="form form-container">
            <form className="form-filter" onSubmit={handleSubmit}>
                <div className="form-filter__item">
                    <Field name="subject" component="select">
                        <option value="">Все предметы</option>
                        {selects && selects.subjects.map((item, index) => (<option key={index}>{item}</option>))}
                    </Field>
                </div>
                <div className="form-filter__item">
                    <Field name="grade" component="select">
                        <option value="">Все классы</option>
                        {classes.map(item => item)}
                    </Field>
                </div>
                <div className="form-filter__item">
                    <Field name="genre" component="select">
                        <option value="">Все жанры</option>
                        {selects && selects.genres.map((item, index) => (<option key={index}>{item}</option>))}
                    </Field>
                </div>
                <div className="form-filter__item">
                    <div className="form-filter__item-search">
                        <Field name="title" component="input" placeholder="Поиск" />
                        <img src={searchIcon} alt="Search Icon" />
                    </div>
                </div>
            </form>
            {
                searchResult !== null &&
                <div className="notification">
                    <h4 className="notification__title">Результаты поиска:</h4>
                    <div className="notification__text">{!searchResult && !isFetching && 'Курсы не найдены'}</div>
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