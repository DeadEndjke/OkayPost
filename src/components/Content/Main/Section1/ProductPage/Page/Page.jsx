import s from './Page.module.scss'

const Page = ({ title, ruprice, ukprice, img }) => {
    return (
        <div className={s.page}>
            <div className={s.title}>{title}</div>
            <div className={s.ruprice}>{ruprice}</div>
            <div className={s.ukprice}>{ukprice}</div>
            <div className={s.img}> <img src={img} alt="" /> </div>
        </div>
    );
}
export default Page;