import s from './Banner.module.scss'
import banner from './../../../../assets/banner.png'

const Banner = () => {
    return (
        <div className={s.banner}>
            <div className={s.heading}>Доставка товаров из Великобритании в Россию</div>
            <div className={s.paragraph}>Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
            </div>
            <div className={s.button}><button>Получить адрес в UK</button></div>
            <div className={s.photo}><img src={banner} alt="" /></div>
        </div>);
}

export default Banner;