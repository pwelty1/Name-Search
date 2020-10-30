import React, {useState} from 'react';
import { Paper } from '@material-ui/core';
import styles from './SearchResultList.module.css'
import {AutoSizer, List} from 'react-virtualized'

export default function SearchResultList({list}) {
  const rowRenderer = ({index, key, style}) => {
    const item = list[index]
    return (
      <div
        key={key}
        style={style}
        className={styles.item}
      >
        <Paper elevation={2} className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.primaryText}>{item.name}</h3>
          <p className={styles.secondaryText}>Meaning: {item.meaning}</p>
          <p className={styles.secondaryText}>Country of Origin: {item.country !== null? item.country.name : "none"}</p>
          <p className={styles.secondaryText}>Source: {item.source !== null? item.source.name : "none"}</p>
        </div>
        </Paper>
      </div>
    )
  }
  if(list.length < 1)
    return (<div className={styles.emptyList}>No Names found</div>)


    return (
    <AutoSizer>
      {({width, height}) => (
        <List
          width={width}
          height={height}
          rowCount={list.length}
          rowHeight={100}
          rowWidth={width-8}
          rowRenderer={rowRenderer}
          className={styles.list}
        />
      )}
    </AutoSizer>
    )
}
