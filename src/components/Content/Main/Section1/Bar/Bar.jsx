import s from './Bar.module.scss'
import ProductState from './../../../../../state/ProductState'
import { SvgSelector } from '../../../../../SvgSelector';
import BarItem from './BarItem/BarItem';

const Bar = () => {
    return (
        <div className={s.bar}>
            <button> <SvgSelector id='vectorprev' /></button>
            {ProductState?.map((ProductState) => (
                <BarItem
                    key={ProductState.id}
                    id={ProductState.id}
                    title={ProductState.title}
                    svgtitle={ProductState.svgtitle}
                />
            ))}
            <button><SvgSelector id='vectornext' /> </button>
        </div>
    );
}

export default Bar;