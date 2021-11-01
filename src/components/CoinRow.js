import React from 'react'


const coinrow = ({coin, index}) => {
    console.log(coin, index)
    return (
        
        <tr key={coin.name}>
            <td>{index}</td>
            <td>{coin.name}</td>
            <td>{coin.current_price}</td>
            <td>{coin.price_change_percentage_24h}</td>
            <td>{coin.market_cap}</td>
        </tr>
    )
}

export default coinrow
