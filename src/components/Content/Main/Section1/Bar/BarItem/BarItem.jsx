import { SvgSelector } from '../../../../../../SvgSelector';
import s from './BarItem.module.scss'

const BarItem = ({ id, title, svgtitle }) => {
    return (
        <div className={s.baritem}>
            <button>
                <div className={s.item}>
                    <SvgSelector id={svgtitle} />
                    <div className={s.title}>{title}</div>
                </div>
            </button>
        </div>
    );
}

export default BarItem;