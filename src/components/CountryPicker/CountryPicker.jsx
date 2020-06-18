import React, {useState, useEffeect} from "react";
import {NativeSelect, FormControl, StylesProvider} from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = () => {
    return(
        <FormControl className={StylesProvider.formControl}>
            <NativeSelect>
                <option value="global ">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;