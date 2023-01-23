import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyle'
import { AuthorItem, AuthorItemText, AuthorItemTitle, AuthorList, BtnBox, CategoryBtn, HomeBox, HomeTitle, Img } from './Home.style'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { userSuccess } from '../../components/Redux/Author/AuthorActions';
import SimpleSlider from '../../components/Carusel/Carusel';
import { Search } from '../../components/Search/Search';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../Context/languageContext';
import { lang } from '../../lang/lang';


export const Home = () => {
  const dispatch = useDispatch();
  const authors = useSelector(state => state);
  const [btn, setBtn] = useState('');
  const { til } = React.useContext(LanguageContext);

  function categorySort(evt) {
    if (evt.target.matches('button')) {
      axios.get(`http://localhost:5001/author/genreId/${evt.target.value}`).then(data => {
        dispatch(userSuccess(data.data))
      }).catch(err => console.log(err))
    }
  }
  return (
    <Container>
      <SimpleSlider />
      <Search />
      <HomeBox>
        <HomeTitle>{lang[til].home.title}</HomeTitle>
        <BtnBox onClick={categorySort}>
          <CategoryBtn value={`1`} onClick={(evt) => setBtn(evt.target.value)}>Temuriylar davri </CategoryBtn>
          <CategoryBtn value={`2`} onClick={(evt) => setBtn(evt.target.value)}>Jadid adabiyoti </CategoryBtn>
          <CategoryBtn value={`3`} onClick={(evt) => setBtn(evt.target.value)}>Sovet davri </CategoryBtn>
          <CategoryBtn value={`4`} onClick={(evt) => setBtn(evt.target.value)}>Mustaqillik davri</CategoryBtn>
        </BtnBox>
        <AuthorList>
          {
            (
              () => {
                if (btn === '1') {
                  return (
                    authors?.author?.authors.map((item) => {
                      return (
                        <AuthorItem key={item.id}>
                          <Link to={'/Home/Main-Author'}><Img width={295} height={224} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                          <AuthorItemTitle>{item.first_name + " " + item.last_name}</AuthorItemTitle>
                          <AuthorItemText>{item.date_of_birth + "-" + item.date_of_death}</AuthorItemText>
                        </AuthorItem>
                      )
                    })
                  )

                }
                if (btn === '2') {
                  return (
                    authors?.author?.authors.map((item) => {
                      return (
                        <AuthorItem key={item.id}>
                          <Link to={'/Home/Main-Author'}><Img width={295} height={224} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                          <AuthorItemTitle>{item.first_name + " " + item.last_name}</AuthorItemTitle>
                          <AuthorItemText>{item.date_of_birth + "-" + item.date_of_death}</AuthorItemText>
                        </AuthorItem>
                      )
                    })
                  )
                }
                if (btn === '3') {
                  return (
                    authors?.author?.authors.map((item) => {
                      return (
                        <AuthorItem key={item.id}>
                          <Link to={'/Home/Main-Author'}><Img width={295} height={224} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                          <AuthorItemTitle>{item.first_name + " " + item.last_name}</AuthorItemTitle>
                          <AuthorItemText>{item.date_of_birth + "-" + item.date_of_death}</AuthorItemText>
                        </AuthorItem>
                      )
                    })
                  )
                }
                if (btn === '4') {
                  return (
                    authors?.author?.authors.map((item) => {
                      return (
                        <AuthorItem key={item.id}>
                          <Link to={'/Home/Main-Author'}><Img width={295} height={224} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                          <AuthorItemTitle>{item.first_name + " " + item.last_name}</AuthorItemTitle>
                          <AuthorItemText>{item.date_of_birth + "-" + item.date_of_death}</AuthorItemText>
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
// https://jsonplaceholder.typicode.com/users
// const fetchUsers1 = (dispatch) => {
//   return {
//     userReq: () => dispatch(userReq()),
//     axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
//     const users = data.data.map(item => item)
//     userSuccess: () => dispatch(userSuccess(users)),
//     }).catch(error => {})
//   }
// }

