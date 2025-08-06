import p1_img from '../assets/women1.jfif'
import p2_img from '../assets/men1.webp'
import p3_img from '../assets/women2.jpg'
import p4_img from '../assets/men2.jpg'
import p5_img from '../assets/men3.webp'
import p6_img from '../assets/women3.jpg'
import p7_img from '../assets/men4.jfif'
import p8_img from '../assets/women4.webp'
import p9_img from '../assets/men5.webp'
import p10_img from '../assets/women5.webp'
import p11_img from '../assets/men6.webp'
import p12_img from '../assets/women6.webp'
import p13_img from '../assets/men7.jfif'
import p14_img from '../assets/women7.webp'
import p15_img from '../assets/men8.jpg'
import p16_img from '../assets/women8.jfif'

import p21_img from '../assets/kid1.jpg'
import p23_img from '../assets/kid2.jfif'
import p25_img from '../assets/kid3.jfif'
import p27_img from '../assets/kid4.webp'
import p29_img from '../assets/kid5.jfif'
import p31_img from '../assets/kid6.jfif'
import p33_img from '../assets/kid7.webp'
import p35_img from '../assets/kid8.jfif'

let all_product = [
    {
        id: 1,
        name: "Kurti",
        category: "women",
        image: p1_img,
        image_gallery: [p1_img, p1_img, p1_img],
        new_price: 50.0,
        old_price: 80.5,
        rating: 4.5,
        review_count: 120,
        description: "A beautiful and traditional Kurti perfect for any festive occasion. Made with high-quality fabric for maximum comfort and style.",
        tags: ["Traditional", "Ethnic", "Casual"]
    },
    {
        id: 2,
        name: "Jeans",
        category: "men",
        image: p2_img,
        image_gallery: [p2_img, p2_img, p2_img],
        new_price: 60.0,
        old_price: 90.5,
        rating: 3.5,
        review_count: 85,
        description: "Classic blue denim jeans with a modern fit. Ideal for daily wear and a casual look.",
        tags: ["Modern", "Casual", "Denim"]
    },
    {
        id: 3,
        name: "Saree",
        category: "women",
        image: p3_img,
        image_gallery: [p3_img, p3_img, p3_img],
        new_price: 75.0,
        old_price: 120.0,
        rating: 4.0,
        review_count: 150,
        description: "Elegant silk saree with intricate designs. Perfect for weddings and special events.",
        tags: ["Traditional", "Ethnic", "Elegant"]
    },
    {
        id: 4,
        name: "Jacket",
        category: "men",
        image: p4_img,
        image_gallery: [p4_img, p4_img, p4_img],
        new_price: 90.0,
        old_price: 140.0,
        rating: 4.8,
        review_count: 200,
        description: "Stylish denim jacket for men, a versatile addition to your wardrobe.",
        tags: ["Trendy", "Casual", "Denim"]
    },
    {
        id: 5,
        name: "T-Shirt",
        category: "men",
        image: p5_img,
        image_gallery: [p5_img, p5_img, p5_img],
        new_price: 45.0,
        old_price: 70.0,
        rating: 4.2,
        review_count: 95,
        description: "A comfortable and simple black T-Shirt, a must-have for everyday style.",
        tags: ["Casual", "Basic", "Plain"]
    },
    {
        id: 6,
        name: "Dress",
        category: "women",
        image: p6_img,
        image_gallery: [p6_img, p6_img, p6_img],
        new_price: 85.0,
        old_price: 130.0,
        rating: 3.9,
        review_count: 110,
        description: "A beautiful floral dress with a flowy design, perfect for a sunny day out.",
        tags: ["Floral", "Summer", "Casual"]
    },
    {
        id: 7,
        name: "Hoodie",
        category: "men",
        image: p7_img,
        image_gallery: [p7_img, p7_img, p7_img],
        new_price: 95.0,
        old_price: 150.0,
        rating: 4.6,
        review_count: 180,
        description: "A cozy black hoodie, perfect for cold weather or a relaxed look.",
        tags: ["Casual", "Winter", "Hoodie"]
    },
    {
        id: 8,
        name: "Leggings",
        category: "women",
        image: p8_img,
        image_gallery: [p8_img, p8_img, p8_img],
        new_price: 55.0,
        old_price: 100.0,
        rating: 4.1,
        review_count: 90,
        description: "Comfortable and stylish leggings, ideal for workouts or a casual day.",
        tags: ["Workout", "Casual", "Leggings"]
    },
    {
        id: 9,
        name: "Shirt",
        category: "men",
        image: p9_img,
        image_gallery: [p9_img, p9_img, p9_img],
        new_price: 70.0,
        old_price: 110.0,
        rating: 4.3,
        review_count: 135,
        description: "A formal shirt in a soft color, suitable for office wear or a semi-formal event.",
        tags: ["Formal", "Office", "Classic"]
    },
    {
        id: 10,
        name: "Jumpsuit",
        category: "women",
        image: p10_img,
        image_gallery: [p10_img, p10_img, p10_img],
        new_price: 88.0,
        old_price: 135.0,
        rating: 4.7,
        review_count: 160,
        description: "A chic black jumpsuit, perfect for a night out or a special occasion.",
        tags: ["Elegant", "Party", "Modern"]
    },
    {
        id: 11,
        name: "Sweater",
        category: "men",
        image: p11_img,
        image_gallery: [p11_img, p11_img, p11_img],
        new_price: 92.0,
        old_price: 145.0,
        rating: 4.4,
        review_count: 145,
        description: "A warm and cozy sweater, a perfect choice for the winter season.",
        tags: ["Winter", "Comfort", "Sweater"]
    },
    {
        id: 12,
        name: "Gown",
        category: "women",
        image: p12_img,
        image_gallery: [p12_img, p12_img, p12_img],
        new_price: 99.0,
        old_price: 160.0,
        rating: 4.9,
        review_count: 220,
        description: "A stunning black gown, perfect for a formal event or a gala night.",
        tags: ["Gown", "Elegant", "Party"]
    },
    {
        id: 13,
        name: "Shorts",
        category: "men",
        image: p13_img,
        image_gallery: [p13_img, p13_img, p13_img],
        new_price: 40.0,
        old_price: 65.0,
        rating: 3.8,
        review_count: 75,
        description: "Comfortable and casual shorts, a great option for summer or a beach day.",
        tags: ["Casual", "Summer", "Shorts"]
    },
    {
        id: 14,
        name: "Top",
        category: "women",
        image: p14_img,
        image_gallery: [p14_img, p14_img, p14_img],
        new_price: 52.0,
        old_price: 85.0,
        rating: 4.1,
        review_count: 100,
        description: "A simple and stylish top, versatile for any casual outing.",
        tags: ["Casual", "Modern", "Top"]
    },
    {
        id: 15,
        name: "Kurta",
        category: "men",
        image: p15_img,
        image_gallery: [p15_img, p15_img, p15_img],
        new_price: 78.0,
        old_price: 115.0,
        rating: 4.6,
        review_count: 130,
        description: "A traditional men's kurta, perfect for festive wear and cultural events.",
        tags: ["Traditional", "Ethnic", "Kurta"]
    },
    {
        id: 16,
        name: "Skirt",
        category: "women",
        image: p16_img,
        image_gallery: [p16_img, p16_img, p16_img],
        new_price: 73.0,
        old_price: 110.0,
        rating: 4.4,
        review_count: 105,
        description: "A fashionable skirt with a floral pattern, great for a feminine and trendy look.",
        tags: ["Skirt", "Floral", "Trendy"]
    },
    {
        id: 21,
        name: "Denim Shirt",
        category: "kid",
        image: p21_img,
        image_gallery: [p21_img, p21_img, p21_img],
        new_price: 85.0,
        old_price: 140.0,
        rating: 4.0,
        review_count: 50,
        description: "A cool denim shirt for kids, a stylish choice for casual outings.",
        tags: ["Denim", "Casual", "Kids"]
    },
    {
        id: 23,
        name: "Cargo Pants",
        category: "kid",
        image: p23_img,
        image_gallery: [p23_img, p23_img, p23_img],
        new_price: 88.0,
        old_price: 130.0,
        rating: 4.3,
        review_count: 65,
        description: "Durable cargo pants for kids, comfortable and practical for all-day play.",
        tags: ["Cargo", "Comfort", "Kids"]
    },
    {
        id: 25,
        name: "Trousers",
        category: "kid",
        image: p25_img,
        image_gallery: [p25_img, p25_img, p25_img],
        new_price: 76.0,
        old_price: 120.0,
        rating: 4.6,
        review_count: 70,
        description: "Formal trousers for kids, a smart option for special occasions.",
        tags: ["Formal", "Kids", "Trousers"]
    },
    {
        id: 27,
        name: "Tank Top",
        category: "kid",
        image: p27_img,
        image_gallery: [p27_img, p27_img, p27_img],
        new_price: 49.0,
        old_price: 80.0,
        rating: 3.9,
        review_count: 45,
        description: "A casual tank top for kids, perfect for summer.",
        tags: ["Casual", "Summer", "Kids"]
    },
    {
        id: 29,
        name: "Formal Pants",
        category: "kid",
        image: p29_img,
        image_gallery: [p29_img, p29_img, p29_img],
        new_price: 98.0,
        old_price: 160.0,
        rating: 4.8,
        review_count: 80,
        description: "Stylish formal pants for kids, great for school events or parties.",
        tags: ["Formal", "Kids", "Pants"]
    },
    {
        id: 31,
        name: "Leather Jacket",
        category: "kid",
        image: p31_img,
        image_gallery: [p31_img, p31_img, p31_img],
        new_price: 150.0,
        old_price: 250.0,
        rating: 4.9,
        review_count: 95,
        description: "A cool leather jacket for kids, a great addition to their winter wardrobe.",
        tags: ["Winter", "Jacket", "Kids"]
    },
    {
        id: 33,
        name: "Gym Shorts",
        category: "kid",
        image: p33_img,
        image_gallery: [p33_img, p33_img, p33_img],
        new_price: 55.0,
        old_price: 90.0,
        rating: 4.1,
        review_count: 60,
        description: "Comfortable gym shorts for kids, perfect for sports and outdoor activities.",
        tags: ["Sports", "Kids", "Shorts"]
    },
    {
        id: 35,
        name: "Casual Blazer",
        category: "kid",
        image: p35_img,
        image_gallery: [p35_img, p35_img, p35_img],
        new_price: 105.0,
        old_price: 170.0,
        rating: 4.7,
        review_count: 75,
        description: "A stylish casual blazer for kids, perfect for a smart-casual look.",
        tags: ["Casual", "Blazer", "Kids"]
    },
]

export default all_product;