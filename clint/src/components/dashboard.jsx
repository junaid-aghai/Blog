import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const dashboard = ({items, fetchAPI}) => {


    const handleDelete = async (_id) => {
        if (!confirm("Are you sure you want to delete this post?")) return;
        try {
            await axios.delete(`http://localhost:3000/delete/${_id}`);
            await fetchAPI();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const navigate = useNavigate();
    function handleCreatePost() {
        navigate('/admin/dashboard/create');
    }
    function handleEditPost(_id){
        navigate(`/admin/dashboard/edit/${_id}`)
    }
    return (
        <>
            <section className="dashboard">
                <div className="dashboard-header">
                    <div >
                        <h1>Admin Dashboard</h1>
                        <p>Manage your blog posts</p>
                    </div>
                    <div >
                        <button onClick={() => navigate('/')}> <i className="ri-logout-box-r-line"></i> Logout</button>
                    </div>
                </div>
                <button className="create-post-btn" onClick={handleCreatePost}><i className="ri-add-large-line"></i> Create New Post</button>
                <div className="published-posts">
                    <h2>Published Posts</h2>
                    <p>{items ? items.length : 0} posts total</p>
                    {items.map((item) => (
                        <div className="post-item" key={item._id}>
                            <div className="post-info">
                                <h2>{item.title}</h2>
                                <p>
                                    {item.date
                                        ? new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                                        : 'No date available'
                                    }
                                </p>
                            </div>
                            <div className="post-actions">
                                <button className='post-edit' onClick={() => handleEditPost(item._id)}><i class="ri-pencil-ai-line"></i>Edit</button>
                                <button className='post-delete' onClick={() => handleDelete(item._id)}><i className="ri-delete-bin-line"></i> Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default dashboard