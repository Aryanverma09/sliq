import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Ultimate Skincare Routine for Glowing Skin',
      excerpt: 'Discover the steps to achieve that radiant look with our expert compilation, from cleansing to moisturizing.',
      date: 'Oct 12, 2023',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Top 5 Summer Essentials You Need',
      excerpt: 'Stay protected and stylish this summer with our top picks for the season. Don\'t miss out on these must-haves.',
      date: 'June 5, 2023',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Why Organic Ingredients Matter',
      excerpt: 'Learn about the benefits of using organic ingredients in your beauty products and how they help your skin long-term.',
      date: 'Sept 20, 2023',
      image: 'https://images.unsplash.com/photo-1556228852-6d35a585d566?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-primary-dark mb-4 text-center">Our Blog</h1>
      <p className="text-text-muted text-center max-w-2xl mx-auto mb-16">
        Latest beauty tips, trends, and advice from our experts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden mb-4 h-64 relative">
               <img 
                 src={post.image} 
                 alt={post.title} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
            </div>
            <div className="space-y-2">
               <span className="text-xs font-bold text-primary-dark uppercase tracking-wider">{post.date}</span>
               <h3 className="text-xl font-serif font-bold text-primary-dark leading-tight group-hover:text-opacity-80 transition-colors">
                 {post.title}
               </h3>
               <p className="text-text-muted text-sm line-clamp-3 leading-relaxed">
                 {post.excerpt}
               </p>
               <button className="text-primary-dark font-medium text-sm hover:underline mt-2">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
