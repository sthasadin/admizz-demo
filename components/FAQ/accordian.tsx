import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const FAQAccordian = (props: any) => {
  console.log(props);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={"+"}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          style={{ textTransform: "capitalize", fontFamily: "M1 PLUS 1P" }}
        >
          {props.data.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={{ fontFamily: "M1 PLUS 1P" }}>
          {props.data.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export { FAQAccordian };
