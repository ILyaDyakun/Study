const BOOKS = [
    {
        name: 'The Library Book',
        author: 'Susan Orlean',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91OME-jyFmL.jpg',
        plot: 'On the morning of April 29, 1986, a fire alarm sounded in the Los Angeles Public Library. As the moments passed, the patrons and staff who had been cleared out of the building realized this was not the usual fire alarm. As one fireman recounted, “Once that first stack got going, it was ‘Goodbye, Charlie.’” The fire was disastrous: it reached 2000 degrees and burned for more than seven hours. By the time it was extinguished, it had consumed four hundred thousand books and damaged seven hundred thousand more. Investigators descended on the scene, but more than thirty years later, the mystery remains: Did someone purposefully set fire to the library—and if so, who?',
        uid: '1'
    },
    {
        name: 'The Giver of Stars',
        author: 'Jojo Moyes',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51aQGTp2VfL._SX338_BO1,204,203,200_.jpg',
        plot: 'Alice Wright marries handsome American Bennett Van Cleve hoping to escape her stifling life in England.  But small-town Kentucky quickly proves equally claustrophobic, especially living alongside her overbearing father-in-law. So when a call goes out for a team of women to deliver books as part of Eleanor Roosevelt’s new traveling library, Alice signs on enthusiastically.\n' +
            '\n' +
            'The leader, and soon Alice\'s greatest ally, is Margery, a smart-talking, self-sufficient woman who\'s never asked a man\'s permission for anything. They will be joined by three other singular women who become known as the Packhorse Librarians of Kentucky.',
        uid: '2'
    },
    {
        name: 'The Scent Keeper',
        author: 'Erica Bauermeister',
        image: 'https://m.media-amazon.com/images/I/51kf8SrQvNL.jpg',
        plot: 'Emmeline lives on a remote island with her father, who teaches her about the natural world through her senses. What he won’t explain are the mysterious scents stored in glass bottles that line the walls of their cabin, or the origin of the machine that creates them. As Emmeline grows, however, so too does her curiosity, until one day the unforeseen happens, and Emmeline is vaulted out into the real world - a place of love, betrayal, ambition, and revenge. To understand her past, Emmeline must unlock the clues to her identity, a quest that challenges the limits of her heart and imagination.\n' +
            '\n' +
            'Captivating and emotional, The Scent Keeper explores the provocative beauty of scent, the way it can reveal hidden truths, lead us to the person we seek, and even help us find our way back home.',
        uid: '3'
    }
];

if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify(BOOKS));
}

