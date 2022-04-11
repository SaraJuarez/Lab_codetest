import React from "react";
import { StyledMyList, StyledMyListContainer } from '../Components/Styles/MyList.styled';
import { useSelector } from "react-redux";
import MyListCard from "../Components/Organisms/MyListCard";
import Button from "../Components/Atoms/Button";
import { StyledNav } from "../Components/Styles/Nav.styled";
import { Link } from 'react-router-dom';
function MyList() {

    let myList = useSelector(state => state.myList)
    return (
        <StyledMyList>
            <StyledNav>
                <h1>Mi lista</h1>
                <Link style={{ textDecoration: 'none' }} to="/"><Button title='Volver' /></Link>
            </StyledNav>
            <StyledMyListContainer>
                {myList.length > 0 ?
                    myList.map((element, index) => {
                        return (
                            <MyListCard key={index} movie={element} />
                        )
                    })
                    : <h2>Aún no has añadido películas</h2>
                }

            </StyledMyListContainer>
        </StyledMyList>
    )
}
export default MyList;