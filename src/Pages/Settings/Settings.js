import { LinksBox, LinksItem, ProfileBox, ProfileClose, ProfileText } from '../Profile/Profile.style'
import { SecurityBtn, SecurityTitle } from '../Security/Security.style'
import { SettingBox, SettingSelect } from './Settings.style'
import * as React from 'react';
import Switch from '@mui/material/Switch';
import CloseIcon from '../../assets/images/icons8-удалить.svg'
import { LanguageContext } from '../../Context/languageContext';
import { lang } from '../../lang/lang';
import { DarckModeContext } from '../../Context/DarckModeContext';

export const Settings = () => {
  const language = React.useRef();
  const mode = React.useRef();

  const { til, setTil } = React.useContext(LanguageContext);

  const [checked, setChecked] = React.useState(true);
  const { theme, setTheme } = React.useContext(DarckModeContext);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    setTil(language.current.value)
    if(checked) {
      setTheme('dark')
    } else {
      setTheme('white')
    }
    console.log(checked);
  }
  return (
    <ProfileBox>

      <ProfileClose to={'/'}><img src={CloseIcon} alt="" /></ProfileClose>
      <LinksBox>
        <LinksItem to={'/Profile'}>{lang[til].setting.link1}</LinksItem>
        <LinksItem to={'/Profile/security'}>{lang[til].setting.link2}</LinksItem>
        <LinksItem to={'/Profile/settings'}>{lang[til].setting.link3}</LinksItem>
      </LinksBox>
      <SettingBox onSubmit={onSubmit}>
        <SecurityTitle>{lang[til].setting.title}</SecurityTitle>
        <label>
          <ProfileText>{lang[til].setting.label1}</ProfileText>
          <SettingSelect ref={language}>
            <option value="en" selected>{lang[til].setting.select}</option>
            <option value="en" >English</option>
            <option value="ru">Russian</option>
            <option value="uz">Uzbek</option>
          </SettingSelect>
        </label>
        <label>
          <ProfileText>{lang[til].setting.label2}</ProfileText>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </label>
        <SecurityBtn type='submit'>{lang[til].setting.button}</SecurityBtn>
      </SettingBox>
    </ProfileBox>
  )
}
