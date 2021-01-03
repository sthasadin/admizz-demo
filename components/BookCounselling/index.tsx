import React from "react";
import { Button } from "../Button";

const BookCounseling = (props: any) => {
    return (
        <div className="book-counseling">
            <div className="book-counseling__header">
                Didn’t find your answer to your question?
            </div>
            <div className="book-counseling__message">
                Get in touch with us for details on admissions and application process for scholarship processing.
            </div>
            <Button > Book a Counseling Session</Button>
        </div>
    );
};

export { BookCounseling };
