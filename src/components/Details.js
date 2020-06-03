import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button'


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue my-5">
                                    <h1>{title}</h1>

                                </div>
                            </div>

                            {/* Product info */}

                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img src={img} alt="" className="img-fluid" alt="product" />
                                </div>

                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Name:{title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mb-2 mt-3">made by: <span className="text-uppercase"></span>{company}</h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>₹</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                                      <p className="text-muted lead">{info}</p>

                                        {/* button */}

                                        <div>
                                            <Link to="/">
                                                <ButtonContainer>Back to product</ButtonContainer>
                                            </Link>

                                            <ButtonContainer cart onClick={() => { value.addToCart(id); value.openModal(id); }} disabled={inCart ? true : false} >
                                                {inCart ? 'inCart' : "add to card"}
                                            </ButtonContainer>
                                        </div>

                                    </p>

                                </div>
                            </div>



                            {/*end of Product info */}

                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
