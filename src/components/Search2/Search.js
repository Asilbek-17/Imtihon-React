import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../Context/languageContext';
import { lang } from '../../lang/lang';
import { AuthorItem, AuthorItemText, AuthorItemTitle, Img } from '../../Pages/Books/Books.style';
import { CloseBtn, Form, Input, SearchBox, SearchRow, SearchTitle, SerachBtn } from './Search.style'
import CloseIcon from '../../assets/images/icons8-удалить.svg'

export const Search = () => {
    const { til } = React.useContext(LanguageContext);
    const search = useRef();
    const [search1, setSearch1] = useState('');

    function authorIdFn(evt) {
        evt.preventDefault()
        axios.get(`http://localhost:5001/book/search/?book=${search.current.value}`).then(data => {
            setSearch1(data.data)
            console.log(data.data);
        }).catch(err => console.log(err))
    }
    if (search1 !== '') {
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
                                <Link to={'/Books/Main-Book'}><Img width={190} height={283} src={`http://localhost:5001/${item.image}`} alt="" /></Link>
                                <AuthorItemTitle>{item.title}</AuthorItemTitle>
                                <AuthorItemText>
                                </AuthorItemText>
                            </AuthorItem>
                        )
                    })}
                </SearchBox>
            </>
        )
    } else if (search1 === '') {
        return (
            <Form onSubmit={authorIdFn}>
                <SearchTitle>{lang[til].home.search}</SearchTitle>
                <SearchRow>
                    <Input placeholder={lang[til].home.input} ref={search} />
                    <SerachBtn type='submit'>{lang[til].home.search}</SerachBtn>
                </SearchRow>
            </Form>
        )
    } 
}
