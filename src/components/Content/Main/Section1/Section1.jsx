import Bar from './Bar/Bar';
import { useState } from 'react';
import s from './Section1.module.scss'
import ProductPage from './ProductPage/ProductPage';

const Section1 = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handlePrev = () => {
        if (value !== 0)
            setValue(value - 1)
        else {
            setValue(5)
        }
    }
    const handleNext = () => {
        if (value !== 5)
            setValue(value + 1)
        else {
            setValue(0)
        }
    }
    return (
        <div className={s.container}>
            <div className={s.section1}>
                <div className={s.heading}>Насколько выгодно покупать?</div>
                <Bar handleNext={handleNext} handlePrev={handlePrev} handleChange={handleChange} value={value} />
                <ProductPage value={value} />
            </div>
        </div>
    );
}

export default Section1;