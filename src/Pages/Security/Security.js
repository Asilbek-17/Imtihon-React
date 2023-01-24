import { LinksBox, LinksItem, ProfileBox, ProfileClose, ProfileInp, ProfileText, ProfileTitle } from '../Profile/Profile.style';
import { FormSecurity, SecurityBtn, SecurityTitle } from './Security.style';
import CloseIcon from '../../assets/images/icons8-удалить.svg';
import { LanguageContext } from '../../Context/languageContext';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lang } from '../../lang/lang';
import axios from 'axios';
import { getUser } from '../../components/Redux/User/UserActions';

export const Security = () => {
  const { til } = React.useContext(LanguageContext);
  const state = useSelector((state) => state.token)
  const user = useSelector((state) => state.user)

  const email = useRef();
  const password = useRef();
  const newPassword = useRef();

  const AddAuthorsFn = (evt) => {
    evt.preventDefault();
    const newData = new FormData()
    newData.append('email', email.current.value)
    newData.append('currentPassword', password.current.value)
    newData.append('newPassword', newPassword.current.value)

    const config = {
      headers: {
        Authorization: state.token,
      }
    }

    axios.put('http://localhost:5001/user/security', newData, config,)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    password.current.value = '';
    newPassword.current.value = '';
  }

  const dispatch = useDispatch();

  const config2 = {
    headers: {
      Authorization: state.token,
    }
  }

  const GetUserFN = () => {
    axios.get(`http://localhost:5001/user/me`, config2).then(data => {
      dispatch(getUser(data.data))
    }).catch(err => console.log(err))
  }

  return (
    <ProfileBox>
      <ProfileClose to={'/'}><img src={CloseIcon} alt="" /></ProfileClose>

      <LinksBox>
        <LinksItem to={'/Profile'} onClick={GetUserFN} >{lang[til].setting.link1}</LinksItem>
        <LinksItem to={'/Profile/security'} onClick={GetUserFN} >{lang[til].setting.link2}</LinksItem>
        <LinksItem to={'/Profile/settings'} onClick={GetUserFN} >{lang[til].setting.link3}</LinksItem>
      </LinksBox>
      <FormSecurity onSubmit={(evt) => {
        AddAuthorsFn(evt)
        GetUserFN()
      }}>
        <SecurityTitle>{lang[til].security.title}</SecurityTitle>
        <label>
          <ProfileText>{lang[til].security.label1}</ProfileText>
          <ProfileInp type={'email'} ref={email} onClick={GetUserFN} defaultValue={user.user.email} required />
        </label>
        <label>
          <ProfileText>{lang[til].security.label2}</ProfileText>
          <ProfileInp type={'password'} ref={password} required />
        </label>
        <label>
          <ProfileText>{lang[til].security.label2}</ProfileText>
          <ProfileInp type={'password'} ref={newPassword} required />
        </label>
        <SecurityBtn type='submit' onClick={GetUserFN}>{lang[til].setting.button}</SecurityBtn>
      </FormSecurity>
    </ProfileBox>
  )
}
