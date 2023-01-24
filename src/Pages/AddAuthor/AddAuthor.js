import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { FormButton, FormTitle, RegisterBox, RightBox, StartInput } from '../../components/Form/Form.styled'
import { AddImg, LeftBox } from '../AddBook/AddBook.style'
import { LinkStyleClose, OptionGenre, SelectGenre, TeaxtArea } from './AddAuthor.style';
import CloseIcon from '../../assets/images/icons8-удалить.svg'
import axios from 'axios';
import { lang } from '../../lang/lang';
import { LanguageContext } from '../../Context/languageContext';

export const AddAuthor = () => {
  const [image, setImage] = useState('');
  const { til } = React.useContext(LanguageContext);


  const state = useSelector((state) => state.token)

  const name = useRef();
  const lastName = useRef();
  const date = useRef();
  const dateDeath = useRef();
  const country = useRef();
  const genre = useRef();
  const bio = useRef();

  const imgValue = (props) => {
    setImage(props.target.files[0])
  }

  const AddAuthorsFn = (evt) => {
    evt.preventDefault();
    const newData = new FormData()
    newData.append('first_name', name.current.value)
    newData.append('last_name', lastName.current.value)
    newData.append('date_of_birth', date.current.value)
    newData.append('date_of_death', dateDeath.current.value)
    newData.append('country', country.current.value)
    newData.append('genre_id', genre.current.value)
    newData.append('bio', bio.current.value)
    newData.append('image', image)

    const config = {
      headers: {
        Authorization: state.token,
      }
    }

    axios.post('http://localhost:5001/author', newData, config,)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    name.current.value = ''
    lastName.current.value = ''
    date.current.value = ''
    dateDeath.current.value = ''
    country.current.value = ''
    bio.current.value = ''

  }
  return (
    <RegisterBox>
      <LinkStyleClose to={'/'}><img src={CloseIcon} alt="" /></LinkStyleClose>
      <LeftBox htmlFor='add-img'>
      </LeftBox>
      <RightBox onSubmit={AddAuthorsFn}>
        <FormTitle>{lang[til].addAuthor.title}</FormTitle>
        <StartInput type={'text'} placeholder={lang[til].profile.label1} ref={name} required />
        <StartInput type={'text'} placeholder={lang[til].profile.label2} ref={lastName} />
        <StartInput type={'number'} placeholder={lang[til].addAuthor.input3} ref={date} />
        <StartInput type={'number'} placeholder={lang[til].addAuthor.input4} ref={dateDeath} />
        <StartInput type={'text'} placeholder={lang[til].addAuthor.inpu5} ref={country} />
        <SelectGenre ref={genre}>
          <OptionGenre elected>{lang[til].addAuthor.input6}</OptionGenre>
          <option value={2}>Temuriylar davri</option>
          <option value={2}>Jadid adabiyoti</option>
          <option value={3}>Sovet davri</option>
          <option value={4}>Mustaqillik davri</option>
        </SelectGenre>
        <TeaxtArea placeholder={lang[til].addAuthor.bio} ref={bio}>
        </TeaxtArea>
        <AddImg type="file" id='add-img' onChange={imgValue} />
        <FormButton type='submit'>{lang[til].addAuthor.create}</FormButton>
      </RightBox>
    </RegisterBox>
  )
}
