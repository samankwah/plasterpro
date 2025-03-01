import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

// Sample blog data - would typically come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Choosing the Right Ceiling Design for Your Home",
    excerpt:
      "Explore aesthetic and functional options for your ceiling design.",
    content: `
      <p>When it comes to interior design, ceilings are often overlooked. However, the right ceiling design can completely transform your space and add significant value to your home.</p>
      
      <h3>Popular Ceiling Design Options</h3>
      <p>There are several ceiling design options to consider for your home:</p>
      <ul>
        <li><strong>Conventional Flat Ceilings:</strong> Simple, clean, and works well in most spaces.</li>
        <li><strong>Tray Ceilings:</strong> Adds depth and visual interest with recessed central areas.</li>
        <li><strong>Coffered Ceilings:</strong> Grid pattern of recessed panels, offering a classic and elegant look.</li>
        <li><strong>POP (Plaster of Paris) Ceilings:</strong> Allows for custom designs and decorative elements.</li>
        <li><strong>Suspended Ceilings:</strong> Great for hiding wiring and ductwork while providing acoustic benefits.</li>
      </ul>
      
      <h3>Considerations When Choosing a Ceiling Design</h3>
      <p>Before deciding on a ceiling design, consider the following factors:</p>
      <ol>
        <li><strong>Room Height:</strong> Lower ceilings may benefit from designs that create the illusion of height.</li>
        <li><strong>Room Purpose:</strong> Different rooms may require different ceiling designs based on functionality.</li>
        <li><strong>Budget:</strong> Some ceiling designs are more cost-effective than others.</li>
        <li><strong>Maintenance:</strong> Consider the long-term care requirements of different ceiling materials.</li>
        <li><strong>Style Compatibility:</strong> Ensure your ceiling design complements the overall style of your home.</li>
      </ol>
      
      <p>At PlasterPro Ghana, we specialize in creating custom ceiling designs that enhance your space while meeting your specific needs and preferences. Contact us today for a consultation to explore the best ceiling design options for your home.</p>
    `,
    author: "Michael Asamoah",
    date: "February 15, 2025",
    category: "Home Improvement",
    imageUrl: "/blog-ceiling-design.jpg",
    tags: ["ceiling design", "home improvement", "interior design"],
    comments: [
      {
        id: 101,
        name: "David Mensah",
        date: "February 17, 2025",
        content:
          "I recently installed a POP ceiling in my living room and it completely transformed the space. Would you recommend POP for bedrooms as well?",
        replies: [
          {
            id: 1011,
            name: "Michael Asamoah",
            date: "February 18, 2025",
            content:
              "Absolutely! POP ceilings work wonderfully in bedrooms. You can opt for simpler designs for a more relaxing atmosphere. We've done many bedroom installations with great results.",
            isAdmin: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "The Benefits of Acoustic Ceilings for Offices & Studios",
    excerpt:
      "Discover how acoustic ceilings can reduce noise and improve work environments.",
    content: `
      <p>In today's busy workplace environments, noise pollution is a significant concern that affects productivity, concentration, and overall employee wellbeing. Acoustic ceilings offer an effective solution to this problem.</p>
      
      <h3>What Are Acoustic Ceilings?</h3>
      <p>Acoustic ceilings are specially designed to absorb sound and reduce noise levels in interior spaces. They typically consist of tiles or panels made from sound-absorbing materials such as mineral fiber, fiberglass, or foam.</p>
      
      <h3>Key Benefits of Acoustic Ceilings</h3>
      <ul>
        <li><strong>Noise Reduction:</strong> Absorbs up to 70% of airborne sound, creating a quieter environment.</li>
        <li><strong>Improved Concentration:</strong> Helps employees focus on tasks without audio distractions.</li>
        <li><strong>Enhanced Privacy:</strong> Reduces sound travel between different areas of an office.</li>
        <li><strong>Better Acoustics:</strong> Creates optimal sound quality for recording studios and conference rooms.</li>
        <li><strong>Stress Reduction:</strong> A quieter environment leads to lower stress levels among employees.</li>
        <li><strong>Energy Efficiency:</strong> Many acoustic ceiling materials also provide thermal insulation.</li>
      </ul>
      
      <h3>Ideal Spaces for Acoustic Ceilings</h3>
      <p>Acoustic ceilings are particularly beneficial in:</p>
      <ul>
        <li>Open-plan offices</li>
        <li>Call centers</li>
        <li>Conference rooms</li>
        <li>Recording studios</li>
        <li>Schools and universities</li>
        <li>Healthcare facilities</li>
        <li>Restaurants and hospitality venues</li>
      </ul>
      
      <p>At PlasterPro Ghana, we offer a wide range of acoustic ceiling solutions tailored to your specific needs and aesthetic preferences. Contact us today to learn how we can help improve the acoustic quality of your workspace.</p>
    `,
    author: "Sarah Adjei",
    date: "February 10, 2025",
    category: "Commercial Spaces",
    imageUrl: "/blog-acoustic-ceiling.jpg",
    tags: ["acoustic ceilings", "office design", "sound reduction"],
    comments: [
      {
        id: 201,
        name: "Emmanuel Osei",
        date: "February 12, 2025",
        content:
          "I've been thinking about installing acoustic ceilings in our company meeting rooms. What maintenance do these require over time?",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    title: "Plasterboard vs. POP – Which One is Right for You?",
    excerpt:
      "Compare durability, cost, and installation of these popular ceiling options.",
    content: `
      <p>When it comes to ceiling and wall finishes, two popular options stand out: Plasterboard (also known as drywall or gypsum board) and Plaster of Paris (POP). Each has its own set of advantages and considerations.</p>
      
      <h3>Plasterboard: The Quick Solution</h3>
      <p>Plasterboard consists of gypsum plaster pressed between two thick sheets of paper.</p>
      
      <h4>Advantages of Plasterboard:</h4>
      <ul>
        <li><strong>Quick Installation:</strong> Faster to install than POP systems.</li>
        <li><strong>Cost-Effective:</strong> Generally less expensive for large areas.</li>
        <li><strong>Fire Resistance:</strong> Provides good fire ratings for improved safety.</li>
        <li><strong>Consistency:</strong> Factory-manufactured for uniform quality.</li>
        <li><strong>Versatility:</strong> Available in various specialized types (moisture-resistant, sound-insulating, etc.).</li>
      </ul>
      
      <h4>Limitations of Plasterboard:</h4>
      <ul>
        <li>Limited design flexibility compared to POP</li>
        <li>Visible joints may require skilled finishing</li>
        <li>Less durable against impacts</li>
      </ul>
      
      <h3>POP: The Design-Focused Option</h3>
      <p>Plaster of Paris is a building material based on calcium sulfate hemihydrate, creating a moldable paste when mixed with water.</p>
      
      <h4>Advantages of POP:</h4>
      <ul>
        <li><strong>Design Flexibility:</strong> Can be molded into virtually any shape or design.</li>
        <li><strong>Seamless Finish:</strong> Creates a smooth, joint-free surface.</li>
        <li><strong>Durability:</strong> More resistant to cracks and dents when properly installed.</li>
        <li><strong>Customization:</strong> Allows for intricate detailing and decorative elements.</li>
        <li><strong>Acoustic Benefits:</strong> Provides good sound absorption.</li>
      </ul>
      
      <h4>Limitations of POP:</h4>
      <ul>
        <li>Longer installation time</li>
        <li>Higher labor costs</li>
        <li>More susceptible to water damage</li>
        <li>Requires skilled artisans for quality results</li>
      </ul>
      
      <h3>Which Should You Choose?</h3>
      <p>Consider POP if:</p>
      <ul>
        <li>You want custom designs and decorative elements</li>
        <li>You're working on a luxury or high-end project</li>
        <li>The aesthetic finish is your priority</li>
        <li>You have flexibility in your timeline</li>
      </ul>
      
      <p>Consider Plasterboard if:</p>
      <ul>
        <li>You need quick installation</li>
        <li>You're working with budget constraints</li>
        <li>You need specialized performance (moisture resistance, fire rating, etc.)</li>
        <li>You prefer low maintenance options</li>
      </ul>
      
      <p>At PlasterPro Ghana, we offer both POP and plasterboard solutions, and our experts can help you determine which option is best suited for your specific project needs. Contact us today for a consultation.</p>
    `,
    author: "Kwame Boateng",
    date: "February 5, 2025",
    category: "Materials",
    imageUrl: "/blog-plasterboard-pop.jpg",
    tags: ["plasterboard", "POP", "materials comparison", "ceiling options"],
    comments: [],
  },
];

// BlogList component - shows all blog posts
const BlogList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative  bg-gradient-to-br from-blue-50 to-gray-100 text-gray-950 py-24">
        {/* <div className="absolute inset-0 bg-blue-950 opacity-60"></div> */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              PlasterPro Blog
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Expert Tips & Industry Trends for Ceiling and Wall Finishing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Intro */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-6"
            >
              Stay Informed with Our Blog
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 mb-10"
            >
              At PlasterPro Ghana, we share expert insights on home improvement,
              interior design trends, and the benefits of different ceiling and
              wall finishing materials. Browse our latest articles to expand
              your knowledge and make informed decisions for your next project.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="h-48 bg-gray-300 relative">
                    {/* Replace with actual images */}
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-4 py-1 text-sm">
                      {post.category}
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                    <div className="flex items-center text-gray-500">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        ></path>
                      </svg>
                      <span>{post.comments.length}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-700">
                Stay updated with our latest articles, projects, and industry
                insights.
              </p>
            </motion.div>
            <motion.form
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg mb-8">
              Contact us today for a consultation, quotation, or showroom visit!
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// BlogPost component - shows individual blog post with comments
const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState({ name: "", email: "", content: "" });
  const [submitting, setSubmitting] = useState(false);
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchPost = () => {
      const foundPost = blogPosts.find((post) => post.id === parseInt(id));
      if (foundPost) {
        setPost(foundPost);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);

    // Simulate API call to submit comment
    setTimeout(() => {
      const newComment = {
        id: Date.now(),
        name: comment.name,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        content: comment.content,
        replies: [],
      };

      if (replyTo) {
        // Add reply to existing comment
        const updatedComments = post.comments.map((c) => {
          if (c.id === replyTo) {
            return {
              ...c,
              replies: [...c.replies, { ...newComment, id: Date.now() + 1 }],
            };
          }
          return c;
        });

        setPost((prev) => ({ ...prev, comments: updatedComments }));
        setReplyTo(null);
      } else {
        // Add new comment
        setPost((prev) => ({
          ...prev,
          comments: [...prev.comments, newComment],
        }));
      }

      setComment({ name: "", email: "", content: "" });
      setSubmitting(false);
    }, 1000);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-700">Loading article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-gray-700 mb-8">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-4">
              <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-gray-300 text-sm mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 sm:h-80 bg-gray-300 relative">
                {/* Replace with actual image */}
                {/* <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" /> */}
              </div>

              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">
              Comments ({post.comments.length})
            </h2>

            {/* Comment List */}
            {post.comments.length > 0 ? (
              <div className="space-y-6 mb-12">
                {post.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-start mb-4">
                      <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-semibold">
                          {comment.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-bold">{comment.name}</h4>
                          {comment.isAdmin && (
                            <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                              Admin
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 text-sm">{comment.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{comment.content}</p>
                    <button
                      onClick={() => setReplyTo(comment.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center"
                    >
                      Reply
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                        ></path>
                      </svg>
                    </button>

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="mt-6 pl-6 border-l-2 border-gray-200 space-y-6">
                        {comment.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="bg-gray-50 rounded-lg p-4"
                          >
                            <div className="flex items-start mb-3">
                              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                <span className="text-blue-700 font-semibold">
                                  {reply.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <h5 className="font-bold">{reply.name}</h5>
                                  {reply.isAdmin && (
                                    <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                                      Admin
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-500 text-sm">
                                  {reply.date}
                                </p>
                              </div>
                            </div>
                            <p className="text-gray-700">{reply.content}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Reply Form */}
                    {replyTo === comment.id && (
                      <div className="mt-4 pl-6 border-l-2 border-gray-200">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold mb-3">
                            Reply to {comment.name}
                          </h5>
                          <form onSubmit={handleCommentSubmit}>
                            <div className="mb-4">
                              <input
                                type="text"
                                name="name"
                                value={comment.name}
                                onChange={handleCommentChange}
                                placeholder="Your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <input
                                type="email"
                                name="email"
                                value={comment.email}
                                onChange={handleCommentChange}
                                placeholder="Your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <textarea
                                name="content"
                                value={comment.content}
                                onChange={handleCommentChange}
                                placeholder="Your reply"
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                              <button
                                type="submit"
                                disabled={submitting}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 disabled:bg-blue-400"
                              >
                                {submitting ? "Sending..." : "Post Reply"}
                              </button>
                              <button
                                type="button"
                                onClick={() => setReplyTo(null)}
                                className="text-gray-500 hover:text-gray-700"
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center mb-12">
                <p className="text-gray-700">
                  No comments yet. Be the first to share your thoughts!
                </p>
              </div>
            )}

            {/* Comment Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">Leave a Comment</h3>
              <form onSubmit={handleCommentSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={comment.name}
                      onChange={handleCommentChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={comment.email}
                      onChange={handleCommentChange}
                      placeholder="Your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    name="content"
                    value={comment.content}
                    onChange={handleCommentChange}
                    placeholder="Your comment"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 disabled:bg-blue-400"
                  >
                    {submitting ? "Submitting..." : "Post Comment"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { BlogList, BlogPost };
