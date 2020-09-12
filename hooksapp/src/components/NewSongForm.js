import React, { useState} from 'react';

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();     // stop refreshing page when submitting the form
        addSong(title);
        // auto clear input box after user clicked submit
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Song name: </label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="add song" />
        </form>
    );
}
 
export default NewSongForm;