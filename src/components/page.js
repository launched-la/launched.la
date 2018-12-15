import React from 'react'

import styles from './page.module.css'

export default ({children}) => <div className={styles.page}>
  {children}
</div>