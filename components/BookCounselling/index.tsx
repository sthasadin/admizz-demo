import React from "react";
import { Button } from "../Button";
import { useRouter } from 'next/router'

const BookCounseling = (props: any) => {
  const router = useRouter();
  return (
    <div className="book-counseling">
      <div className="book-counseling__header">
        Didn’t find your answer to your question?
            </div>
      <div className="book-counseling__message">
        Get in touch with us for details on admissions and application process for scholarship processing.
            </div>
      <Button onClick={() => router.push('/free-counseling')}>Book a Counseling Session</Button>
    </div>
  );
};

export { BookCounseling };
