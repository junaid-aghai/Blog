import { useState, useEffect } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreatePost = ({items, fetchAPI}) => {
    const navigate = useNavigate();


    
    const [newBlogPosts, setNewBlogPosts] = useState(''); // Initialize as string
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const handleInsert = async (e) => {
        e.preventDefault();
        if (!newTitle || !newDescription) return;
        try {
            await axios.post("http://localhost:3000/api/insert", {
                title: newTitle,
                description: newDescription,
                blogContent: newBlogPosts,
                date: new Date()
            });
            setNewTitle('');
            setNewDescription('');
            setNewBlogPosts('');
            fetchAPI();
            alert("Post successfully!");
            navigate('/admin/dashboard');
        } catch (error) {
            console.error("Error inserting item:", error);
        }
    };
    return (
        <section className="post-container">
            <div className="post-header">
                <h1>Create New Post</h1>
                <p>Fill in the details below to create a new post.</p>
            </div>
            <div className="post-card">
                <form className="post-form" onSubmit={handleInsert}>
                    <div className="post-group">
                        <label className="post-label">Title</label>
                        <input
                            type="text"
                            className="post-input"
                            placeholder="Enter post title"
                            required
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </div>
                    <div className="post-group">
                        <label className="post-label">Description</label>
                        <input
                            type="text"
                            className="post-input"
                            placeholder="Enter post description"
                            required
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                    </div>
                    <div className="post-group">
                        <label className="post-label">Content</label>
                        <textarea
                            className="post-textarea"
                            placeholder="Enter post content"
                            required
                            value={newBlogPosts}
                            onChange={(e) => setNewBlogPosts(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="post-btn">Publish</button>
                </form>
            </div>
        </section>
    )
}
export default CreatePost