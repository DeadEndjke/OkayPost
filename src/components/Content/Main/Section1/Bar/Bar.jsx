import { useEffect } from 'react';
import s from './Bar.module.scss'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductState from './../../../../../state/ProductState'
import { SvgSelector } from '../../../../../SvgSelector';

const Bar = ({ handleChange, handlePrev, handleNext, value }) => {


    useEffect(() => console.log(value))

    return (
        <div className={s.bar}>

            <Tabs

                value={value}
                onChange={handleChange}
            >
                <button className={s.tabbtn} onClick={handlePrev}><SvgSelector id='vectorprev' /></button>s
                {ProductState?.map((ProductState) => (

                    <Tab key={ProductState.id} value={ProductState.value} icon={<SvgSelector id={ProductState.svgtitle} />} iconPosition="start" label={ProductState.title} />
                ))}
                <button className={s.tabbtn} onClick={handleNext}><SvgSelector id='vectornext' /></button>
            </Tabs>


        </div>
    );
}

export default Bar;