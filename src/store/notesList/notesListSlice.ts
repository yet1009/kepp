import {createSlice} from "@reduxjs/toolkit";
import {Note} from "../../types/note.ts";


interface NoteState {
    mainNotes: Note[],
    archiveNotes: Note[],
    trashNotes: Note[],
    editNotes: null | Note[]
}

const initialState:NoteState = {
    mainNotes: [],
    archiveNotes: [],
    trashNotes: [],
    editNotes: null
}

const notesListSlice = createSlice({
    name: 'notesList',
    initialState,
    reducers: {
        removeTags: (state, { payload }) => {
            state.mainNotes = state.mainNotes.map((note) => ({
                ...note,
                tags: note.tags.filter(({ tag }) => tag !== payload.tag)
            }))
        }
    }
})

export const { removeTags } = notesListSlice.actions

export default notesListSlice.reducer