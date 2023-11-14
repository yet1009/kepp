import {v4} from "uuid";

const notes = [
    {
        title: "Note 1 title",
        content: "Note 1 content",
        tags: [{ tag: 'coding', id: v4()}],
        color: '#cce0ff',
        priority: "high",
        isPinned: true,
        isRead: false,
        date: '10/22/23 2.55 PM',
        createdTime: new Date('Sat Dec 10 2023 14:55:23').getTime(),
        editedTime: null,
        id: v4(),
    },
    {
        title: "Note 2 title",
        content: "Note 2 content",
        tags: [{ tag: 'exercise', id: v4()}],
        color: '#ffcccc',
        priority: "high",
        isPinned: true,
        isRead: false,
        date: '10/22/23 2.55 PM',
        createdTime: new Date('Sat Dec 10 2023 14:55:23').getTime(),
        editedTime: null,
        id: v4(),
    }
]

export default notes;