import { AccordionSummary, Avatar } from '@mui/material'
import React from 'react'
import { Container } from '../../globalStyle'
import { Accordion1, AccordionDetails1, AccordionLink, LinkStyle, Logo, Row } from './Header.style';
import IconArrow from '../../assets/images/icons8-развернуть-50.svg'
import { Route, Routes } from 'react-router-dom';
import { MyProfile } from '../../Pages/MyProfile/MyProfile';
import { Security } from '../../Pages/Security/Security';
import { Settings } from '../../Pages/Settings/Settings';
import { LanguageContext } from '../../Context/languageContext';
import { lang } from '../../lang/lang';

export const Header = () => {
    const { til } = React.useContext(LanguageContext);

    return (
        <header>
            <Container>
                <Row>
                    <Logo to={'/'}>Badiiyat</Logo>
                    <LinkStyle to={'/'}>{lang[til].home.link1}</LinkStyle>
                    <LinkStyle to={'/Books'}>{lang[til].home.link2}</LinkStyle>
                    <Accordion1>
                        <AccordionSummary

                            expandIcon={<img width={15} height={15} src={IconArrow} alt="" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <>
                                <Avatar alt='Asilbek Bozorboyev' src='asf' />
                            </>
                        </AccordionSummary>
                        <AccordionDetails1>
                            <AccordionLink to={'/Profile'}>{lang[til].setting.link1}</AccordionLink>
                            <AccordionLink to={'/Add-author'}>{lang[til].addAuthor.title}</AccordionLink>
                            <AccordionLink to={'/Add-books'}>{lang[til].addBook.title}</AccordionLink>
                            <AccordionLink onClick={() => {
                                window.location.reload()
                                localStorage.removeItem('token')
                            }}>{lang[til].home.link3}</AccordionLink>
                        </AccordionDetails1>
                    </Accordion1>
                </Row>
            </Container>
            <Routes>
                <Route path='/Profile' element={<MyProfile />} />
                <Route path='/Profile/security' element={<Security />} />
                <Route path='/Profile/settings' element={<Settings />} />
            </Routes>
        </header>
    )
}