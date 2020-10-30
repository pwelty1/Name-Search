import { Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import styles from './Home.module.css'
export default function Home() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.blob}></div>
            <h1>Name Search</h1>
            <SearchBar/>

        </div>
        <div className={styles.fabContainer}>
        <Fab color="secondary" >
            <Add/>
        </Fab>
        </div>
        </>
    )
}
