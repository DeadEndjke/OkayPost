import s from './Page.module.scss'
import ru from './../../../../../../assets/ru.png'
import uk from './../../../../../../assets/uk.png'


const Page = ({ obj }) => {
    return (
        <>
            <div className={s.page}>
                <div className={s.titleandruprice}>
                    <div className={s.title}>{obj.title}</div>
                    <div className={s.ruprice}>
                        <img src={ru} alt="" />
                        <div className={s.rutitle}>
                            <span> Цена в России</span>{obj.ruprice}
                        </div>
                    </div>
                </div>

                <div className={s.img}> <img src={obj.img} alt="" /> </div>

                <div className={s.titleandukprice}>
                    <div className={s.title}>Доставка одежды из Великобритании  от <span> £7.79</span></div>
                    <div className={s.ukprice}>
                        <img src={uk} alt="" />
                        <div className={s.uktitle}>
                            <span> Цена в Uk</span>{obj.ukprice}
                        </div>
                    </div>

                </div>


            </div>
            <div className={s.bot}>
                <div className={s.delivery}>Срок доставки примерно 10 дней</div>
                <div className={s.economy}>
                    Вы экономите до <span> $119.56</span>
                </div>
            </div>
        </>
    );
}
export default Page;