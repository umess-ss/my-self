import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/BlogContent';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the post
  const post = blogPosts.find((p) => p.id === Number(id));

  // Scroll to top immediately when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <button onClick={() => navigate('/')} className="text-purple-600 underline">
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">


        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Portfolio</span>
        </button>


        {/* Header Section */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-md text-sm font-bold flex items-center gap-1">
              <Tag size={14} /> {post.tag}
            </span>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1"><User size={14} /> By Rohan</span>
            </div>
          </div>
          

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
        </header>



        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>



        {/* Post Content */}
        <div className="prose prose-lg prose-purple max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium italic border-l-4 border-purple-500 pl-6">
            {post.excerpt}
          </p>
          
          <div className="prose prose-purple lg:prose-xl">
              <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
        
        {/* Footer / Call to Action */}
        <div className="mt-16 pt-8 border-t border-gray-100">
           <h4 className="font-bold text-gray-900 mb-2">Enjoyed this post</h4>
           <p className="text-gray-500">Feel free to reach out via the contact section on the home page!</p>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;