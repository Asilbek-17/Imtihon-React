import axios from 'axios';
import React, { useRef, useState } from 'react'
import { LanguageContext } from '../../Context/languageContext';
import { lang } from '../../lang/lang';
import { Row } from '../Header/Header.style'
import { Form, Input, SearchRow, SearchTitle, SerachBtn } from './Search.style'
import CloseIcon from '../../assets/images/icons8-удалить.svg'
import { CloseBtn, SearchBox } from '../Search2/Search.style';
import { AuthorItem, Img } from '../../Pages/Books/Books.style';
import { Link } from 'react-router-dom';
import { AuthorItemText, AuthorItemTitle } from '../../Pages/Home/Home.style';

export const Search = () => {
    const { til } = React.useContext(LanguageContext);
    const search = useRef();
    const [search1, setSearch1] = useState('');
    function authorIdFn(evt) {
        evt.preventDefault()
        axios.get(`http://localhost:5001/author/search/?author=${search.current.value}`).then(data => {
            setSearch1(data.data)
        }).catch(err => console.log(err))
    }
    if (search1 === '') {
        return (
            <Form onSubmit={authorIdFn}>
                <SearchTitle>{lang[til].home.search}</SearchTitle>
                <SearchRow>
                    <Input placeholder={lang[til].home.input} ref={search} />
                    <SerachBtn type='submit'>{lang[til].home.search}</SerachBtn>
                </SearchRow>
            </Form>
        )
    } else if (search1 !== '') {
        return (
            <>
                <CloseBtn onClick={() => setSearch1('')}><img src={CloseIcon} alt="" /></CloseBtn>
                <Form onSubmit={authorIdFn}>
                    <SearchTitle>{lang[til].home.search}</SearchTitle>
                    <SearchRow>
                        <Input placeholder={lang[til].home.input} ref={search} />
                        <SerachBtn type='submit'>{lang[til].home.search}</SerachBtn>
                    </SearchRow>
                </Form>
                <SearchBox>
                    {search1.map(item => {
                        return (
                            <AuthorItem key={item.id}>
                                <Link to={'/Home/Main-Author'}><Img width={295} height={224} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                                <AuthorItemTitle>{item.first_name + " " + item.last_name}</AuthorItemTitle>
                                <AuthorItemText>{item.date_of_birth + "-" + item.date_of_death}</AuthorItemText>
                            </AuthorItem>
                        )
                    })}
                </SearchBox>
            </>


        )
    }
}
