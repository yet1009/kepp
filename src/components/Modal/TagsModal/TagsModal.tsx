import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import React, {useState} from "react";
import {DeleteBox, FixedContainer} from "../Modal.styles.ts";
import {Box, StyledInput, TagsBox} from "./TagsModal.styles.ts";
import {toggleTagsModal} from "../../../store/modal/modalSlice.ts";
import {FaTimes} from "react-icons/fa";
import getStandardName from "../../../utils/getStandardName.ts";
import {v4} from "uuid";
import {addTags, deleteTags} from "../../../store/tags/tagsSlice.ts";
import {removeTags} from "../../../store/notesList/notesListSlice.ts";

interface TagsModalProps {
    type: string;
}

const TagsModal = ({ type }: TagsModalProps) => {

    const dispatch = useAppDispatch();
    const { tagsList } = useAppSelector((state) => state.tags)
    const [inputText, setInputText] = useState('');

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!inputText) {
            return
        }

        dispatch(addTags({ tag: inputText.toLowerCase(), id: v4() }))
        setInputText('');
    }


    const deleteTagsHandler = (tag: string, id: string) => {
        dispatch(deleteTags(id))
        dispatch(removeTags({tag}))
    }


    return (
        <FixedContainer>
            <Box>
                <div className='editTags__header'>
                    <div className='editTags__title'>
                        {type === 'add' ? 'ADD' : 'Edit'} Tags
                    </div>
                    <DeleteBox
                        className='editTags__close'
                        onClick={() => dispatch(toggleTagsModal({ type, view: false}))}
                    >
                        <FaTimes />
                    </DeleteBox>
                </div>

                <form onSubmit={submitHandler}>
                    <StyledInput
                        type="text"
                        value={inputText}
                        placeholder='new tag...'
                        onChange={(e) => setInputText(e.target.value)}
                    >
                    </StyledInput>
                </form>
                <TagsBox>
                    {
                        tagsList.map(({ tag, id}) => (
                            <li key={id}>
                                <div className='editTags__tag'>
                                    {getStandardName(tag)}
                                </div>
                                <DeleteBox onClick={() => deleteTagsHandler(tag, id)}>
                                    <FaTimes />
                                </DeleteBox>
                            </li>
                        ))
                    }
                </TagsBox>
            </Box>
        </FixedContainer>
    );
};

export default TagsModal;