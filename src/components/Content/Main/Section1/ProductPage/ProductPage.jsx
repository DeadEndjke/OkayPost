import s from './ProductPage.module.scss'
import Products0 from '../../../../../state/Product0';
import Page from './Page/Page';
import { useEffect } from 'react';

const ProductPage = ({ value }) => {
    function renderSwitch(param) {
        switch (param) {
            case 0: {
                {
                    Products0.map((products) => (
                        <Page key={products.id} title={products.title} />
                    ))
                };
            }
            default:
                return 'foo';
        }
    }
    useEffect(() => { renderSwitch(value) }, [])


    return (
        <div className={s.productPage}>
            renderSwitch(value)

        </div>
    );
}
export default ProductPage;