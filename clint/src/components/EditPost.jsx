import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; // 1. Added missing axios import

const EditPost = ({ items }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Find the item from props
    const item = items?.find(post => post._id === id);

    const [editTitle, setEditTitle] = useState('');
    const [editdescription, setEditdescription] = useState('');
    // 2. Set the input default value to the existing title once item is found
    useEffect(() => {
        if (item) {
            setEditTitle(item.title);
            setEditdescription(item.description);
        }
    }, [item]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // 3. Fixed payload variable name to match state (editTitle)
            await axios.put(`http://localhost:3000/api/posts/update/${id}`, {
                title: editTitle,
                description: editdescription
            });
            
            alert("Post updated successfully!");
            navigate('/admin/dashboard'); // Redirect back to dashboard
        } catch (error) {
            console.error("Error updating post:", error); // Fixed 'err' typo to 'error'
            alert("Failed to update post.");
        }
    };

    return (
        <>
        <div className='edit-page'>
            <h1>Edit Post</h1>
            <p>Edit your blog post</p>
            <div className='edit-box'>
                <form onSubmit={handleSubmit}>
                    <h2>Title</h2>
                    <p>{item.title}</p>
                    <input
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        type="text"
                        placeholder="Enter new blog title"
                        required
                    />
                    <h2>Description</h2>
                    <p>{item.description}</p>
                    <input
                        value={editdescription}
                        onChange={(e) => setEditdescription(e.target.value)}
                        type="text"
                        placeholder="Enter new blog description"
                        required
                    />
                    <h2>Content</h2>
                    <p>can't change or edit the content of the Blog</p>
                    <div className='button-container'>
                        <button type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    );
};

export default EditPost;