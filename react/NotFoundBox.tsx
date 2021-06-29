import React from 'react'
import { Box, Button } from 'vtex.styleguide'
import { Link } from 'vtex.render-runtime'

import styles from './global.module.css'
import { FormattedMessage } from 'react-intl'

const ALL_APPS_PATH = '/all-apps'

const NotFoundBox = () => {
  return (
    <div className={styles.notFoundBox}>
      <Box noPadding={true}>
        <div className="flex flex-column bg-white pa8">
          <h2 className="flex center mid-gray b mb0">
            <FormattedMessage id="store/not-found-box-title" />
          </h2>
          <p className="flex center gray">
            <FormattedMessage id="store/not-found-box-text" />
          </p>
          <div className="flex center pt4">
            <Link to={ALL_APPS_PATH}>
              <Button size="regular" variation="primary">
                <FormattedMessage id="store/not-found-button" />
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default NotFoundBox
