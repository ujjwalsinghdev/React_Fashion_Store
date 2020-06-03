import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">

                    <ProductConsumer>

                        {(value) => (<div className="img-container p-5" onClick={() => { value.handleDetail(id) }} >
                            <Link to="/details">
                                <img src={img} alt="product image" className="card-img-top" />
                            </Link>
                            <button className="cart-btn" disabled={inCart ? true : false} onClick={() => { value.addToCart(id); value.openModal(id) }} >
                                {inCart ? (<p className="text-capitalize mb-0" disabled>Already InCart</p>) : (<span><i className="fas fa-cart-plus"></i>Add to Cart</span>)}
                            </button>
                        </div>)}


                    </ProductConsumer>

                    <div className="cart-footer d-flex justify-content-around">
                        <p className="align-self-center mb-2">{title}</p>
                        <h5 className="text-blue"><span className="mr-1">₹</span>{price}</h5>
                    </div>


                </div>
            </ProductWrapper>
        )
    }
}


Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool


    }).isRequired
}


const ProductWrapper = styled.div`
.card{
    border:transparent;
    transition:all .5s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all .5s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}

.img-container{
    position:relative;
    overflow:hidden;
}

.card-img-top{
    transition:all .5s linear;
}

.img-container:hover .card-img-top{
transform:scale(1.1);
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0rem 1rem;
    background:var(--lightBlue);
    border:none;
    color:white;
    border-radius:2px 0px 0px 2px;
    font-size:1.2rem;
    outline:none;
    transform: translate(100%,100%);
    transition:all .3s linear;

}

.img-container:hover .cart-btn{
transform:translate(0,0);
}

.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`



