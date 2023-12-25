import React, { useRef } from 'react';
import Card from "./card.jsx";

const Forground = () => {
    const ref = useRef(null);
    const data = [
        {
            description: "This is the dummy-data-01 written here to fill the space",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            description: "This is the dummy-data-02 written here to fill the space",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
        },
        {
            description: "This is the dummy-data-03 written here to fill the space",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            description: "This is the dummy-data-04 written here to fill the space",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
    ];
    return (
        <div ref={ref} className='fixed top-0 right-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    );
}

export default Forground;
