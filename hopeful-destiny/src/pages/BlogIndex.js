import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const BlogIndex = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Trans Nzoia County",
      excerpt: "Learn about the demographics, challenges, and opportunities in Trans Nzoia County where we operate.",
      date: "November 15, 2024",
      author: "Hopeful Destiny Team",
      slug: "/blog/understanding-trans-nzoia",
      category: "Community"
    },
    // Add more blog posts here as you create them
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Added pt-20 to account for fixed navbar */}
      <div className="pt-20 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Stories, updates, and insights from our work in the community. 
              Discover how we're making a difference in Trans Nzoia County.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Blog Post Image Placeholder */}
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 h-48 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">HD</span>
                  </div>
                  
                  {/* Blog Post Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mb-3">
                      {post.category}
                    </span>
                    
                    <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-yellow-700 transition">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      to={post.slug}
                      className="inline-flex items-center text-yellow-700 font-semibold hover:text-yellow-800 transition"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Coming Soon!
              </h3>
              <p className="text-gray-600">
                We're working on exciting blog content. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Stay Updated?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest stories and updates from Hopeful Destiny.
          </p>
          <button className="bg-white text-yellow-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
            Subscribe Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogIndex;
