import s from './BurgerMenu.module.scss'
const OpenBurger = ({ open }) => {
    return (

        <div className={s.openburger}>
            {
                (() => {
                    switch (open) {
                        case 'open': {
                            return (
                                <ul>
                                    <li>menu</li>
                                    <li>menu</li>
                                    <li>menu</li>
                                    <li>menu</li>
                                    <li>menu</li>
                                </ul>
                            )
                        }
                    }
                })()
            }
        </div>
    )
}

export default OpenBurger;