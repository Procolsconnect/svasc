const HomeHeroSlideService = require('../services/home-hero-slide.service');
const path = require('path');
const fs = require('fs');

const getAllSlides = async (req, res) => {
    try {
        const slides = await HomeHeroSlideService.getAllSlides();
        res.status(200).json({
            success: true,
            data: slides
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createSlide = async (req, res) => {
    try {
        const { type, title, description, link, linkLabel, alignLeft, order } = req.body;
        
        const src = req.file ? `/uploads/${req.file.filename}` : null;
        const slide = await HomeHeroSlideService.createSlide({
            type,
            src,
            title,
            description,
            link,
            linkLabel,
            alignLeft: alignLeft === 'true',
            order: order ? parseInt(order) : 0
        });

        res.status(201).json({
            success: true,
            data: slide,
            message: "Home Hero Slide created successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateSlide = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, title, description, link, linkLabel, alignLeft, order } = req.body;
        const updateData = {};
        if (type) updateData.type = type;
        if (title) updateData.title = title;
        if (description !== undefined) updateData.description = description;
        if (link !== undefined) updateData.link = link;
        if (linkLabel !== undefined) updateData.linkLabel = linkLabel;
        if (alignLeft !== undefined) updateData.alignLeft = alignLeft === 'true';
        if (order !== undefined) updateData.order = parseInt(order);

        if (req.file) {
            const oldSlide = await HomeHeroSlideService.getSlideById(id);
            if (oldSlide && oldSlide.src) {
                const oldFilePath = path.join(__dirname, '..', 'uploads', path.basename(oldSlide.src));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.src = `/uploads/${req.file.filename}`;
        }

        const updatedSlide = await HomeHeroSlideService.updateSlide(id, updateData);
        if (!updatedSlide) {
            return res.status(404).json({ success: false, message: "Slide not found" });
        }

        res.status(200).json({
            success: true,
            data: updatedSlide,
            message: "Home Hero Slide updated successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteSlide = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSlide = await HomeHeroSlideService.deleteSlide(id);
        if (!deletedSlide) {
            return res.status(404).json({ success: false, message: "Slide not found" });
        }
        res.status(200).json({
            success: true,
            message: "Home Hero Slide deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllSlides,
    createSlide,
    updateSlide,
    deleteSlide
};
