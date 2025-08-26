import blog4 from '/images/media/blog/4.jpg';
import blog7 from '/images/media/blog/7.jpg';
import blog9 from '/images/media/blog/9.jpg';
import blog10 from '/images/media/blog/10.jpg';
import blog11 from '/images/media/blog/11.jpg';

interface CategoryStatType {
    id: number;
    name: string;
    count: string;
    badgeClass: string;
}

interface PopularPostType {
    id: number;
    image: string;
    title: string;
    dateViews: string;
}

interface TagType {
    id: number;
    title: string;
}

export const CategoryStats: CategoryStatType[] = [
    { id: 1, name: "Technology & AI", count: "12,450", badgeClass: "bg-primary-transparent" },
    { id: 2, name: "Health & Wellness", count: "9,320", badgeClass: "bg-secondary-transparent" },
    { id: 3, name: "Personal Finance", count: "7,800", badgeClass: "bg-warning-transparent" },
    { id: 4, name: "Travel & Adventure", count: "5,600", badgeClass: "bg-info-transparent" },
    { id: 5, name: "Business & Entrepreneurship", count: "8,950", badgeClass: "bg-success-transparent" },
    { id: 6, name: "Lifestyle", count: "11,200", badgeClass: "bg-danger-transparent" },
],
    //  Blogs you may like
    PopularPosts: PopularPostType[] = [
        {
            id: 1,
            image: blog11,
            title: "Building a Sustainable Future: How Green Technology is Changing the World",
            dateViews: "Mar 15, 2025 - 1.8k Views",
        },
        {
            id: 2,
            image: blog10,
            title: "Exploring the Rise of Remote Work: Trends and Best Practices",
            dateViews: "Apr 3, 2025 - 2.3k Views",
        },
        {
            id: 3,
            image: blog9,
            title: "Digital Marketing Trends: What You Need to Know for 2025",
            dateViews: "May 10, 2025 - 3.1k Views",
        },
        {
            id: 4,
            image: blog4,
            title: "Top 5 Budget-Friendly Home Improvement Projects",
            dateViews: "Jun 22, 2025 - 4.0k Views",
        },
        {
            id: 5,
            image: blog7,
            title: "Mastering the Art of Public Speaking",
            dateViews: "Jul 19, 2025 - 850 Views",
        },
    ],
    Tags: TagType[] = [
        { id: 1, title: "Artificial Intelligence" },
        { id: 2, title: "Machine Learning" },
        { id: 3, title: "Tech Trends" },
        { id: 4, title: "Software Development" },
        { id: 5, title: "Mental Health" },
        { id: 6, title: "Fitness Tips" },
        { id: 7, title: "Weight Loss" },
        { id: 8, title: "Self-Care" },
        { id: 9, title: "Saving Money" },
        { id: 10, title: "Investing" },
        { id: 11, title: "Travel Tips" },
        { id: 12, title: "Bucket List" },
        { id: 13, title: "Solo Travel" },
        { id: 14, title: "Startup Tips" },
        { id: 15, title: "Leadership" },
        { id: 16, title: "E-commerce" },
        { id: 17, title: "TV Shows" },
        { id: 18, title: "Motivation" },
    ];