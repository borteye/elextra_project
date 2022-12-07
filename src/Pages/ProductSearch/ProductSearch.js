import React, { useState, useEffect } from "react";
import "./ProductSearch.css";
import ReactPaginate from "react-paginate";
import { ProductCategory } from "../../Data/SearchData";
import products from "../../Data/products";
import { ImList } from "react-icons/im";
import { BsFillGridFill } from "react-icons/bs";



const ProductSearch = ({ search }) => {

    const [listIcon, setListIcon] = useState(false);
    const [gridIcon, setGridIcon] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState(products);


    const productsPerPage = 9;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(data.length / productsPerPage);





    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }



    useEffect(() => {
        const filteredProducts = products.filter(
            (item => ((item.about).toLowerCase()).includes(search.toLowerCase()))


            // item.name === (`${search}`.toUpperCase()) ||
            // item.about === (`${search}`.toUpperCase())
        );

        setData(filteredProducts)
    }, [search])


    const displayProducts =
        data.slice(pagesVisited, pagesVisited + productsPerPage)
            // .filter(product => (product.toLowerCase()).includes(search.toLowerCase()))
            .map((item) => {

                return (
                    <div className={gridIcon ? "card_grid" : "card_list"} key={data.id}>
                        <div className={gridIcon ? "product_image_grid" : "product_image_list"}>
                            <img src={item.image} alt="" />
                        </div>
                        <div className={gridIcon ? "product_details_grid" : "product_details_list"}>
                            <div className={gridIcon ? "section_one_grid" : "section_one_list"}>
                                <div className="product_title">
                                    <strong>{item.title}</strong>
                                </div>
                                <div className={gridIcon ? "about_product_grid" : "about_product_list"}>
                                    {item.about}
                                </div>
                                <div className={gridIcon ? "product_rating_grid" : "product_rating_list"}>
                                    Stars
                                </div>
                                <div className="product_shipping">
                                    {item.shipping_days}
                                </div>
                            </div>
                            <div className={gridIcon ? "section_two_grid" : "section_two_list"}>
                                <div className="product_price">
                                    <b>{item.price}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })







    const listIconClick = () => {
        // e.preventDefault();
        setListIcon(true)
        setGridIcon(false)
    }
    const gridIconClick = () => {
        // e.preventDefault();
        setGridIcon(true)
        setListIcon(false)
    }

    // const screen = window.innerWidth(834);


    // if (screen) {
    //     setGridIcon(true);
    //     setListIcon(false);
    // }


    function PSProductWidget() {


        return (
            <>
                {displayProducts}
            </>
        )
    }

    return (
        <>
            <div className="product_search">
                <div className="container">
                    <div className="content">
                        <div className="header">
                            <h2>All {search}</h2>
                            <div className="viewType">
                                <p>185204 products found</p>
                                <div className="icons">
                                    <ImList
                                        onClick={() => listIconClick()}
                                        className={listIcon ? "list_icon icon_active" : "list_icon"}
                                    />
                                    <BsFillGridFill
                                        onClick={() => gridIconClick()}
                                        className={gridIcon ? "grid_icon icon_active" : "grid_icon"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={gridIcon ? "details_grid" : "details_list"}>
                            <PSProductWidget />
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

export default ProductSearch;