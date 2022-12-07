import React, { useState } from "react";
import "./FlashDealsPage.css";
import { FlashData } from "../../Data/FlashData";
import ReactPaginate from "react-paginate";
import { MdBolt } from "react-icons/md";
import CountDown from "../../Components/CountDown/CountDown";


function FlashDealsPage() {


    const [pageNumber, setPageNumber] = useState(1);

    const productsPerPage = 9;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(FlashData.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayProducts = FlashData
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((data) => {
            return (
                <div className="card">
                    <div className="image">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="discount">
                        <div className="bolt">
                            <MdBolt />
                        </div>
                        <p>
                            {data.discount}
                        </p>
                    </div>
                    <div className="detials">
                        <div className="about">
                            {data.about}
                        </div>
                        <div className="price">
                            <div className="discount_price">
                                {data.discount_price}
                            </div>
                            <div className="original_price">
                                {data.original_price}
                            </div>
                        </div>
                        <div className="rating">
                            {data.rating}
                        </div>
                        <div className="add_to_cart">
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
            )
        })



    return (
        <>
            <div className="flashDealsPage">
                <div className="container">
                    <div className="content">
                        <div className="header">

                        </div>
                        <div className="title">
                            <div className="head">
                                Elextra Flash Sales
                            </div>
                            <div className="countDown">
                                <CountDown />
                            </div>
                        </div>
                        <div className="products_overall">
                            {displayProducts}
                        </div>
                        <div className="pagination">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"pagination_btns"}
                                previousLinkClassName={"previous_btns"}
                                nextLinkClassName={"next_btn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashDealsPage;