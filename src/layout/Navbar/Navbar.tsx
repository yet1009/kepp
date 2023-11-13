import {Container, StyledNav} from "./Navbar.styles.ts";
import {FiMenu} from "react-icons/fi";
import {ButtonFill} from "../../styles/styles.tsx";
import {NavLink, useLocation} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux.ts";
import {toggleMenu} from "../../store/menu/menuSlice.ts";
import {toggleCreateNoteModal} from "../../store/modal/modalSlice.ts";
import getStandardName from "../../utils/getStandardName.ts";

const Navbar = () => {

    const dispatch = useAppDispatch();
    const { pathname, state } = useLocation()

    console.log(state);
    if(pathname === '/404') {
        return null;
    }

    return (
        <StyledNav>
            <div className='nav__menu'>
                <FiMenu onClick={() => dispatch(toggleMenu(true))} />
            </div>
            {/*<NavLink to={'/'} state={`active`} >X</NavLink>*/}
            <Container>
                {/*<div className='nav__page-title'>{getStandardName(state)}</div>*/}
                <div className='nav__page-title'>Active</div>
                {
                    state !== 'Trash' && state !== 'Archive' && (
                        <ButtonFill
                            className='nav__btn'
                            onClick={() => dispatch(toggleCreateNoteModal(true))}
                        >
                            <span>+</span>
                        </ButtonFill>
                    )
                }
            </Container>
        </StyledNav>
    );
};

export default Navbar;