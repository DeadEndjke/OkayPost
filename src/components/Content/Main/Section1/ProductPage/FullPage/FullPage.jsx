import { useState, useEffect } from 'react';
import Page from '../Page/Page';
import PageNext from '../PageNext/PageNext';
import PagePrev from '../PagePrev/PagePrev';
import s from './FullPage.module.scss'

const FullPage = ({ first, second, third, updateProduct, product }) => {
    const [option, setOption] = useState(1)
    function increaseOption() {
        if (option < 3) {
            setOption(option + 1)
        }
        else setOption(1);

    }
    function decreaseOption() {
        if (option > 1) {
            setOption(option - 1)
        } else setOption(3)

    }



    return (
        <div className={s.fullpage}>
            {(() => {
                switch (product) {
                    case 1:
                        return (
                            <div className={s.fullpage}>
                                {(() => {
                                    switch (option) {
                                        case 1:
                                            return (
                                                <div>
                                                    <div className={s.current}>
                                                        <Page obj={second} updateProduct={updateProduct} />
                                                    </div>
                                                    <div className={s.prevandnext}>
                                                        <div className={s.prev}>
                                                            <PagePrev decreaseOption={decreaseOption} obj={first} />
                                                        </div>
                                                        <div className={s.next}>
                                                            <PageNext increaseOption={increaseOption} obj={third} />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        case 2:
                                            return (
                                                <div>
                                                    <div className={s.current}>
                                                        <Page obj={third} updateProduct={updateProduct} />
                                                    </div>
                                                    <div className={s.prevandnext}>
                                                        <div className={s.prev}>
                                                            <PagePrev decreaseOption={decreaseOption} obj={second} />
                                                        </div>
                                                        <div className={s.next}>
                                                            <PageNext increaseOption={increaseOption} obj={first} />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        case 3:
                                            return (
                                                <div>
                                                    <div className={s.current}>
                                                        <Page obj={first} updateProduct={updateProduct} />
                                                    </div>
                                                    <div className={s.prevandnext}>
                                                        <div className={s.prev}>
                                                            <PagePrev decreaseOption={decreaseOption} obj={third} />
                                                        </div>
                                                        <div className={s.next}>
                                                            <PageNext increaseOption={increaseOption} obj={second} />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                    }
                                })()}

                            </div>);
                    case 2:
                        return (
                            <div className={s.fullpage}>
                                {(() => {
                                    switch (option) {
                                        case 1:
                                            return (
                                                <div>
                                                    <div className={s.current}>
                                                        <Page obj={second} updateProduct={updateProduct} />
                                                    </div>
                                                    <div className={s.prevandnext}>
                                                        <div className={s.prev}>
                                                            <PagePrev decreaseOption={decreaseOption} obj={first} />
                                                        </div>
                                                        <div className={s.next}>
                                                            <PageNext increaseOption={increaseOption} obj={third} />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        case 2:
                                            return (
                                                <div>
                                                    <div className={s.current}>
                                                        <Page obj={third} updateProduct={updateProduct} />
                                                    </div>
                                                    <div className={s.prevandnext}>
                                                        <div className={s.prev}>
                                                            <PagePrev decreaseOption={decreaseOption} obj={second} />
                                                        </div>
                                                        <div className={s.next}>
                                                            <PageNext increaseOption={increaseOption} obj={first} />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        case 3:
                                            return (
                                                <div>
                                                    <div className={s.current}>
                                                        <Page obj={first} updateProduct={updateProduct} />
                                                    </div>
                                                    <div className={s.prevandnext}>
                                                        <div className={s.prev}>
                                                            <PagePrev decreaseOption={decreaseOption} obj={third} />
                                                        </div>
                                                        <div className={s.next}>
                                                            <PageNext increaseOption={increaseOption} obj={second} />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                    }
                                })()}

                            </div>);
                    case 3:
                        return <div className={s.fullpage}><div className={s.current}>
                            <Page obj={first} updateProduct={updateProduct} />
                        </div>
                            <div className={s.prevandnext}>
                                <div className={s.prev}>
                                    <PagePrev obj={third} />
                                </div>
                                <div className={s.next}>
                                    <PageNext obj={second} />
                                </div>
                            </div>
                        </div>;
                }
            })()}
            {/* <div className={s.current}>
                <Page obj={second} />
            </div>
            <div className={s.prevandnext}>
                <div onClick={() => updateProduct(2)} className={s.prev}>
                    <PagePrev obj={first} />
                </div>
                <div onClick={() => updateProduct(3)} className={s.next}>
                    <PageNext obj={third} />
                </div>
            </div> */}

        </div>
    );
}
export default FullPage;