import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../contex/StateProvider'

function Header() {
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header_logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="img"
                />
            </Link>
            <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text"
                />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Gest</span>
                    <span className="header_optionLineTwo">Sing In</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo basket_count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
