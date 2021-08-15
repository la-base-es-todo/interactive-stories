import { useEffect } from 'react';


export default function ScrollToTop({ chapterData }) {

    useEffect(() => {
        window.scrollTo(0, 0);
        // console.log('ScrollToTop!');
    }, [chapterData]);

    return null;
}