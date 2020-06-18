import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl, StylesProvider} from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {countries} from "../../api";

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect( () => {
        const fetchCountries = async () => {
            setFetchedCountries(await countries); 
        }

        fetchCountries();

    }, [setFetchedCountries]);
    

    return(
        <FormControl className={StylesProvider.formControl}>
            <NativeSelect>
                <option value="global ">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;