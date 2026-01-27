import React from 'react';
import { blogPosts } from '../data/BlogContent';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';



const BlogCard = ({ post }) => {

  const navigate = useNavigate();

  if (!post) return null;

  
  const {id,title,date, tag, excerpt, image } = post;

  const handleCardClick = () => {
    navigate(`/blog/${id}`);
    window.scrollTo(0,0);
  }


  return (
    <div
    onClick={handleCardClick}
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400';
        }}
      />
      <div className="p-6">
        <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
          {tag}
        </span>
        <p className="text-gray-500 text-sm mt-3 mb-2">{date}</p>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        {excerpt && <p className="text-gray-600">{excerpt}</p>}

        {/* read more arrow */}
        <div className="mt-3 flex items-center text-purple-600 font-bold text-sm group/btn">
          <span>READ MORE</span>
          <ArrowRight className="ml-1.5 w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

const Blog = ({isHomePage}) => {

  const displayPosts = isHomePage ? blogPosts.slice(0,3): blogPosts;

  return (
<section id="blog" className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-purple-600 font-semibold text-center mb-2">TECHNO TRENDS</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {isHomePage ? 'Recent ' : 'All '} Blog <span className="text-purple-600">Posts</span>
        </h2>
        
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Show "See More" button ONLY on the home page */}
        {isHomePage && blogPosts.length > 5 && (
          <div className="text-center mt-12">
            <Link 
              to="/all-blogs"
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-200"
            >
              See All Posts
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;