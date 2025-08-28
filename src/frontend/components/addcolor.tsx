import React, { useState } from 'react';

type AddColorProps = {
    onSave: (name: string) => void;
    isSaving?: boolean;
};

const AddColor: React.FC<AddColorProps> = ({ onSave, isSaving = false }) => {
    const [name, setName] = useState<string>('');

    const handleClick = () => {
        if (!name.trim() || isSaving) return;
        onSave(name.trim());
    };

    return (
        <div className='flex flex-row gap-4'>
            <p>Name</p>
            <input 
                type='text' 
                className='rounded-md border-black border-2 px-2'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Color name'
            >
            </input>
            <button 
                className='bg-black text-white rounded-md shadow-lg px-2 disabled:opacity-50'
                onClick={handleClick}
                disabled={!name.trim() || isSaving}
            >
                Speichern
            </button>
        </div>
    )
}


export default AddColor;