import React, { useState } from 'react';

const NoteForm = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div>
            <form>
                {isExpanded &&
                    <input
                        name="title"
                        placeholder="Title"
                    />}

                <textarea
                    onClick={() => setIsExpanded(true)}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded? "5" : "1"}
                />
                <button>Add</button>
            </form>
        </div>

    )
}

export default NoteForm;
