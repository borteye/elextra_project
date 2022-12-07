import React from "react";
import "./ReturnPolicy.css";
import { IoClose } from "react-icons/io5";

function ReturnPolicy({ setReturnPolicy }) {

    const hidereturnPoli = () => {
        setReturnPolicy(false);
    }
    return (
        <div className="return_policy">
            <div className="overlay">
                <div className="content">
                    <div className="policy_header">
                        RETURN POLICY
                    </div>
                    <div className="policy">
                        <p>
                            You may return the unused item in its original
                            packaging within 60 days unless noted above.
                            Item must be unused and returned in its original
                            packaging. A refund of the merchandise and taxes will be given
                            however shipping and handling for the delivery and
                            pick up will not be refunded. Refunds will be issued
                            in the same method of payment as the original payment.
                            ie. A purchase made with a credit card: a refund will
                            be issued to the original account. Please note that we
                            may request for your email/send pictures of damaged or defective merchandise.
                        </p>
                    </div>
                    <div className="close_policy" onClick={hidereturnPoli}>
                        <IoClose />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ReturnPolicy;