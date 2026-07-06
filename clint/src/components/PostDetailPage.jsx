import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetailPage = ({ items }) => {

  const { id } = useParams();
  const item = items?.find(post => post._id === id);

  return (
    <div className="post-detail">
      <h1>{item.title}</h1>
      <div className='date'>
        <p>
          {item.date
            ? new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
            : 'No date available'
          }
        </p>
      </div>
      <div className='box'>
        <p>{item.blogContent}</p>
      </div>
    </div>
  );
}

export default PostDetailPage