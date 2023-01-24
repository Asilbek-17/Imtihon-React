import React, { useState } from 'react'
import { FormButton, FormTitle, RegisterBox, RightBox, StartInput } from '../../components/Form/Form.styled'
import { AddImg, LeftBox } from './AddBook.style'
import { useRef } from 'react'
import { LinkStyleClose, OptionGenre, SelectGenre, TeaxtArea } from '../AddAuthor/AddAuthor.style'
import CloseIcon from '../../assets/images/icons8-удалить.svg'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { LanguageContext } from '../../Context/languageContext'
import { lang } from '../../lang/lang'

export const AddBook = () => {
    const state = useSelector((state) => state.token)
    const { til } = React.useContext(LanguageContext);

    const img = useRef();
    const title = useRef();
    const pages = useRef();
    const year = useRef();
    const price = useRef();
    const genre = useRef();
    const author = useRef();
    const bio = useRef();

    const [authorSelect, setAuthorSelect] = useState('');
    const [genreAuthor, setGenreAuthor] = useState([]);

    const [image, setImage] = useState('')
    const imgValue = (props) => {
        setImage(props.target.files[0])
    }
    const config2 = {
        headers: {
            Authorization: state.token,
        }
    }

    function categorySort(evt) {
        axios.get(`http://localhost:5001/author/genreId/${evt}`, config2).then(data => {
            setGenreAuthor(data?.data)
        }).catch(err => console.log(err))
    }

    const AddBookFn = (evt) => {
        evt.preventDefault();
        const newData = new FormData()
        newData.append('title', title.current.value)
        newData.append('page', pages.current.value)
        newData.append('year', year.current.value)
        newData.append('price', price.current.value)
        newData.append('genre_id', genre.current.value)
        newData.append('author_id', author.current.value)
        newData.append('description', bio.current.value)
        newData.append('image', image)

        const config = {
            headers: {
                Authorization: state.token,
            }
        }

        axios.post('http://localhost:5001/book', newData, config,)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        title.current.value = ''
        pages.current.value = ''
        year.current.value = ''
        price.current.value = ''
        bio.current.value = ''
    }

    return (
        <RegisterBox>
            <LinkStyleClose to={'/'}><img src={CloseIcon} alt="" /></LinkStyleClose>
            <LeftBox htmlFor='add-img'>
            </LeftBox>
            <RightBox onSubmit={AddBookFn}>
                <FormTitle>{lang[til].addBook.title}</FormTitle>
                <AddImg type="file" id='add-img' onChange={imgValue} ref={img} />
                <StartInput type={'text'} placeholder={lang[til].addBook.inpu1} ref={title} />
                <StartInput type={'number'} placeholder={lang[til].addBook.input2} ref={pages} />
                <StartInput type={'number'} placeholder={lang[til].addBook.input3} ref={year} />
                <StartInput type={'number'} placeholder={lang[til].addBook.input4} ref={price} />
                <SelectGenre ref={genre} onChange={(evt) => {
                    categorySort(evt.target.value)
                    setAuthorSelect(evt.target.value)
                }
                }>
                    <OptionGenre selected>{lang[til].addAuthor.input6}</OptionGenre>
                    <option value={1}>Temuriylar davri</option>
                    <option value={2}>Jadid adabiyoti</option>
                    <option value={3}>Sovet davri</option>
                    <option value={4}>Mustaqillik davri</option>
                </SelectGenre>
                <SelectGenre ref={author}>
                    <OptionGenre selected>{lang[til].addBook.input5}</OptionGenre>
                    {
                        (
                            () => {
                                if (authorSelect === '1') {
                                    return (
                                        genreAuthor.map(item => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.first_name + " " + item.last_name}</option>
                                            )
                                        })
                                    )
                                }
                                if (authorSelect === '2') {
                                    return (
                                        genreAuthor.map(item => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.first_name + " " + item.last_name}</option>
                                            )
                                        })
                                    )
                                }
                                if (authorSelect === '3') {
                                    return (
                                        genreAuthor.map(item => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.first_name + " " + item.last_name}</option>
                                            )
                                        })
                                    )
                                }
                                if (authorSelect === '4') {
                                    return (
                                        genreAuthor.map(item => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.first_name + " " + item.last_name}</option>
                                            )
                                        })
                                    )
                                }
                            }
                        )()
                    }
                </SelectGenre>
                <TeaxtArea placeholder={lang[til].addAuthor.bio} ref={bio}>
                </TeaxtArea>
                <FormButton type='submit'>{lang[til].addAuthor.create}</FormButton>
            </RightBox>
        </RegisterBox>
    )
}
