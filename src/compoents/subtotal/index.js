import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from '../../contex/StateProvider'
import { getBasketTotal } from '../../contex/reducer'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({ basket.length } items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input 
                                type='checkbox'
                            /> this order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
