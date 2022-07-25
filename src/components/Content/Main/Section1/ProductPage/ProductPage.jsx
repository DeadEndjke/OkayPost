import s from './ProductPage.module.scss'
import Products0 from '../../../../../state/Product0';
import Page from './Page/Page';

const ProductPage = ({ value }) => {



    return (
        <div className={s.productPage}>
            {(() => {
                switch (value) {
                    case 0:
                        return <div>{Products0.map((products) => (
                            <Page key={products.id} img={products.img} title={products.title} ruprice={products.ruprice} ukprice={products.ukprice} />
                        ))}</div>;
                    case 2:
                        return <div>2</div>;
                    case 3:
                        return <div>3</div>;
                }
            })()}

        </div>
    );
}
export default ProductPage;