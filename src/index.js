import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const PrimaryButton = ({text}) => {
  return <a className={`${styles.button} ${styles.primary}`}>{text}</a>
}

export const SecondaryButton = ({text}) => {
  return <a className={`${styles.button} ${styles.secondary}`}>{text}</a>
}

export const TertiaryButton = ({text}) => {
  return <a className={`${styles.button} ${styles.tertiary}`}>{text}</a>
}

export const BluesButton = ({text}) => {
  return <a className={`${styles.button} ${styles.blues}`}>{text}</a>
}
