import s from './ProductPage.module.scss'
import { Columbia, Tshirt, Jeans, Phone, Macbook, Airpods, Bag, Bag2, NapkinHolder, Cat, Car, Ball, Dumbbells, Barbell, Tennis, Shiseido, Marble, Payot } from '../../../../../state/Product0';
import Page from './Page/Page';
import FullPage from './FullPage/FullPage';
import { useState, useEffect } from 'react';

const ProductPage = ({ value }) => {


    const [product, setProduct] = useState(1)

    function updateProduct(e) {
        setProduct(e)
    }


    return (
        <div className={s.productPage}>
            {(() => {
                switch (value) {
                    case 0:
                        return <div>
                            <FullPage product={product} updateProduct={updateProduct} first={Tshirt} second={Columbia} third={Jeans} />
                        </div>;
                    case 1:
                        return <div>
                            <FullPage product={product} updateProduct={updateProduct} first={Phone} second={Macbook} third={Airpods} />
                        </div>;
                    case 2:
                        return <div>
                            <FullPage product={product} updateProduct={updateProduct} first={Bag} second={NapkinHolder} third={Bag2} />
                        </div>;
                    case 3:
                        return <div>
                            <FullPage product={product} updateProduct={updateProduct} first={Cat} second={Ball} third={Car} />
                        </div>;
                    case 4:
                        return <div>
                            <FullPage product={product} updateProduct={updateProduct} first={Dumbbells} second={Barbell} third={Tennis} />
                        </div>;
                    case 5:
                        return <div>
                            <FullPage product={product} updateProduct={updateProduct} first={Shiseido} second={Marble} third={Payot} />
                        </div>;
                }
            })()}

        </div>
    );
}
export default ProductPage;