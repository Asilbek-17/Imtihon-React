import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SimpleSlider from '../../components/Carusel/Carusel';
import { booksSuccess } from '../../components/Redux/Books/BooksActions';
import { Search } from '../../components/Search2/Search';
import { LanguageContext } from '../../Context/languageContext';
import { Container } from '../../globalStyle'
import { lang } from '../../lang/lang';
import { AuthorItem, AuthorItemText, AuthorItemTitle, AuthorList, BtnBox, CategoryBtn, HomeBox, HomeTitle, Img } from './Books.style'

export const Books = () => {
  const state = useSelector((state) => state.token)
  const dispatch = useDispatch();
  const books = useSelector(state => state);
  const [btn, setBtn] = useState('');
  const [authorId, setAuthorId] = useState('');
  const config2 = {
    headers: {
      Authorization: state.token,
    }
  }

  function categorySort(evt) {
    if (evt.target.matches('button')) {
      axios.get(`http://localhost:5001/book/genreId/${evt.target.value}`).then(data => {
        dispatch(booksSuccess(data.data))
      }).catch(err => console.log(err))
    }
  }

  function authorIdFn(evt) {
    axios.get(`http://localhost:5001/author/authorId/${evt}`, config2).then(data => {
      setAuthorId(data.data.first_name + ' ' + data.data.last_name)
    }).catch(err => console.log(err))
  }
  const { til } = React.useContext(LanguageContext);


  return (
    <Container>
      <SimpleSlider />
      <Search />
      <HomeBox>
        <HomeTitle>{lang[til].home.title}</HomeTitle>
        <BtnBox onClick={categorySort}>
          <CategoryBtn value={`1`} onClick={(evt) => {
            authorIdFn(Number(evt.target.value) + 1)
            setBtn(evt.target.value)
          }}>Temuriylar davri </CategoryBtn>
          <CategoryBtn value={`2`} onClick={(evt) => {
            authorIdFn(Number(evt.target.value) + 1)
            setBtn(evt.target.value)
          }}>Jadid adabiyoti </CategoryBtn>
          <CategoryBtn value={`3`} onClick={(evt) => {
            authorIdFn(Number(evt.target.value) + 1)
            setBtn(evt.target.value)
          }}>Sovet davri </CategoryBtn>
          <CategoryBtn value={`4`} onClick={(evt) => {
            authorIdFn(Number(evt.target.value) + 1)
            setBtn(evt.target.value)
          }}>Mustaqillik davri</CategoryBtn>
        </BtnBox>
        <AuthorList>
          {
            (
              () => {
                if (btn === '1') {
                  return (
                    books?.books?.books.map((item) => {
                      return (
                        <AuthorItem key={item.id}>
                          <Link to={'/Books/Main-Book'}><Img width={190} height={283} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                          <AuthorItemTitle>{item.title}</AuthorItemTitle>
                          <AuthorItemText>
                            {authorId}
                          </AuthorItemText>
                        </AuthorItem>
                      )
                    })
                  )
                }
                if (btn === '2') {
                  return (
                    books?.books?.books.map((item) => {
                      return (
                        <AuthorItem key={item.id}>
                          <Link to={'/Books/Main-Book'}><Img width={190} height={283} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                          <AuthorItemTitle>{item.title}</AuthorItemTitle>
                          <AuthorItemText>
                            {authorId}
                          </AuthorItemText>
                        </AuthorItem>
                      )
                    })
                  )
                }
                if (btn === '3') {
                  return (
                    books?.books?.books.map((item) => {
                      return (
                        <AuthorItem key={item.id}>
                          <Link to={'/Books/Main-Book'}><Img width={190} height={283} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                          <AuthorItemTitle>{item.title}</AuthorItemTitle>
                          <AuthorItemText>
                            {authorId}
                          </AuthorItemText>
                        </AuthorItem>
                      )
                    })
                  )
                }
                if (btn === '4') {
                  return (
                    books?.books?.books.map((item) => {
                      return (
                        <AuthorItem key={item.id}>
                          <Link to={'/Books/Main-Book'}><Img width={190} height={283} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                          <AuthorItemTitle>{item.title}</AuthorItemTitle>
                          <AuthorItemText>
                            {authorId}
                          </AuthorItemText>
                        </AuthorItem>
                      )
                    })
                  )
                }
              }

            )()
          }

        </AuthorList>
      </HomeBox>
    </Container>
  )
}
