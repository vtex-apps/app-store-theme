import React from 'react'
import { Box, Button } from 'vtex.styleguide'

import styles from './global.module.css'

const NotFoundBox = () => {
  return (
		<div className={styles.notFoundBox}>
			<Box noPadding={true}>
        <div className="flex flex-column bg-white pa8">
          <h2 className="flex center mid-gray b mb0">App unavailable for this currency</h2>
          <p className="flex center gray">
            Try changing currency or choose another similar app from the same category
          </p>
          <div className="flex center pt4">
            <Button>
               Back to Store
            </Button>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default NotFoundBox
