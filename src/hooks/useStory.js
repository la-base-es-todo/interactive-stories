import { useEffect, useState } from "react";
import stories from "../db";


export const useStory = (storyId) => {

    const [storyBook, setStoryBook] = useState(null); // store the whole story book data
    const [nextChapter, setNextChapter] = useState({ page: 'home' }); // store which page to extract from the story book: object {page:''}
    const [chapterData, setChapterData] = useState({}); // store the history page to be render

    // get the story book (the whole story data)
    useEffect(() => {
        console.log('useStoryEngine:useEffect!', { storyId });
        const bookFound = stories.filter(
            // (item) => item.id === parseInt(storyId)
            (item) => item.route === String(storyId).trim()
        )[0];
        console.log('     ', { bookFound });
        setStoryBook(bookFound);// todo: handle error case:story not found
    }, [storyId]);

    // get the story chapter to be render (fires on each choice)  
    useEffect(() => {
        console.log('useStoryEngine:useEffect!', { storyBook, nextChapter });
        if (storyBook === null) {
            console.log('     null storyBook!');
            return;
        }
        const result = storyBook.story.filter(
            (item) => item.page === nextChapter.page
        )[0];
        setChapterData(result);
    }, [storyBook, nextChapter]);// todo: handle error case:story not found



    return {
        setNextChapter,
        chapterData,
    }

}
