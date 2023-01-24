import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { AuthContext } from '../../Context/authContext'
import { LanguageContext } from '../../Context/languageContext'
import { Container } from '../../globalStyle'
import { lang } from '../../lang/lang'
import { AuthorItem, AuthorItemText, AuthorItemTitle, Img } from '../Books/Books.style'
import { AuthorBooksText, InfoBox, MainImg, MainText, MainTitle, MainYearBox, MainYearText, MainYearTitle, RowBooks, RowMain } from './MainAuthor.style'

export const MainAuthor = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear"

    };
    const { til } = React.useContext(LanguageContext);

    const { id } = React.useContext(AuthContext);
    console.log(id);
    const state = useSelector(state => state.token);
    const [authBooks, setAuthBooks] = useState([]);
    const [auth, setAuth] = useState([]);
    const config = {
        headers: {
            Authorization: state.token,
        }
    }
    useEffect(() => {
        (
            () => {
                axios.get(`http://localhost:5001/author/books/${id}`, config).then(data => {
                    setAuthBooks(data.data)
                    return data.data
                }).catch(err => console.log(err))
            }
        )()
    }, []);

    useEffect(() => {
        (
            () => {
                axios.get(`http://localhost:5001/author/authorId/${id}`, config).then(data => {
                    setAuth(data.data)
                    return data.data
                }).catch(err => console.log(err))
            }
        )()
    }, [id]);

    return (
        <>
            <Container>
                <RowMain>
                    <MainImg width={505} height={691} src={`http://localhost:5001/${auth.image}`} alt="" />
                    <InfoBox>
                        <MainTitle>
                            {auth.first_name + ' ' + auth.last_name}
                        </MainTitle>
                        <MainText>
                            {auth.bio}
                        </MainText>
                        <MainYearBox>
                            <div>
                                <MainYearText>
                                    {lang[til].addAuthor.input3}
                                </MainYearText>
                                <MainYearTitle>
                                    {auth.date_of_birth + ' -'}
                                </MainYearTitle>
                                <MainYearText>
                                    {auth.country + ', Uzbekistan'}
                                </MainYearText>
                            </div>
                            <div>
                                <MainYearText>
                                    {lang[til].addAuthor.input4}
                                </MainYearText>
                                <MainYearTitle>
                                    {auth.date_of_death}
                                </MainYearTitle>
                                <MainYearText>
                                    {auth.country + ', Uzbekistan'}
                                </MainYearText>
                            </div>
                        </MainYearBox>
                    </InfoBox>
                </RowMain>
                <RowBooks>
                    <MainYearTitle>
                        {lang[til].home.mainTitle}
                    </MainYearTitle>
                    <AuthorBooksText to={'/Books'}>
                        {lang[til].home.mainLink}
                    </AuthorBooksText>
                </RowBooks>
                <RowBooks>
                    <Slider {...settings}>
                        <AuthorItem>
                            <Link to={'/Books'}><Img width={190} height={283} src={`http://localhost:5001/${authBooks[0]?.image}`} alt="" /></Link>
                            <AuthorItemTitle>{authBooks[0]?.title}</AuthorItemTitle>
                            <AuthorItemText>{auth.first_name + ' ' + auth.last_name}</AuthorItemText>
                        </AuthorItem>
                    </Slider>
                </RowBooks>
            </Container>
        </>
    )
}
