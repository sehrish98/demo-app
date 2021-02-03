import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    dropdown__style: {
      border: "1px solid rgb(238, 82, 82)",
      color: "rgb(238, 82, 82)",
      cursor: "pointer",
      borderRadius: "5px",
      whiteSpace: "pre",
    },
  })
);
function DropDownIcon() {
  const classes = useStyles();
  return (
    <p className={classes.dropdown__style}>
      <ArrowDropDownIcon fontSize="large" />
    </p>
  );
}

export default DropDownIcon;

// import React from "react";
// const DropDownIcon = ({ title, options, handleChange }) => {
//   return (
//     <div className="form-group ">
//       <label>{title}</label>
//       <select className="form-control" onChange={handleChange}>
//         {options &&
//           options.length > 0 &&
//           options.map((option) => <option>{option}</option>)}
//       </select>
//     </div>
//   );
// };

// export default DropDownIcon;