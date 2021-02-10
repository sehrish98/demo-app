import { makeStyles } from "@material-ui/core";
import React, { useRef, useState, useEffect } from "react";

import DragHandleIcon from '@material-ui/icons/DragHandle';

import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
    divSize: {
        display: 'inline',
        color: 'gray',
        border: '1px solid rgb(214, 214, 214)',
        width: '40px !important',
        height: '38px',
        padding: '0 10px',
        marginTop: '7px',
        cursor: 'move',
        borderRadius: '0 !important',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divDay: {
        display: 'inline-block',
        border: '1px solid rgb(214, 214, 214)',
        width: '140px !important',
        height: '38px',
        padding: '0 10px',
        borderRadius: '0 !important',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '-38px',
        right: '-40px'
    },
    checkBox: {
        display: 'inline',
        position: 'relative',
        bottom: '83px',
        left: '460px',
        color: 'gray',
        border: '1px solid rgb(214, 214, 214)',
        width: '40px !important',
        height: '38px',
        padding: '0 10px',
        marginTop: '7px',
        borderRadius: '0 !important',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    butttons: {
        display: 'inline',
        color: 'gray',
        border: '1px solid rgb(214, 214, 214)',
        width: '40px !important',
        height: '38px',
        padding: '0 10px',
        borderRadius: '0 !important',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        bottom: "121px",
        left: "498px"
    },
    buttonDelete: {
        display: 'inline',
        color: 'gray',
        border: '1px solid rgb(214, 214, 214)',
        width: '40px !important',
        height: '38px',
        padding: '0 10px',
        borderRadius: '0 !important',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        bottom: "159px",
        left: "537px"
    }


})

export default function TimeSlot(props) {
    const classes = useStyles()
    const [input, setInput] = useState(true)
    let [time, setTime] = useState("09:00")
    let [close, setCloseTime] = useState("11:00")
    let [day, setDay] = useState(1)
    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const ref = useRef()
    useEffect(()=> {
        setTime(props.Open)
        setCloseTime(props.Close)
        setDay(props.Days)
        setInput(props.checked)

    },[props])
    // Monitor changes to position state and update DOM
    useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
    }, [position])

    // Update the current position if mouse is down
    const onMouseMove = (event) => {

        if (pressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            })
        }
    }
    function feildChangeopen(e) {
        setTime(e.target.value)

    }
    function feildChangeclose(e) {
        setCloseTime(e.target.value)

    }
    function handleChange() {
        if (input == true) {
            setInput(false)
        }
        else {
            setInput(true)
        }

    }
    function handleClick() {
         props.onDelete(props.id)
    }

    const copyDiv=()=> {
        console.log("props id",props.id);
        const obj = {
            openTime: time,
            closeTime: close,
            setInput: input,
            days: day
        }
        props.Copy(obj,props.id)
         
    }
    
    return (
        <div id={props.id} style={{ height: "31px" }} ref={ref}>
            <div className={classes.divSize} onMouseMove={onMouseMove}
                onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
            >
                <DragHandleIcon />
            </div>
            <select className={classes.divDay} onChange={(e) => { setDay(e.target.value) }} value={day}>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
                <option value="7">Sunday</option>

            </select>
            <input type="time" className={classes.divDay} value={time} disabled={input ? "" : "disabled"} onChange={feildChangeopen} />
            {/* <input className={classes.divDay} type="time" disabled={input?"":"disabled"}/> */}
            <input type="time" className={classes.divDay} value={close} disabled={input ? "" : "disabled"} onChange={feildChangeclose} />
            <div className={classes.checkBox}>
                <input type="checkbox" onChange={handleChange} checked={(!input)?"checked":""}/>
            </div>
            <div className={classes.butttons} onClick={copyDiv}>
                <FileCopyIcon />
            </div>
            <div className={classes.buttonDelete} onClick={handleClick}>
                <DeleteIcon />
            </div>

        </div>

    )

}