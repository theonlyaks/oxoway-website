'use client';

import { useState } from 'react';
import { db } from '../../lib/firebase'; // Adjust the import path as needed
import { collection, addDoc } from 'firebase/firestore';

export default function Home() {
  const [title, setTitle] = useState('');
  const [displayContent, setDisplayContent] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !displayContent.trim() || !content.trim() || !category.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, 'news'), {
        title,
        displayContent,
        content,
        category,
        createdAt: new Date()
      });
  
      // Get the ID of the newly inserted document
      const newDocId = docRef.id;
  
      // Prepare the data_set with the new document ID
      const data_set = {
        newsId: newDocId
      };

      const notificationResponse = await fetch('https://us-central1-oxoway-app.cloudfunctions.net/sendNotificationToAll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New News Article',
          body: `A new article in the category ${category} has been posted.`,
          buttons: ['View'],
          data_set:data_set
        }),
      });
  
      if (!notificationResponse.ok) {
        throw new Error('Failed to send notification');
      }
  
      console.log('Notification sent successfully');


      setTitle('');
      setDisplayContent('');
      setContent('');
      setCategory('');
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('An error occurred while submitting the news');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Submit News</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="displayContent" className="block text-sm font-medium text-gray-700">Display Content</label>
              <textarea
                id="displayContent"
                value={displayContent}
                onChange={(e) => setDisplayContent(e.target.value)}
                rows="2"
                className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">Full Content</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="4"
                className="mt-1 block text-black w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit News'}
              </button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center px-4 py-6 pointer-events-none sm:p-0 z-50">
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
            <div className="rounded-lg shadow-xs overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      News submitted successfully!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}