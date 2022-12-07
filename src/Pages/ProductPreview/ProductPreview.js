import React, { useEffect, useState } from "react";
import "./ProductPreview.css";
import Nintendo from "../../Assets/Nintendo.png";
import Mac from "../../Assets/Mac.png";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import CompareItems from "../../Containers/CompareItems/CompareItems";
import ExploreItems from "../../Containers/ExploreItems/ExploreItems";
import { useNavigate, useParams } from 'react-router-dom';



function ProductPreview({ data }) {

    const [details, setDetails] = useState({});
    const [showDetails, setShowDetails] = useState(false);
    const [showPDetails, setShowPDetails] = useState(true);
    const [showSpecDetails, setShowSpecDetails] = useState(true);
    const [love, setLove] = useState(false);

    const likeProduct = () => {
        setLove(true);
    }
    const unlikeProduct = () => {
        setLove(false);
    }

    const openDetails = () => {
        setShowDetails(true);
    }

    const hideDetails = () => {
        setShowDetails(false);
    }

    const pductDetails = () => {
        setShowPDetails(true)
    }

    const hidepductDetails = () => {
        setShowPDetails(false)
    }

    const specDetails = () => {
        setShowSpecDetails(true);
    }

    const hidespecDetails = () => {
        setShowSpecDetails(false);
    }

    const navigate = useNavigate();

    const check_out = (e) => {
        e.preventDefault();
        navigate("/check-out")
    }

    const { id }: { id: string } = useParams();


    useEffect(() => {
        const getDetails = () => {
            data.map((item) => {
                if (item.id === id) {
                    return setDetails(item);
                }
            });
        }
        getDetails();

    }, [id])


    const images = [
        {
            id: 0,
            value: Mac

        },
        {
            id: 1,
            value: Nintendo

        },
        {
            id: 2,
            value: Mac

        }

    ]

    const [sliderData, setSliderData] = useState(images[0])


    const changeImage = (index) => {
        const slider = images[index];
        setSliderData(slider);
    }


    return (
        <div className="overall">
            <div className="product_preview">
                <div className="container">
                    <div className="content">
                        <div className="section_one">
                            <div className="item_preview">
                                <div className="main_view">
                                    <img src={sliderData.value} alt="" />
                                </div>
                                <div className="sub_views">
                                    {
                                        images.map((data, i) => {
                                            return (
                                                <img key={data.id} src={data.value} alt="" onClick={() => changeImage(i)} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="item_summary">
                                <div className="product_title" key={details.id}>
                                    <strong>{details.name}</strong>
                                </div>
                                <div className="ratings">
                                    Stars
                                    <hr />
                                </div>
                                <div className="product_price">
                                    $<strong>{details.price}</strong>.{details.price_decimal}
                                </div>
                                <div className="in_out_stock">
                                    In Stock
                                </div>
                                <div className="delivery_date">
                                    Delivery <b>{details.delivery_date}</b>
                                </div>
                                <div className="ships_sold">
                                    <div className="ships">
                                        Ships from:
                                        <p>{details.ships_from}</p>
                                    </div>
                                    <div className="sold">
                                        Sold by:
                                        <p>{details.sold_by}</p>
                                    </div>
                                </div>
                                <div className="add_to_cart">
                                    <button>Add To Cart</button>
                                </div>
                                <div className="buy_now">
                                    <button onClick={check_out}>Check Out</button>
                                </div>
                                <hr />
                                <div className="return_policy">
                                    Return policy: <a href="#">Eligible for Return,
                                        Refund and Replacement within 30
                                        days of receipt</a>
                                </div>
                                <div className="add_to_list">
                                    {
                                        love ? <BsFillHeartFill className="love" onClick={unlikeProduct} /> :
                                            <BsHeart className="love" onClick={likeProduct} />
                                    }

                                    Add to list
                                </div>
                            </div>
                        </div>
                        <div className="section_two">
                            <div className="title">
                                <b>About this item</b>
                                <div className="up_down">
                                    <BiChevronUp
                                        className={showDetails ? "up" : "up_hidden"}
                                        onClick={hideDetails} />
                                    <BiChevronDown
                                        className={showDetails ? "down_hidden" : "down"}
                                        onClick={openDetails} />
                                </div>
                            </div>
                            <hr />
                            <div className={showDetails ? "detail_sections_hidden" : "detail_sections"} >
                                <div className="product_details">
                                    <div className="title">
                                        Product Details
                                        <div className="up_down">
                                            <BiChevronUp
                                                className={showPDetails ? "up" : "up_hidden"}
                                                onClick={hidepductDetails} />
                                            <BiChevronDown
                                                className={showPDetails ? "down_hidden" : "down"}
                                                onClick={pductDetails} />
                                        </div>
                                    </div>
                                    <div
                                        className={showPDetails ? "product_details_section_hidden" : "product_details_section"}
                                    >
                                        <p>
                                            <b>{details?.preview_aboutProduct?.[0]?.preview_aboutProductHead}</b>
                                        </p>
                                        <ul>
                                            {
                                                details?.preview_aboutProduct?.[1]?.preview_aboutProductList?.map((liss) => {
                                                    return (
                                                        <li>{liss.list}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <hr />
                                </div>
                                <div className="product_specifications">
                                    <div className="title">
                                        {details?.preview_productSpecification?.[0]?.productSpecificationHead}
                                        <div className="up_down">
                                            <BiChevronUp
                                                className={showSpecDetails ? "up" : "up_hidden"}
                                                onClick={hidespecDetails} />
                                            <BiChevronDown
                                                className={showSpecDetails ? "down_hidden" : "down"}
                                                onClick={specDetails} />
                                        </div>
                                    </div>
                                    <div className={showSpecDetails ? "product_spec_section_hidden" : "product_spec_section"}>
                                        <ul>
                                            {
                                                details?.preview_productSpecification?.[1]?.productSpecificationList?.map((liss) => {
                                                    return (
                                                        <li>{liss.list}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <hr />
                                </div>
                                <div className="whats_in_the_box">
                                    <div className="title">{details?.preview_inBox?.[0]?.inBoxHead}</div>
                                    <ul>

                                        {
                                            details?.preview_inBox?.[1]?.inBoxList?.map((liss) => {
                                                return (
                                                    <li>{liss.list}</li>
                                                )
                                            })
                                        }

                                    </ul>
                                    <hr />
                                </div>
                                <div className="product_warranty">
                                    <div className="title">{details?.preview_Warranty?.[0]?.WarrantyHead}</div>
                                    <ul>
                                        {
                                            details?.preview_Warranty?.[1]?.WarrantyList?.map((liss) => {
                                                return (
                                                    <li>{liss.list}</li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                                <div className="report">
                                    <p>Report incorrect product information</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <CompareItems /> */}
            <ExploreItems />
        </div >
    )
}

export default ProductPreview;