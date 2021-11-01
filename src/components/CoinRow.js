import React from 'react'


const coinrow = ({coin, index}) => {
    console.log(coin, index)
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width: '4%'}} className='img-fluid me-4'/>
                <span>{coin.name}</span>                
            </td>
            <td>
                <span className="text-muted text-uppercase">{coin.symbol}</span>
            </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>{coin.price_change_percentage_24h.toFixed(2)}</td>
            <td>{(coin.market_cap/1000000).toFixed(2)}</td>
        </tr>
    )
}

export default coinrow
