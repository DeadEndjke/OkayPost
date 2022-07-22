import Bar from './Bar/Bar';
import s from './Section1.module.scss'

const Section1 = () => {
    return (
        <div className={s.container}>
            <div className={s.section1}>
                <div className={s.heading}>Насколько выгодно покупать?</div>
                <Bar />
            </div>
        </div>
    );
}

export default Section1;