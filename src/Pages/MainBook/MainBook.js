import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { LanguageContext } from '../../Context/languageContext';
import { Container } from '../../globalStyle';
import { lang } from '../../lang/lang';
import { AuthorItem, AuthorItemText, AuthorItemTitle, Img } from '../Books/Books.style'
import { AuthorBooksText, InfoBox, MainImg, MainText, MainTitle, MainYearBox, MainYearText, MainYearTitle, RowBooks, RowMain } from '../MainAuthor/MainAuthor.style'
import { InfoBox1, MainBookBox, MainBookText, MainBookText1, MainBookText2, MoreText } from './MainBooks.style';
export const MainBook = () => {
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
  const books = useSelector(state => state.books.books);
  console.log(books[0].id);
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
        axios.get(`http://localhost:5001/author/books/${books[0]?.id}`, config).then(data => {
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
          <MainImg width={505} height={691} src={`http://localhost:5001/${books[0]?.image}`} alt="" />
          <InfoBox1>
            <MainTitle>{books[0].title}</MainTitle>
            <MainBookBox>
              <MainBookText>{lang[til].home.page}</MainBookText>
              <MainBookText1>{books[0].page} {lang[til].home.page4}</MainBookText1>
            </MainBookBox>
            <MainBookBox>
              <MainBookText>{lang[til].home.page1}</MainBookText>
              <MainBookText1>{books[0].year} {lang[til].home.page5}</MainBookText1>
            </MainBookBox>
            <MainBookBox>
              <MainBookText>{lang[til].home.page2}</MainBookText>
              <MainBookText1>${books[0].price}</MainBookText1>
            </MainBookBox>
            <MoreText>{lang[til].home.page3} ↓</MoreText>
            <MainBookText2>
            {books[0].description}
            </MainBookText2>
          </InfoBox1>
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
              <AuthorItemText>{authors[0]?.first_name + ' ' + authors[0]?.last_name}</AuthorItemText>
            </AuthorItem>
          </Slider>
        </RowBooks>
      </Container>
    </>
  )
}
