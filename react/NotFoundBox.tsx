import React from 'react'
import { Box } from 'vtex.styleguide'

import styles from './global.module.css'

const NotFoundBox = () => {
  return (
		<div className={styles.notFoundBox}>
			<Box title="App unavailable for this currency">
				<div className="mid-gray">
					Test
        </div>
			</Box>
		</div>
	)
}

export default NotFoundBox
