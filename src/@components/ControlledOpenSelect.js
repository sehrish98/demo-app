import {  makeStyles } from "@material-ui/core";
import React from "react";


import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
   
    formControl: {
      margin: theme.spacing(1),
    //   minWidth: 120,
      display: 'inline-block',
      position: "relative",
      top: "-38px",
      right: "-29px",
      height: "38px",
      border: "1px solid",
      margin: "0 !important",
    },
    selectWidth:{
        display:'inline-block',
        width:'120px !important',
        paddingRight:'-1px !important'
    },
    divDay:{
        display:'inline',
        padding:'0 10px',
        marginTop:'7px',
        borderRadius:'0 !important',
        justifyContent:'center',
        alignItems:'center'
    },
  }));
export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.divDay}>
     
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          className={classes.selectWidth}
        >
         
          <MenuItem value={10}>Monday</MenuItem>
          <MenuItem value={20}>Tuesday</MenuItem>
          <MenuItem value={30}>Wednesday</MenuItem>
          <MenuItem value={40}>Thursday</MenuItem>
          <MenuItem value={50}>Friday</MenuItem>
          <MenuItem value={60}>Saturday</MenuItem>
          <MenuItem value={70}>Sunday</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}