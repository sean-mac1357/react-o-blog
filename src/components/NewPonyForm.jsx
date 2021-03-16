import React, { useState } from 'react';

const NewPonyForm = ({ handleReload }) => {
    const [ponyName, setPonyName] = useState('');
    const [ponyAttribute, setPonyAttribute] = useState('');
    const [ponyImage, setPonyImage] = useState('');

    const _handleNameChange = (e) => {
        setPonyName(e.target.value);
    }

    const _handleAttributeChange = (e) => {
        setPonyAttribute(e.target.value);
    }

    const _handleImageChange = (e) => {
        setPonyImage(e.target.value);
    }

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const submitResponse = await fetch('http://127.0.0.1:3000/ponies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pony_name: ponyName, pony_attribute: ponyAttribute, pony_image: ponyImage })
        }).then(
            (response) => response
        );
        console.log("submit response is: ", submitResponse);
        setPonyName('');
        setPonyAttribute('');
        setPonyImage('')

        if (submitResponse.status === 200) {
            handleReload(true);
        }
    }

    return (
        <form onSubmit={_handleSubmit}>
            <label>
                Pony Name
                <input 
                type="text"
                name="pony_name"
                data-testid="ponyName" 
                value={ponyName}
                onChange={_handleNameChange}/>
            </label>
            <label>
                Pony Attribute
                <input 
                type="text"
                name="pony_attribute"
                data-testid="ponyAttribute" 
                value={ponyAttribute}
                onChange={_handleAttributeChange}/>
            </label>
            <label>
                Pony Image
                <input 
                type="text"
                name="pony_image"
                data-testid="ponyImage" 
                value={ponyImage}
                onChange={_handleImageChange}/>
            </label>
            <button 
            type="submit" 
            data-testid="sendButton">
                Add Pony
            </button>
        </form>
    );
};

export default NewPonyForm;