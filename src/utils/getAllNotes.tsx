import {Note} from "../types/note.ts";
import {NotesContainer} from "../styles/styles.tsx";
import {NoteCard} from "../components";

const getAllNotes = (mainNotes: Note[], filter:string) => {

    return (
        <>
            <div className='allNotes__notes-type'>
                All Notes
            </div>
            <NotesContainer>
                {
                    mainNotes.map((note) => {
                        return (
                            <NoteCard key={note.id} note={note} type={'notes'} />
                        )
                    })
                }
            </NotesContainer>
        </>
    )
}

export default getAllNotes