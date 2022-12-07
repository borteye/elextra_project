import React from "react";
import "./CompareItems.css";
import Nintendo from "../../Assets/Nintendo.png";
import Mac from "../../Assets/Mac.png";



function CompareItems() {




    return (
        <div className="compare_similar_items">
            <div className="container">
                <div className="content">
                    <h1 className="title">Compare with similar items</h1>
                    <div className="products">
                        <div className="products_images">
                            <div className="product_one">
                            </div>
                            <div className="product_two">
                                <div className="image">
                                    <img src={Mac} alt="" />
                                </div>
                                <div className="details">
                                    The Nintendo Switch family is home
                                    to exclusive games from franchises
                                    like Super Smash Bros, The Legend
                                    of Zelda, Mario Kart, and many more
                                </div>
                                <button>Add To Cart</button>

                            </div>
                            <div className="product_three">
                                <div className="image">
                                    <img src={Nintendo} alt="" />
                                </div>
                                <div className="details">
                                    Nintendo Switch supports multiplayer
                                    gaming options of all kinds. You can play together
                                    online or in the same room using one system
                                    or multiple systems*. Specific features vary by game,
                                    such as voice chat or split-screen play, by sharing fun
                                    with friends and family is a key focus for Nintendo Switch
                                </div>
                                <button>Add To Cart</button>
                            </div>
                            <div className="product_four">
                                <div className="image">
                                    <img src={Nintendo} alt="" />
                                </div>
                                <div className="details">
                                    The Switch is the world's first hybrid console.
                                    It was the world's first hybrid console design, meaning
                                    it could be used with a television as well as being portable.
                                    The seperate screen means that when you are traveling, you can use
                                    the main monitor for play.
                                </div>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                        <div className="table">
                            <div className="row">
                                <div className="data">
                                    Customer Rating
                                </div>
                                <div className="data">
                                    Stars
                                </div>
                                <div className="data">
                                    Stars
                                </div>
                                <div className="data">
                                    Stars
                                </div>
                            </div>
                            <div className="row">
                                <div className="data">
                                    Customer Rating
                                </div>
                                <div className="data">
                                    Stars
                                </div>
                                <div className="data">
                                    Stars
                                </div>
                                <div className="data">
                                    Stars
                                </div>
                            </div>
                            <div className="row">
                                <div className="data">
                                    Customer Rating
                                </div>
                                <div className="data">
                                    Stars
                                </div>
                                <div className="data">
                                    Stars
                                </div>
                                <div className="data">
                                    Stars
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareItems;