import React from 'react'
import { Menu, MenuItem, Tooltip } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Translate'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import UiButton from '@material-ui/core/Button'
import { useIntl } from '../../providers/IntlProvider'
import Fade from '@material-ui/core/Fade'

const LangageSwitcher = () => {
  const { formatMessage, locale, locales, setLocale } = useIntl()
  const [languageMenu, setLanguageMenu] = React.useState(null)
  const onOpen = (event) => {
    setLanguageMenu(event.currentTarget)
  }

  const onClose = () => {
    setLanguageMenu(null)
  }

  const onSelect = lang => () => {
    setLocale(lang)
    onClose()
  }

  return (
    <div>
      <Tooltip title={formatMessage({ id: 'app.changeLanguage' })} enterDelay={300}>
        <UiButton
          color="inherit"
          aria-owns="language-menu"
          aria-haspopup="true"
          onClick={onOpen}
          data-ga-event-category="header"
          data-ga-event-action="language"
        >
          <LanguageIcon />
          <span>
            {locales[locale]}
          </span>
          <ExpandMoreIcon fontSize="small" />
        </UiButton>
      </Tooltip>
      <Menu
        keepMounted
        TransitionComponent={Fade}
        id="language-menu"
        anchorEl={languageMenu}
        open={Boolean(languageMenu)}
        onClose={onClose}
      >
        {Object.entries(locales).map(([key, localeName]) => (
          <MenuItem
            data-no-link="true"
            key={key}
            selected={key === locale}
            lang={key}
            hrefLang={key}
            onClick={onSelect(key)}
          >
            {localeName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default LangageSwitcher
