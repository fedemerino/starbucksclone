import React from 'react'
import DrinkContainer from './DrinkContainer';

const Foods = ({ variants, data }) => {
    let i = -1;  
    return (
        data.map((e) => {
            i++;
            return(
                <DrinkContainer title={variants[i]} food={data[i]} link={"producto"}/>
            )
        })
    )
}

export default Foods