const CampusLifeService = require('../../services/campus-life/campus-life.service');
const path = require('path');
const fs = require('fs');

// Gallery Controllers
const getAllGallery = async (req, res) => {
    try {
        const items = await CampusLifeService.getAllGallery();
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createGallery = async (req, res) => {
    try {
        const { name, description, order } = req.body;
        // Optionally save the image path if file uploaded
        const image = req.file ? `/uploads/${req.file.filename}` : null;
        const item = await CampusLifeService.createGallery({
            name,
            description,
            image,
            order: order ? parseInt(order) : 0
        });
        res.status(201).json({ success: true, data: item, message: "Gallery item created successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateGallery = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, order } = req.body;
        const updateData = {};
        if (name) updateData.name = name;
        if (description) updateData.description = description;
        if (order !== undefined) updateData.order = parseInt(order);

        if (req.file) {
            const oldItem = await CampusLifeService.getGalleryById(id);
            if (oldItem && oldItem.image) {
                const oldFilePath = path.join(__dirname, '..', '..', 'uploads', path.basename(oldItem.image));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.image = `/uploads/${req.file.filename}`;
        }

        const updatedItem = await CampusLifeService.updateGallery(id, updateData);
        if (!updatedItem) {
            return res.status(404).json({ success: false, message: "Gallery item not found" });
        }
        res.status(200).json({ success: true, data: updatedItem, message: "Gallery item updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteGallery = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await CampusLifeService.deleteGallery(id);
        if (!deletedItem) {
            return res.status(404).json({ success: false, message: "Gallery item not found" });
        }
        res.status(200).json({ success: true, message: "Gallery item deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Scroll Items Controllers
const getAllScroll = async (req, res) => {
    try {
        const items = await CampusLifeService.getAllScroll();
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createScroll = async (req, res) => {
    try {
        const { title, description, link, order } = req.body;
        // Optionally save the image path if file uploaded
        const image = req.file ? `/uploads/${req.file.filename}` : null;
        const item = await CampusLifeService.createScroll({
            title,
            description,
            link,
            image,
            order: order ? parseInt(order) : 0
        });
        res.status(201).json({ success: true, data: item, message: "Scroll item created successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateScroll = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, link, order } = req.body;
        const updateData = {};
        if (title) updateData.title = title;
        if (description) updateData.description = description;
        if (link !== undefined) updateData.link = link;
        if (order !== undefined) updateData.order = parseInt(order);

        if (req.file) {
            const oldItem = await CampusLifeService.getScrollById(id);
            if (oldItem && oldItem.image) {
                const oldFilePath = path.join(__dirname, '..', '..', 'uploads', path.basename(oldItem.image));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.image = `/uploads/${req.file.filename}`;
        }

        const updatedItem = await CampusLifeService.updateScroll(id, updateData);
        if (!updatedItem) {
            return res.status(404).json({ success: false, message: "Scroll item not found" });
        }
        res.status(200).json({ success: true, data: updatedItem, message: "Scroll item updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteScroll = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await CampusLifeService.deleteScroll(id);
        if (!deletedItem) {
            return res.status(404).json({ success: false, message: "Scroll item not found" });
        }
        res.status(200).json({ success: true, message: "Scroll item deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllGallery,
    createGallery,
    updateGallery,
    deleteGallery,
    getAllScroll,
    createScroll,
    updateScroll,
    deleteScroll
};
