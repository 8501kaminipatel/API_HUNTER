import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function SingleProductPage() {
    const [value, setvalue] = useState(null);
    const { id } = useParams();

    const handleGet = () => {
        axios
            .get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
            .then(response => {
                setvalue(response.data.data);

            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        handleGet();
    }, [id]);

    return (
        <div data-testid="products-container">
            <div>
                <h3 data-testid="product-brand">{value?.brand}</h3>
            </div>
            <div >
                <img data-testid="product-image" />
                <img src={value?.img} />
            </div>
            <div data-testid="product-category">
                {value?.category}
            </div>

            <div data-testid="product-details">
                {value?.details}
            </div>
            <div data-testid="product-price">
                {value?.price}
            </div>

        </div>
    )
}
export default SingleProductPage