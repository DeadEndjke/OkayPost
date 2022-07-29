import s from './PagePrev.module.scss'

const PagePrev = ({ obj, decreaseOption }) => {
    return (
        <div className={s.page}>
            <div className={s.img}> <img onClick={decreaseOption} src={obj.img} alt="" /> </div>
        </div>
    );
}
export default PagePrev;