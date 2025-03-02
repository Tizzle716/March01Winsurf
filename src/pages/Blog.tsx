import React from 'react';

export const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Revolutionizing Business with AI Automation',
      description: 'Discover how AI automation is transforming businesses across industries.',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
      date: '2025-02-28',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'The Future of Work: AI and Human Collaboration',
      description: 'Exploring the synergy between human expertise and AI capabilities.',
      imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
      date: '2025-02-25',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Implementing AI Solutions: Best Practices',
      description: 'Learn the key strategies for successful AI implementation in your organization.',
      imageUrl: 'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=800',
      date: '2025-02-22',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Insights</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay updated with the latest trends and insights in AI automation.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
