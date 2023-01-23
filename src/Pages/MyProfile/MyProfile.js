import React from 'react'
import { RegisterBox } from '../../components/Form/Form.styled'
import { LinksBox, LinksItem, LinksProfile } from '../Profile/Profile.style'

export const MyProfile = () => {
  return (
    <RegisterBox>
    <LinksBox>
      <LinksItem to={'/Profile/my-profile'}>Profile</LinksItem>
      <LinksItem to={'/Profile/security'}>Security</LinksItem>
      <LinksItem to={'/Profile/settings'}>Settings</LinksItem>
    </LinksBox>
  </RegisterBox>
  )
}
