import React from 'react'
import { LinksBox, LinksItem, ProfileBox, ProfileClose, ProfileInp, ProfileText, ProfileTitle } from '../Profile/Profile.style'
import { FormSecurity, SecurityBtn, SecurityTitle } from './Security.style'
import CloseIcon from '../../assets/images/icons8-удалить.svg'
import { LanguageContext } from '../../Context/languageContext'
import { lang } from '../../lang/lang'

export const Security = () => {
  const { til } = React.useContext(LanguageContext);

  return (
    <ProfileBox>
      <ProfileClose to={'/'}><img src={CloseIcon} alt="" /></ProfileClose>

      <LinksBox>
        <LinksItem to={'/Profile'}>{lang[til].setting.link1}</LinksItem>
        <LinksItem to={'/Profile/security'}>{lang[til].setting.link2}</LinksItem>
        <LinksItem to={'/Profile/settings'}>{lang[til].setting.link3}</LinksItem>
      </LinksBox>
      <FormSecurity>
        <SecurityTitle>{lang[til].security.title}</SecurityTitle>
        <label>
          <ProfileText>{lang[til].security.label1}</ProfileText>
          <ProfileInp type={'email'} />
        </label>
        <label>
          <ProfileText>{lang[til].security.label2}</ProfileText>
          <ProfileInp type={'password'} />
        </label>
        <label>
          <ProfileText>{lang[til].security.label2}</ProfileText>
          <ProfileInp type={'password'} />
        </label>
        <SecurityBtn type='submit'>{lang[til].setting.button}</SecurityBtn>
      </FormSecurity>
    </ProfileBox>
  )
}
