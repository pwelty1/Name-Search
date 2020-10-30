import React from 'react'
import {Paper, IconButton, InputBase, Grow} from '@material-ui/core';
import {Menu, Search} from '@material-ui/icons';
import { useGet } from "../../utils/_hooks"
import styles from './SearchBar.module.css'
import FilterSwitch from '../FilterSwitch/FilterSwitch';
import SearchResultsList from '../SearchResultList/SearchResultList';

export default function SearchBar() {
    const [settingsChecked, setSettingsChecked] = React.useState(false);
    const [substr, setSubstr] = React.useState(null);
    const [country, setCountry] = React.useState(null);
    const [numSyllables, setNumSyllables] = React.useState(null);
    const [numChars, setNumChars] = React.useState(null);

    const [countrySelected, setCountrySelected] = React.useState(false);
    const [numSyllablesSelected, setNumSyllablesSelected] = React.useState(false);
    const [numCharsSelected, setNumCharsSelected] = React.useState(false);

    var query_url = '/api/names?'

    

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
        if(e.target.value===""){
            setSubstr(null)
        }
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

    var namelist = [
        {
            "uuid": "d4c847ea-2ede-4c90-8d79-25a375a1ba92",
            "name": "Jesus",
            "meaning": "to deliver; to rescue.",
            "num_syllables": 2,
            "char_length": 5,
            "country": null,
            "source": {
                "uuid": "a233667e-ac77-466b-9152-a0f8ee912c29",
                "name": "The Bible"
            }
        },
        {
            "uuid": "8a8fb234-48ae-4f5a-ab81-018e292c3c8b",
            "name": "Peter",
            "meaning": "rock or stone",
            "num_syllables": 2,
            "char_length": 5,
            "country": {
                "uuid": "22c62f88-d576-45f6-807f-51ba126e1713",
                "name": "england",
                "language": "English"
            },
            "source": {
                "uuid": "a233667e-ac77-466b-9152-a0f8ee912c29",
                "name": "The Bible"
            }
        },
        {
            "uuid": "303e4e0c-683b-4d54-a40b-5ee55a4dcbc6",
            "name": "Aragorn",
            "meaning": "revered king",
            "num_syllables": 2,
            "char_length": 7,
            "country": null,
            "source": {
                "uuid": "0e5edb7a-1d4d-4601-bfd8-c0e77e6930b4",
                "name": "The Lord of The Rings"
            }
        }
    ]
    
    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.paper}>
                    <IconButton className={styles.iconButton} aria-label="menu" onClick={() => settingsChecked? setSettingsChecked(false) : setSettingsChecked(true)}>
                        <Menu/>
                    </IconButton>

                <InputBase className={styles.searchfield} value={substr} onChange={handleSubstrChange}/>
                <IconButton type="submit" aria-label="search">
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
                <SearchResultsList  list={namelist}/>
            </div> 

        </div>
    )
}
