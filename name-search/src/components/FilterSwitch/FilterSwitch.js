import { FormControlLabel, Grow, Switch, TextField } from '@material-ui/core';
import React from 'react'
import styles from './FilterSwitch.module.css'
export default function FilterSwitch({label, textfieldLabel, textfieldType, value, output, check, setCheck}) {
    return (

        
        <div className={styles.container}>
            <FormControlLabel
                control={<Switch checked={check} onClick={() => check? setCheck(false) : setCheck(true)} />}
                label={label}
            />
            <Grow in={check}>
            <TextField
                label={textfieldLabel}
                type={textfieldType}
                variant="outlined"
                value={value}
                className={styles.textfield}
                onChange={output}
                color="secondary"
            />
            </Grow>
        </div>
    )
}
