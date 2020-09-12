import React, { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    // invoke useState() hook function
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'the wild darkness', id: 3 }
    ]);
    // Creating another useState hook
    const [age, setAge] = useState(20);
    // addSong() function using setSongs function
    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuid()}]);           
        // ES6: property anme & value the same, can only say: title
    }
    // useEffect hook for songs
    useEffect(() => {
        console.log('useEffect hook ran', songs);
    }, [songs]);
    // useEffect hook for age
    useEffect(() => {
        console.log('useEffect hook ran', age);
    }, [age]);
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age+1)}>Add 1 to age: {age}</button>
        </div>
    );
}
 
export default SongList;