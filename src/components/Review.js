import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaPaperPlane, FaUser, FaCheckCircle, FaTimes } from 'react-icons/fa';

const reviews = [
    {
        name: "Samuel Niyokwizerwa",
        role: "Project Manager",
        content: "Niyobyose Paulin is really amazing. He delivers quality products on time. His communication skills are the best, I truly loved working with him and I am looking forward to working with him on other projects.",
        rating: 5,
    },
    {
        name: "Ishimwe Shemu",
        role: "Construction Engineer",
        content: "I've worked with Paulin for about a year and his coding skills are really unmatched. When it comes to providing solutions to complex construction problems using coding, he is really the best.",
        rating: 5,
    },
    {
        name: "Client Review",
        role: "Business Owner",
        content: "Excellent work on our BIM project. Paulin's expertise in both software development and construction technology made our project a huge success.",
        rating: 5,
    }
];

const Review = () => {
    const [showForm, setShowForm] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        content: '',
        rating: 5
    });

    // Auto-hide toast after 5 seconds
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRatingClick = (rating) => {
        setFormData(prev => ({
            ...prev,
            rating
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the review to your backend
        console.log('Review submitted:', formData);
        
        // Show success toast
        setShowToast(true);
        
        // Reset form and hide it
        setFormData({ name: '', role: '', content: '', rating: 5 });
        setShowForm(false);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900 overflow-hidden" id="reviews">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Client Reviews
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        What clients say about working with me
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {reviews.map((review, index) => (
                        <div key={index} className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                            {/* Background decoration */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:blur-xl transition-all duration-300"></div>
                            
                            <div className="relative p-6 md:p-8">
                                {/* Quote icon */}
                                <div className="absolute top-4 right-4 text-indigo-500/20 dark:text-indigo-400/20 group-hover:text-indigo-500/30 dark:group-hover:text-indigo-400/30 transition-colors duration-300">
                                    <FaQuoteLeft className="text-2xl md:text-3xl" />
                                </div>

                                {/* Rating stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 text-sm md:text-base" />
                                    ))}
                                </div>

                                {/* Review content */}
                                <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic text-sm md:text-base min-h-[120px] flex items-center">
                                    "{review.content}"
                                </blockquote>

                                {/* Reviewer info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                                            {review.name}
                                        </h4>
                                        <p className="text-indigo-600 dark:text-indigo-400 font-medium text-xs md:text-sm">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* Leave a Review Section */}
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                            Share Your Experience
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Worked with me? I'd love to hear about your experience!
                        </p>
                        
                        {!showForm ? (
                            <button
                                onClick={() => setShowForm(true)}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <FaUser className="text-lg" />
                                <span>Leave a Review</span>
                            </button>
                        ) : (
                            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-lg">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Your Role/Title
                                            </label>
                                            <input
                                                type="text"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                                placeholder="e.g., Project Manager"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Rating *
                                        </label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => handleRatingClick(star)}
                                                    className="transition-all duration-200 hover:scale-110"
                                                >
                                                    <FaStar
                                                        className={`text-2xl ${
                                                            star <= formData.rating
                                                                ? 'text-yellow-400'
                                                                : 'text-gray-300 dark:text-gray-600'
                                                        }`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Your Review *
                                        </label>
                                        <textarea
                                            name="content"
                                            value={formData.content}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                                            placeholder="Share your experience working with me..."
                                        />
                                    </div>

                                    <div className="flex gap-4 justify-center">
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                        >
                                            <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                                            <span>Submit Review</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Success Toast Notification */}
            {showToast && (
                <div className="fixed top-4 right-4 z-50 animate-fade-in-up">
                    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-green-200/50 dark:border-green-700/50 rounded-2xl shadow-2xl p-6 max-w-sm">
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl"></div>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-xl"></div>
                        
                        <div className="relative flex items-start gap-4">
                            {/* Success icon */}
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                                <FaCheckCircle className="text-white text-xl" />
                            </div>
                            
                            {/* Toast content */}
                            <div className="flex-grow">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    Review Submitted!
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Thank you for your review! It will be reviewed and published soon.
                                </p>
                            </div>
                            
                            {/* Close button */}
                            <button
                                onClick={() => setShowToast(false)}
                                className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <FaTimes className="text-sm" />
                            </button>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-progress-bar"></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Review