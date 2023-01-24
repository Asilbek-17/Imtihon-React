import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { BookContext } from '../../Context/bookContext';
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
    autoplaySpeed: 2000,
    cssEase: "linear"

  };

  const { til } = React.useContext(LanguageContext);


  const state = useSelector(state => state.token);
  const books = useSelector(state => state.books.books[0]);
  console.log(books);
  const [authBooks, setAuthBooks] = useState([]);
  const { id } = React.useContext(BookContext);
  const [book, setBook] = useState([]);
  const config = {
    headers: {
      Authorization: state.token,
    }
  }
  useEffect(() => {
    (
      () => {
        axios.get(`http://localhost:5001/book/genreId/${books.genre_id}`, config).then(data => {
          setAuthBooks(data.data)
          return data.data
        }).catch(err => console.log(err))
      }
    )()
  }, []);

  useEffect(() => {
    (
      () => {
        axios.get(`http://localhost:5001/book/bookId/${id}`, config).then(data => {
          setBook(data.data)
          return data.data
        }).catch(err => console.log(err))
      }
    )()
  }, [id]);
  return (
    <>
      <Container>
        <RowMain>
          <MainImg width={505} height={691} src={`http://localhost:5001/${book?.image}`} alt="" />
          <InfoBox1>
            <MainTitle>{book.title}</MainTitle>
            <MainBookBox>
              <MainBookText>{lang[til].home.page}</MainBookText>
              <MainBookText1>{book.page} {lang[til].home.page4}</MainBookText1>
            </MainBookBox>
            <MainBookBox>
              <MainBookText>{lang[til].home.page1}</MainBookText>
              <MainBookText1>{book.year} {lang[til].home.page5}</MainBookText1>
            </MainBookBox>
            <MainBookBox>
              <MainBookText>{lang[til].home.page2}</MainBookText>
              <MainBookText1>${book.price}</MainBookText1>
            </MainBookBox>
            <MoreText>{lang[til].home.page3} ↓</MoreText>
            <MainBookText2>
              {book.description}
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
            {
              authBooks.map(item => {
                return (
                  <AuthorItem>
                    <Link to={'/Books'}><Img width={190} height={283} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                    <AuthorItemTitle>{item.title}</AuthorItemTitle>
                  </AuthorItem>
                )
              })
            }
          </Slider>
        </RowBooks>
      </Container>
    </>
  )
}
