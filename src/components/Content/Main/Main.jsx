import Banner from './Banner/Banner';
import s from './Main.module.scss'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.backgroundcontainer}>
                <div className={s.background}></div>
                <div className={s.maincontainer}>

                    <Banner />
                </div>
            </div>

        </div>
    );
}

export default Main;