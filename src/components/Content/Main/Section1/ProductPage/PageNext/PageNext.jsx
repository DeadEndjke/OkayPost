import s from './PageNext.module.scss'

const PageNext = ({ obj, increaseOption }) => {
    return (
        <div className={s.page}>
            <div className={s.img}> <img onClick={increaseOption} src={obj.img} alt="" /> </div>
        </div>
    );
}
export default PageNext;