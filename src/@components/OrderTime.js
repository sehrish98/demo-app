import React, { useState } from "react";
import { Typography, Switch } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      display: "flex",
      flexDirection: "column",
      padding: "13px",
      borderBottom: "1px dashed rgb(214, 214, 214)",
    },
    btn: {
      backgroundColor: "white",
      padding: "5px 10px 5px 10px",
      outline: "0",
      border: "1px solid gray",
      color: "gray",
      borderRadius: "3px",
    },
    des: {
      fontSize: "14px",
      color: "rgb(33, 33, 33)",
      paddingTop: "5px",
    },
    detail: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    typo: {
      fontWeight: "600"
    }
  })
);

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')`
  width: 300px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    font-size: 14px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`;

const Listbox = styled('ul')`
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;
const top100Films = [
  { title: 'Now', year: 1994 },
  { title: 'Later', year: 1972 },
  ]
function OrderTime({
  title,
  btnname,
  button,
  des,
  values,
  checked,
  dropdown,
  btn,
  handlechange,
  inputname,  
  type,
  req,
  onClick,
  options
}) {
  console.log(options)
  const [name, setName] = useState("");
  const classes = useStyles();
  
  return (
    <div elevation={3} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="p" className={classes.typo}>
          {title}
        </Typography>
        {button && <button className={classes.btn}>{btnname}</button>}
      </div>
      <div style={{ margin: "8px 0px" }}>
        {checked ? (
          <Switch />
        ) : btn ? (
          <CustomButton name={values} activ onClick={onClick}/>
        ) : dropdown ? (
      
        <select style={{width:"100%",borderRadius:"2px",height:"38px"}}>
                {options.map((item,i)=>{
                 return   <option value={i}>{item}</option>
               })}
                
                
          </select>
        ) : (
                <CustomInput
                  type={type}
                  values={values}
                  handlechange={handlechange}
                  name={inputname}
                  req
                />
              )}
      </div>
      <div>
        <Typography variant="p" className={classes.des}>
          {des}
        </Typography>
      </div>
    </div>
  );
}

export default OrderTime;
