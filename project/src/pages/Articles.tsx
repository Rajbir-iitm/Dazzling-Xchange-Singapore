import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { collection, getDocs, query as fbQuery, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

interface Article {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
}

function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        setLoading(true);
        const chaptersRef = collection(db, 'chapters');
        const chaptersQuery = fbQuery(chaptersRef, orderBy('title'));
        const chaptersSnapshot = await getDocs(chaptersQuery);

        const chaptersData: Article[] = chaptersSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || 'Untitled Chapter',
            description: data.description || '',
            imageUrl: data.imageUrl || 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
          };
        });

        console.log('Loaded chapters from Firestore:', chaptersData);
        setArticles(chaptersData);
      } catch (error) {
        console.error('Error fetching chapters:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    (article.description && article.description.toLowerCase().includes(query.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="bg-black min-h-screen">
        {/* Loading Hero */}
        <section className="relative pt-20 px-6 lg:px-16 pb-16">
          <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto relative z-10 pt-8 lg:pt-16">
            <div className="w-28 h-7 bg-neutral-800 rounded-full animate-pulse mb-8" />
            <div className="w-[500px] max-w-full h-16 bg-neutral-800 rounded-lg animate-pulse mb-4" />
            <div className="w-[400px] max-w-full h-16 bg-neutral-800 rounded-lg animate-pulse mb-8" />
            <div className="w-[450px] max-w-full h-6 bg-neutral-800/60 rounded animate-pulse mb-3" />
            <div className="w-[350px] max-w-full h-6 bg-neutral-800/60 rounded animate-pulse mb-10" />
            <div className="w-full max-w-md h-14 bg-neutral-800 rounded-full animate-pulse" />
          </div>
        </section>

        {/* Loading Grid */}
        <section className="px-6 lg:px-16 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden animate-pulse">
                <div className="h-52 bg-neutral-800/60" />
                <div className="p-6 space-y-4">
                  <div className="h-5 bg-neutral-800 rounded w-1/3" />
                  <div className="h-6 bg-neutral-800 rounded w-full" />
                  <div className="h-4 bg-neutral-800/60 rounded w-3/4" />
                  <div className="h-4 bg-neutral-800/60 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen pt-20 px-6 lg:px-16 pb-20 flex flex-col justify-start overflow-hidden">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl pt-4 lg:pt-8">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/5 mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            >
              Articles & Guides
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            >
              <span className="text-white">Insights for</span><br />
              <span className="gradient-text">smarter transfers.</span>
            </motion.h1>

            <motion.p
              className="text-neutral-400 text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            >
              Expert guides, tutorials, and insights to help you navigate international money transfers, compliance, and financial solutions.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-md mt-10 relative"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            >
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-neutral-500 w-5 h-5" />
              <input
                type="search"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-neutral-900/80 text-white placeholder-neutral-500 rounded-full pl-14 pr-6 py-4 transition-all duration-300 border border-neutral-800 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 hover:border-neutral-700 backdrop-blur-sm"
              />
            </motion.div>

            <motion.div
              className="mt-10 flex"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            >
              <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ARTICLES GRID ─── */}
      <section className="pt-16 px-6 lg:px-16 pb-28">
        <div className="max-w-6xl w-full">
          {/* Results Count */}
          {query && (
            <motion.p
              className="text-neutral-500 text-sm mb-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            >
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found for "{query}"
            </motion.p>
          )}

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={index % 3}
                >
                  <Link
                    to={`/articles/${article.id}`}
                    className="group block glass-card rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    {/* Image with fallback */}
                    <div className="overflow-hidden h-52 bg-neutral-900">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-700"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>';
                          }
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center text-neutral-500 text-xs font-medium uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5 mr-1.5" />
                        <span>Article</span>
                      </div>

                      <h3 className="text-white text-lg font-bold group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {article.title}
                      </h3>

                      <p
                        className="text-neutral-400 text-sm leading-relaxed"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {article.description || 'Explore this comprehensive guide to enhance your understanding of international financial services.'}
                      </p>

                      <div className="flex items-center text-primary text-sm font-medium pt-2 group-hover:gap-2 transition-all duration-200">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <motion.div
              className="text-center py-28"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-10 h-10 text-neutral-600" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">No articles found</h3>
              <p className="text-neutral-400 max-w-md mx-auto mb-8">
                {query
                  ? "We couldn't find any articles matching your search. Try different keywords."
                  : "No articles are available at the moment. Check back soon for new content!"}
              </p>
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="px-8 py-3 bg-primary text-neutral-950 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(0,208,132,0.4)] transition-all duration-300 hover:scale-[1.02]"
                >
                  Clear Search
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Articles;
