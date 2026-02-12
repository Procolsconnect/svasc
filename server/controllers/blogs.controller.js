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
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogsService.getBlogById(id);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        res.status(200).json({
            success: true,
            data: blog,
            message: "Blog fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createBlog = async (req, res) => {
    try {
        const { category, description, cardTitles } = req.body;

        // Validate banner image
        if (!req.files || !req.files.bannerImage || req.files.bannerImage.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Banner image is required'
            });
        }

        // Validate card images and titles
        if (!req.files.cardImages || req.files.cardImages.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'At least one card image is required'
            });
        }

        let parsedCardTitles = [];
        try {
            parsedCardTitles = JSON.parse(cardTitles);
        } catch (e) {
            return res.status(400).json({
                success: false,
                message: 'Card titles must be a valid JSON array'
            });
        }

        if (parsedCardTitles.length !== req.files.cardImages.length) {
            return res.status(400).json({
                success: false,
                message: 'Number of card titles must match number of card images'
            });
        }

        // Automatically assign order based on current count
        const currentCount = await BlogsService.getBlogCount();

        // Build cards array
        const cards = req.files.cardImages.map((file, index) => ({
            title: parsedCardTitles[index],
            image: `/uploads/${file.filename}`
        }));

        const bannerImagePath = `/uploads/${req.files.bannerImage[0].filename}`;

        const blog = await BlogsService.createBlog({
            category,
            description,
            bannerImage: bannerImagePath,
            cards,
            order: currentCount
        });

        res.status(201).json({
            success: true,
            data: blog,
            message: "Blog created successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, description, cardTitles } = req.body;
        let updateData = { category, description };

        // Handle banner image update
        if (req.files && req.files.bannerImage && req.files.bannerImage.length > 0) {
            const oldBlog = await BlogsService.getBlogById(id);
            if (oldBlog && oldBlog.bannerImage) {
                const oldFilePath = path.join(__dirname, '..', 'uploads', path.basename(oldBlog.bannerImage));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.bannerImage = `/uploads/${req.files.bannerImage[0].filename}`;
        }

        // Handle card images update
        if (req.files && req.files.cardImages && req.files.cardImages.length > 0) {
            let parsedCardTitles = [];
            try {
                parsedCardTitles = JSON.parse(cardTitles);
            } catch (e) {
                return res.status(400).json({
                    success: false,
                    message: 'Card titles must be a valid JSON array'
                });
            }

            if (parsedCardTitles.length !== req.files.cardImages.length) {
                return res.status(400).json({
                    success: false,
                    message: 'Number of card titles must match number of card images'
                });
            }

            // Delete old card images
            const oldBlog = await BlogsService.getBlogById(id);
            if (oldBlog && oldBlog.cards && oldBlog.cards.length > 0) {
                oldBlog.cards.forEach(card => {
                    if (card.image) {
                        const oldCardPath = path.join(__dirname, '..', 'uploads', path.basename(card.image));
                        if (fs.existsSync(oldCardPath)) {
                            fs.unlinkSync(oldCardPath);
                        }
                    }
                });
            }

            // Build new cards array
            updateData.cards = req.files.cardImages.map((file, index) => ({
                title: parsedCardTitles[index],
                image: `/uploads/${file.filename}`
            }));
        }

        const updatedBlog = await BlogsService.updateBlog(id, updateData);
        if (!updatedBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedBlog,
            message: "Blog updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await BlogsService.deleteBlog(id);
        if (!deletedBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        res.status(200).json({
            success: true,
            message: 'Blog deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};
