import React from 'react'
import { RegisterBox } from '../../components/Form/Form.styled'
import { InputBox, LinksBox, LinksItem, LinksProfile, ProfileBox, ProfileBtn, ProfileClose, ProfileForm, ProfileInp, ProfileInp2, ProfileText, ProfileTitle } from './Profile.style'
import ProfileImg from '../../assets/images/profile-img.png'
import { AddImg } from '../AddBook/AddBook.style';
import CloseIcon from '../../assets/images/icons8-удалить.svg'
import { lang } from '../../lang/lang'
import { LanguageContext } from '../../Context/languageContext';

export const Profile = () => {
  const { til } = React.useContext(LanguageContext);
  return (
    <ProfileBox>
      <ProfileClose to={'/'}><img src={CloseIcon} alt="" /></ProfileClose>

      <LinksBox>
        <LinksItem to={'/Profile'}>{lang[til].setting.link1}</LinksItem>
        <LinksItem to={'/Profile/security'}>{lang[til].setting.link2}</LinksItem>
        <LinksItem to={'/Profile/settings'}>{lang[til].setting.link3}</LinksItem>
      </LinksBox>
      <ProfileForm>
        <label>
          <img src={ProfileImg} alt="" />
          <AddImg type="file" id='add-img' />
        </label>
        <InputBox>
          <ProfileTitle>{lang[til].profile.title}</ProfileTitle>
          <label>
            <ProfileText>{lang[til].profile.label1}</ProfileText>
            <ProfileInp />
          </label>
          <label>
            <ProfileText>{lang[til].profile.label2}</ProfileText>
            <ProfileInp />
          </label>
          <label>
            <ProfileText>{lang[til].profile.label3}</ProfileText>
            <ProfileInp2 type={'tel'} />
          </label>
        </InputBox>
        <ProfileBtn type='submit'>{lang[til].setting.button}</ProfileBtn>
      </ProfileForm>
    </ProfileBox>
  )
}
