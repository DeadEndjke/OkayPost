import Banner from './Banner/Banner';
import s from './Main.module.scss'
import Section1 from './Section1/Section1';

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.backgroundcontainer}>
                <div className={s.background}></div>
                <div className={s.maincontainer}>
                    <Banner />
                </div>
                <Section1 />
            </div>

        </div>
    );
}

export default Main;