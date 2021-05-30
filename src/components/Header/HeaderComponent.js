import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import './HeaderComponent.scss'
import DrawerToggle from '../DrawerToggle/DrawerToggle';
// import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { FaShoppingBag } from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/Cart/cart.selector';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
// import FirebaseContext from '../../Config/Firebase/context';
import { Link } from 'react-router-dom';
// import { signOutUser } from '../../redux/User/user.sagas';
import { signOutUserStart, changeLoginModal } from '../../redux/User/user.actions';
// import { languageOptions } from '../../Lang';
import withTranslator from '../../hoc/withTranslation';
import Dropdown from '../../UI/Dropdown/Dropdown';
import { fetchProductsStart } from "../../redux/Products/products.action";
import { useHistory } from "react-router";


const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumberOfCartItem: selectCartItemsCount(state),
  products: state.productsData.products
});

const SearchBar = (props) => {
  const { options, onInputChange, handleSelectProduct } = props;


  return (
    <div className='SearchBar'>
      <div className="search-input">
        <input type="text" placeholder="Search Products" className='SearchInput' onChange={onInputChange} />
      </div>
      {/* <AiOutlineSearch className="search-icon" /> */}
      {options.length > 0 &&
        <div className="search-result">
          {options.map((option, index) =>
          (
            <div className="search-item-result" onClick={() => handleSelectProduct(option.id)}>
              <div >
                <img className="search-img" src={option.image[0]} alt="Nothing" />
              </div>
              <div className="search-result-title">
                {option.title}
              </div>
              <div className="search-category">
                ({option.category})
              </div>
            </div>
          )
          )}
        </div>
      }
    </div>
  )
}

function HeaderComponent(props) {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [options, setOptions] = useState([])
  const { currentUser, totalNumberOfCartItem, products } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    dispatch(signOutUserStart());
  }

  useEffect(() => {
    dispatch(fetchProductsStart({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectProduct = (id) => {
    console.log(id);
    setOptions([]);
    history.push(`/product/${id}`);
  }

  const onInputChange = (event) => {
    const value = event.target.value;
    if (value === "" || value.length < 3) setOptions([]);
    else {
      const searchArray = products.map(item => {
        return {
          ...item
        }
      }
      );
      setOptions(searchArray.filter((option) => option.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
    }
  }

  return (
    <header>
      <div className='ToolBar'>
        <DrawerToggle isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        <div className="main-sidebar">
          <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        </div>

        <div className='logo'>
          <Link className="link" to="/">
            {props.strings.LittleTag}
          </Link>
        </div>

        <SearchBar
          options={options}
          onInputChange={onInputChange}
          setOptions={setOptions}
          handleSelectProduct={handleSelectProduct} />

        <Dropdown />

        {!currentUser &&
          [<div className='login' onClick={() => dispatch(changeLoginModal(true))}>
            <BiLogIn className="login-user-icon" /><span className="login-header-title">{props.strings.Login}</span>
          </div>
          ]}

        {currentUser &&
          [<div className='cartContainer'>
            <div className='login-item'>
              <FaUser className="login-icon" /><span className="login-title">{currentUser.displayName}</span>
            </div>
            <div className='login-item'>
              <FaShoppingBag className="login-icon header-cart-icon" /><span ><Link className="header-cart-icon" to="/cart">
                {props.strings.YourBag} ({totalNumberOfCartItem})
                </Link></span>
            </div>
            <div className='login-item' onClick={() => signOut()}>
              <BiLogOut className="login-icon" /><span className="login-title">{props.strings.Logout}</span>
            </div>
          </div>
          ]}

        <div className="login-container">
          <Login isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />
        </div>
      </div>
    </header>
  )
}

HeaderComponent.defaultProps = {
  strings: {
    LittleTag: "Little Tag",
    Login: "Login",
    YourBag: "Your Bag",
    Logout: "Logout"
  }
}


HeaderComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};

export default withTranslator('HeaderComponent')(HeaderComponent);
