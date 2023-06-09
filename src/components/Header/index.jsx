import { Container, Content, Logo, Search, Button, ButtonMenu, Profile } from "./styles";
import { useAuth } from '../../hooks/auth';

import { Link } from "react-router-dom";

import { FiSearch, FiUser, FiHeart } from 'react-icons/fi';
import { BsReceipt } from 'react-icons/bs';

import logo from '../../assets/logo.svg';

import { useCart } from '../../hooks/cart';

export function Header({search, favoritesFilter }) {
    const { user } = useAuth()
    const { signOut } = useAuth();

    const { cart, orders } = useCart();

    function mobileMenu() {
        document.getElementById('hamburger').classList.toggle('active')
        document.getElementById('nav-menu').classList.toggle('active')
    }

    function userMenu() {
        document.getElementById('user-menu').classList.toggle('active')
    }

    return (
        <Container>
            <Content>
                {
                     user.isAdmin ?
                     
                     <Logo>
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="" />
                                <h1>food explorer</h1>
                            </Link>
                            <p className="adminLogo">admin</p>
                        </div>
                     </Logo>

                 :

                    <Logo>
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="" />
                                <h1>food explorer</h1>
                            </Link>
                        </div>
                    </Logo>
                }
                
                <div className="hamburger" id="hamburger" onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className="nav-menu" id="nav-menu">

                    <Search>
                        <label>
                            <FiSearch size={24} />
                            <input
                                type="text"
                                placeholder="Busque pelas opções de pratos"
                                onChange={(e) => { search(e.target.value) }}
                            />
                        </label>
                    </Search>
                    

                    {
                        user.isAdmin ?

                            <Link to="/orders">
                                <Button
                                    type='button'
                                >
                                    <BsReceipt size={24} />
                                    Ver pedidos <span>({orders.length})</span>
                                </Button>
                            </Link>

                            
                            

                            :

                            <Link to="/cart">
                                <Button
                                    type='button'
                                >
                                    <BsReceipt size={24} />
                                    Pedidos <span>({cart.length})</span>
                                </Button>
                            </Link>
                    }

                    {
                        user.isAdmin ?

                            <Profile onClick={userMenu}>
                                <div>

                                    <Link to="/orders">
                                        <ButtonMenu onClick={favoritesFilter}>
                                            Ver pedidos
                                        </ButtonMenu>
                                    </Link>

                                    <Link to="/createdish">
                                        <ButtonMenu>
                                            Novo Prato
                                        </ButtonMenu>
                                    </Link>
                                    <Link to="/" onClick={signOut}>
                                        <ButtonMenu>
                                            Sair
                                        </ButtonMenu>
                                    </Link>
                                </div>
                            </Profile>


                            :

                            <Profile onClick={userMenu}>
                                <div>

                                    <Link to="/orders">
                                        <ButtonMenu>
                                            Histórico de pedidos
                                        </ButtonMenu>
                                    </Link>

                                    <Link to="/">
                                        <ButtonMenu onClick={favoritesFilter}>
                                            Meus Favoritos
                                        </ButtonMenu>
                                    </Link>
                            
                                    <Link to="/" onClick={signOut}>
                                        <ButtonMenu>
                                            Sair
                                        </ButtonMenu>
                                    </Link>
                                </div>
                            </Profile>
                    }
                </div>

            </Content>
        </Container>
    );
}
