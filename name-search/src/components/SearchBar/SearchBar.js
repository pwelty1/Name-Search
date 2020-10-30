import React from 'react'
import {Paper, IconButton, InputBase, Grow} from '@material-ui/core';
import {Menu, Search} from '@material-ui/icons';
import { useGet } from "../../utils/_hooks"
import axios from 'axios'
import styles from './SearchBar.module.css'
import FilterSwitch from '../FilterSwitch/FilterSwitch';
import SearchResultsList from '../SearchResultList/SearchResultList';

export default function SearchBar() {
    const [settingsChecked, setSettingsChecked] = React.useState(false);
    const [substr, setSubstr] = React.useState("");
    const [country, setCountry] = React.useState(null);
    const [numSyllables, setNumSyllables] = React.useState(null);
    const [numChars, setNumChars] = React.useState(null);
    const [names, setNames] = React.useState([])

    const [countrySelected, setCountrySelected] = React.useState(false);
    const [numSyllablesSelected, setNumSyllablesSelected] = React.useState(false);
    const [numCharsSelected, setNumCharsSelected] = React.useState(false);

    // const {data: nameData} = useGet('/api/names?search=a')
    // const names = nameData && nameData.data ? nameData.data : []
    // console.log(names)
    const handleSyllableChange = e => {
        console.log(e.target.value)
        setNumSyllables(e.target.value)
    }

    const handleNumCharChange = e => {
        console.log(e.target.value)
        setNumChars(e.target.value)
    }

    const handleSubstrChange = e => {
        console.log(e.target.value)
        setSubstr(e.target.value)
    }

    const handleCountryChange = e => {
        console.log(e.target.value)
        setCountry(e.target.value)
    }

    const settingCountrySelected = (bool) => {
        setCountrySelected(bool)
    }

    const settingSyllablesSelected = (bool) => {
        setNumSyllablesSelected(bool)
    }

    const settingNumCharsSelected = (bool) => {
        setNumCharsSelected(bool)
    }

    const handleSubmit = async () => {
        let query_url = '/api/names?search=' + substr
        let names_list = {}
        if(countrySelected){
            query_url = query_url + '&countryName='+ country
            names_list = await axios.get(query_url)
            // console.log(names_list.data.data)
            setNames(names_list.data.data)
            return 
        }
        if(numSyllablesSelected){
            query_url = query_url + '&numSyllables='+ numSyllables
            names_list = await axios.get(query_url)
            //console.log(names_list.data.data)
            setNames(names_list.data.data)
            return
        }
        if(numCharsSelected){
            query_url = query_url + '&charLength='+ numChars
            names_list = await axios.get(query_url)
            console.log(names_list.data.data)
            setNames(names_list.data.data)
            return
        }
        names_list = await axios.get(query_url)
        console.log(names_list.data.data)
        setNames(names_list.data.data)
        return


    }

    
    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.paper}>
                    <IconButton className={styles.iconButton} aria-label="menu" onClick={() => settingsChecked? setSettingsChecked(false) : setSettingsChecked(true)}>
                        <Menu/>
                    </IconButton>

                <InputBase className={styles.searchfield} value={substr} onChange={handleSubstrChange}/>
                <IconButton type="submit" aria-label="search" onClick={handleSubmit}>
                    <Search />
                </IconButton>
            </Paper>
            {settingsChecked  ? (
                <Grow in={settingsChecked}>
                    <Paper elevation={3} className={styles.settingspaper}>
                        Search By:
                        <FilterSwitch 
                            label="Country" 
                            textfieldLabel="ex. England" 
                            value={country} 
                            output={handleCountryChange}
                            check={countrySelected}
                            setCheck={settingCountrySelected}/>
                        <FilterSwitch 
                            label="Number of Syllables" 
                            textfieldLabel="Number" 
                            textfieldType="number" 
                            value={numSyllables} 
                            output={handleSyllableChange}
                            check={numSyllablesSelected}
                            setCheck={settingSyllablesSelected} />
                        <FilterSwitch 
                            label="Number of Charaters" 
                            textfieldLabel="Number" 
                            textfieldType="number" 
                            value={numChars} 
                            output={handleNumCharChange}
                            check={numCharsSelected}
                            setCheck={settingNumCharsSelected}/>
                    </Paper>
                </Grow>
            ) :(
                <>
                </>
            )}
            <div 
                className={styles.searchResultContainer} 
                style={{height: 500}}> 
                <SearchResultsList  list={names}/>
            </div> 

        </div>
    )
}
