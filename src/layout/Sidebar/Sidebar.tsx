import {NavLink, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {Container, ItemsBox, MainBox, StyledLogo} from "./Sidebar.styles.ts";
import {toggleMenu} from "../../store/menu/menuSlice.ts";
import {FaArchive, FaLightbulb, FaTag, FaTrash} from "react-icons/fa";
import getStandardName from "../../utils/getStandardName.ts";
import {toggleTagsModal} from "../../store/modal/modalSlice.ts";
import {MdEdit} from "react-icons/md";
import {v4} from "uuid";

const items = [
    {
        icon: <FaArchive />,
        title: 'Archive',
        id: v4()
    },
    {
        icon: <FaTrash />,
        title: 'Trash',
        id: v4()
    },
]

const Sidebar = () => {

    const dispatch = useAppDispatch();
    const {isOpen} = useAppSelector((state) => state.menu)

    const {tagsList}  = useAppSelector((state) => state.tags)

    const {pathname} = useLocation();

    if (pathname === '/404') {
        return null;
    }

    return (
        <Container openMenu={isOpen ? 'open' : ''}>
            <MainBox openMenu={isOpen ? 'open' : ''}>
                <StyledLogo>
                    <h1>Keep</h1>
                </StyledLogo>

                <ItemsBox>
                    {/*note item*/}
                    <li onClick={() => dispatch(toggleMenu(false))}>
                        <NavLink
                            to={'/'}
                            state={'notes'}
                            className={({isActive}) => isActive ? "active-item" : 'inactive-item'}
                        >
                            <span>
                                <FaLightbulb/>
                            </span>
                            <span>Notes</span>
                        </NavLink>
                    </li>

                    {
                        tagsList?.map(({tag, id}) => (
                            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
                                <NavLink
                                    to={`/tag/${tag}`}
                                    state={`${tag}`}
                                    className={({ isActive}) => isActive ? 'active-item' : 'inactive-item'}

                                >
                                    <span>
                                        <FaTag />
                                    </span>
                                    <span>{getStandardName(tag)}</span>
                                </NavLink>
                            </li>
                        ))
                    }

                    {/*edit tag item*/}
                    <li
                        className='sidebar__edit-item'
                        onClick={() => dispatch(toggleTagsModal({ type: 'edit', view: true }))}
                    >
                        <span>
                            <MdEdit />
                        </span>
                        <span>Edit Notes</span>
                    </li>

                    {
                        items.map(({icon, title, id}) => (
                            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
                                <NavLink
                                    to={`/${title.toLowerCase()}`}
                                    state={title}
                                    className={({isActive}) => isActive ? 'active-item': 'inactive-item'}
                                >
                                    <span>{icon}</span>
                                    <span>{title}</span>
                                </NavLink>
                            </li>
                        ))
                    }

                </ItemsBox>
            </MainBox>
        </Container>
    );
};

export default Sidebar;