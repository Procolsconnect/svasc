const ValueSlideService = require('../../services/home/value-slide.service');
const path = require('path');
const fs = require('fs');

const getAllSlides = async (req, res) => {
    try {
        const slides = await ValueSlideService.getAllSlides();
        res.status(200).json({
            success: true,
            data: slides,
            message: "Value Slides fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createSlide = async (req, res) => {
    try {
        const { field1, field2, field3, field4, field5 } = req.body;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Background image file is required'
            });
        }

        if (!field1 || !field2 || !field3 || !field4 || !field5) {
            return res.status(400).json({
                success: false,
                message: 'All fields (field1-5) are required'
            });
        }

        const backgroundImage = `/uploads/${req.file.filename}`;

        const slide = await ValueSlideService.createSlide({
            backgroundImage,
            field1,
            field2,
            field3,
            field4,
            field5
        });

        res.status(201).json({
            success: true,
            data: slide,
            message: "Value Slide created successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateSlide = async (req, res) => {
    try {
        const { id } = req.params;
        const { field1, field2, field3, field4, field5, order } = req.body;

        const updateData = {};
        if (field1) updateData.field1 = field1;
        if (field2) updateData.field2 = field2;
        if (field3) updateData.field3 = field3;
        if (field4) updateData.field4 = field4;
        if (field5) updateData.field5 = field5;
        if (order !== undefined) updateData.order = order;

        if (req.file) {
            const oldSlide = await ValueSlideService.getSlideById(id);
            if (oldSlide && oldSlide.backgroundImage) {
                const oldFilePath = path.join(__dirname, '..', '..', 'uploads', path.basename(oldSlide.backgroundImage));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.backgroundImage = `/uploads/${req.file.filename}`;
        }

        const updatedSlide = await ValueSlideService.updateSlide(id, updateData);
        if (!updatedSlide) {
            return res.status(404).json({
                success: false,
                message: "Value Slide not found"
            });
        }
        res.status(200).json({
            success: true,
            data: updatedSlide,
            message: "Value Slide updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteSlide = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSlide = await ValueSlideService.deleteSlide(id);
        if (!deletedSlide) {
            return res.status(404).json({
                success: false,
                message: "Value Slide not found"
            });
        }
        res.status(200).json({
            success: true,
            message: 'Value Slide deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllSlides,
    createSlide,
    updateSlide,
    deleteSlide
};
