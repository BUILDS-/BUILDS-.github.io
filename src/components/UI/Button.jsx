import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import { Link } from 'react-router-dom';



const InternalButton = styled.button`
    display: flex;
    border: none;
    padding: 0;
    cursor: pointer;
    a {
        background-color: ${props => props.backgroundColor || "black"};
        color: ${props => props.color || "white"};
        padding: 1em;
        text-decoration: none;
        border-radius: 20px;
        transition: .2s ease-in-out;
        &:hover {
            background-color: ${props => props.backgroundColorHover || "#CC0000"};
            color: ${props => props.colorHover || "white"};
        }
    }
`;

const ActionButton = styled.button`
    display: flex;
    border: none;
    padding: 1em;
    cursor: pointer;
    background-color: ${props => props.backgroundColor || "black"};
    color: ${props => props.color || "white"};
    border-radius: 20px;
    transition: .2s ease-in-out;
    &:hover {
        background-color: ${props => props.backgroundColorHover || "#CC0000"};
        color: ${props => props.colorHover || "white"};
    }
`;

const Button = ({link, type, action, alt, text, color, backgroundColor, colorHover, backgroundColorHover}) => {
    

    if(type === "internal") {
        return (
            <InternalButton color={color} backgroundColor={backgroundColor} colorHover={colorHover} backgroundColorHover={backgroundColorHover}>
                <Link to={link} alt={`${alt}`}>
                    {text}
                </Link>
            </InternalButton>
        )
    } else if (type === "external") {

    } else if (type === "action") {
        return (
            <ActionButton onClick={action} color={color} backgroundColor={backgroundColor} colorHover={colorHover} backgroundColorHover={backgroundColorHover}>                
                    {text}
            </ActionButton>
        )
    }
    return <button>Please pass a valid type of "internal", "external", or "action".</button>
}

Button.propTypes = {
    link: PropTypes.string,
    type: PropTypes.string.isRequired,
    action: PropTypes.func,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string
}

export default Button
