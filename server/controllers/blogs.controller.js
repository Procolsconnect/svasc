const BlogsService = require('../services/blogs.service');
const path = require('path');
const fs = require('fs');

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogsService.getAllBlogs();
        res.status(200).json({
            success: true,
            data: blogs,
            message: "Blogs fetched successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogsService.getBlogById(id);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, data: blog, message: "Blog fetched successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createBlog = async (req, res) => {
    try {
        const { category, description, cardTitles, cardDescriptions } = req.body;

        let parsedCardTitles = [];
        let parsedCardDescriptions = [];
        if (cardTitles) {
            try { parsedCardTitles = JSON.parse(cardTitles); } catch (e) { parsedCardTitles = []; }
        }
        if (cardDescriptions) {
            try { parsedCardDescriptions = JSON.parse(cardDescriptions); } catch (e) { parsedCardDescriptions = []; }
        }

        const currentCount = await BlogsService.getBlogCount();

        const cards = (req.files && req.files.cardImages) ? req.files.cardImages.map((file, index) => ({
            title: parsedCardTitles[index] || '',
            description: parsedCardDescriptions[index] || '',
            image: `/uploads/${file.filename}`
        })) : [];

        const bannerImagePath = (req.files && req.files.bannerImage && req.files.bannerImage[0])
            ? `/uploads/${req.files.bannerImage[0].filename}`
            : null;

        const blog = await BlogsService.createBlog({
            category,
            description,
            bannerImage: bannerImagePath,
            cards,
            order: currentCount
        });

        res.status(201).json({ success: true, data: blog, message: "Blog created successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, description, cardTitles, cardDescriptions } = req.body;
        let updateData = { category, description };

        if (req.files && req.files.bannerImage && req.files.bannerImage.length > 0) {
            const oldBlog = await BlogsService.getBlogById(id);
            if (oldBlog && oldBlog.bannerImage) {
                const oldFilePath = path.join(__dirname, '..', 'uploads', path.basename(oldBlog.bannerImage));
                if (fs.existsSync(oldFilePath)) fs.unlinkSync(oldFilePath);
            }
            updateData.bannerImage = `/uploads/${req.files.bannerImage[0].filename}`;
        }

        if (req.files && req.files.cardImages && req.files.cardImages.length > 0) {
            let parsedCardTitles = [];
            let parsedCardDescriptions = [];
            if (cardTitles) {
                try { parsedCardTitles = JSON.parse(cardTitles); } catch (e) { parsedCardTitles = []; }
            }
            if (cardDescriptions) {
                try { parsedCardDescriptions = JSON.parse(cardDescriptions); } catch (e) { parsedCardDescriptions = []; }
            }

            const oldBlog = await BlogsService.getBlogById(id);
            if (oldBlog && oldBlog.cards) {
                oldBlog.cards.forEach(card => {
                    if (card.image) {
                        const oldCardPath = path.join(__dirname, '..', 'uploads', path.basename(card.image));
                        if (fs.existsSync(oldCardPath)) fs.unlinkSync(oldCardPath);
                    }
                });
            }

            updateData.cards = req.files.cardImages.map((file, index) => ({
                title: parsedCardTitles[index] || '',
                description: parsedCardDescriptions[index] || '',
                image: `/uploads/${file.filename}`
            }));
        }

        const updatedBlog = await BlogsService.updateBlog(id, updateData);
        if (!updatedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, data: updatedBlog, message: "Blog updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await BlogsService.deleteBlog(id);
        if (!deletedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
