import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
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


    const authors = useSelector(state => state.author.authors);
    const state = useSelector(state => state.token);
    const [authBooks, setAuthBooks] = useState([]);
    const config = {
        headers: {
            Authorization: state.token,
        }
    }
    useEffect(() => {
        (
            () => {
                axios.get(`http://localhost:5001/author/books/${authors[0].id}`, config).then(data => {
                    setAuthBooks(data.data)
                    return data.data
                }).catch(err => console.log(err))
            }
        )()
    }, []);



    return (
        <>
            <Container>
                <RowMain>
                    <MainImg width={505} height={691} src={`http://localhost:5001/${authors[0].image}`} alt="" />
                    <InfoBox>
                        <MainTitle>
                            {authors[0].first_name + ' ' + authors[0].last_name}
                        </MainTitle>
                        <MainText>
                            {authors[0].bio}
                        </MainText>
                        <MainYearBox>
                            <div>
                                <MainYearText>
                                {lang[til].addAuthor.input3}
                                </MainYearText>
                                <MainYearTitle>
                                    {authors[0].date_of_birth + ' -'}
                                </MainYearTitle>
                                <MainYearText>
                                    {authors[0].country + ', Uzbekistan'}
                                </MainYearText>
                            </div>
                            <div>
                                <MainYearText>
                                {lang[til].addAuthor.input4}
                                </MainYearText>
                                <MainYearTitle>
                                    {authors[0].date_of_death}
                                </MainYearTitle>
                                <MainYearText>
                                    {authors[0].country + ', Uzbekistan'}
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
                            <AuthorItemText>{authors[0].first_name + ' ' + authors[0].last_name}</AuthorItemText>
                        </AuthorItem>
                    </Slider>
                </RowBooks>
            </Container>
        </>
    )
}
