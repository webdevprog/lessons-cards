import React from 'react';
import './switchercurrency.scss'

const SwitcherCurrency = ({ currencyBonus, toggleCurrency, classWrapper }) => {

    return (
        <div className={`switcher-currency ${classWrapper}`}>
            <div className={`switcher-currency-btn switcher-currency-btn_active_${currencyBonus ? 'bonus' : 'rub'}`}>
                <div
                    className={`switcher-currency-btn__item switcher-currency-btn_rub`}
                    onClick={() => toggleCurrency(false)}>
                    Рубли
                </div>
                <div
                    className={`switcher-currency-btn__item switcher-currency-btn_bonus`}
                    onClick={() => toggleCurrency(true)}>
                    Бонусы
                </div>
            </div>
        </div>
    )
}

export default SwitcherCurrency;