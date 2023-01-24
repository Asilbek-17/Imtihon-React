import React, { useRef, useState } from 'react'
import { RegisterBox } from '../../components/Form/Form.styled'
import { InputBox, Label, LinksBox, LinksItem, LinksProfile, ProCamera, ProfileBox, ProfileBtn, ProfileClose, ProfileForm, ProfileInp, ProfileInp2, ProfileText, ProfileTitle, ProImg } from './Profile.style'
import ProfileImg from '../../assets/images/Camera.svg'
import { AddImg } from '../AddBook/AddBook.style';
import CloseIcon from '../../assets/images/icons8-удалить.svg'
import { lang } from '../../lang/lang'
import { LanguageContext } from '../../Context/languageContext';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getUser } from '../../components/Redux/User/UserActions';

export const Profile = () => {
  const { til } = React.useContext(LanguageContext);
  const state = useSelector((state) => state.token)
  const user = useSelector((state) => state.user)
  const [image, setImage] = useState('');

  const name = useRef();
  const lastName = useRef();
  const phone = useRef();

  const imgValue = (props) => {
    setImage(props.target.files[0])
  }

  const AddAuthorsFn = (evt) => {
    evt.preventDefault();
    const newData = new FormData()
    newData.append('first_name', name.current.value)
    newData.append('last_name', lastName.current.value)
    newData.append('phone', phone.current.value)
    newData.append('image', image)

    const config = {
      headers: {
        Authorization: state.token,
      }
    }

    axios.put('http://localhost:5001/user/account', newData, config,)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

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
      console.log(data.data);
    }).catch(err => console.log(err))
  }

  return (
    <ProfileBox>
      <ProfileClose to={'/'}><img src={CloseIcon} alt="" /></ProfileClose>

      <LinksBox>
        <LinksItem to={'/Profile'}>{lang[til].setting.link1}</LinksItem>
        <LinksItem to={'/Profile/security'}>{lang[til].setting.link2}</LinksItem>
        <LinksItem to={'/Profile/settings'}>{lang[til].setting.link3}</LinksItem>
      </LinksBox>
      <ProfileForm onSubmit={(evt) => {
        AddAuthorsFn(evt)
        GetUserFN()
      }}>
        <Label>
          <ProImg width={175} height={175} src={`http://localhost:5001/${user.user.image}`} alt="" />
          <ProCamera width={50} height={50} src={ProfileImg} alt="" />
          <AddImg type="file" id='add-img' onChange={(evt) => {
            imgValue(evt)
            GetUserFN()
          }} required />
        </Label>
        <InputBox>
          <ProfileTitle>{lang[til].profile.title}</ProfileTitle>
          <label>
            <ProfileText>{lang[til].profile.label1}</ProfileText>
            <ProfileInp defaultValue={user.user.first_name} ref={name} required />
          </label>
          <label>
            <ProfileText>{lang[til].profile.label2}</ProfileText>
            <ProfileInp defaultValue={user.user.last_name} ref={lastName} required />
          </label>
          <label>
            <ProfileText>{lang[til].profile.label3}</ProfileText>
            <ProfileInp2 type={'tel'} defaultValue={user.user.phone} ref={phone} required />
          </label>
        </InputBox>
        <ProfileBtn type='submit' onClick={GetUserFN}>{lang[til].setting.button}</ProfileBtn>
      </ProfileForm>
    </ProfileBox>
  )
}
