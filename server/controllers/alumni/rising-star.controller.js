const RisingStarService = require('../../services/alumni/rising-star.service');
const path = require('path');
const fs = require('fs');

const getAllStars = async (req, res) => {
    try {
        const stars = await RisingStarService.getAllStars();
        res.status(200).json({
            success: true,
            data: stars,
            message: "Rising Stars fetched successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createStar = async (req, res) => {
    try {
        const { name, degree } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: 'Video file is required' });
        }

        const videoPath = `/uploads/${req.file.filename}`;
        const star = await RisingStarService.createStar({ name, degree, video: videoPath });
        res.status(201).json({
            success: true,
            data: star,
            message: "Rising Star created successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateStar = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, degree } = req.body;
        let updateData = { name, degree };

        if (req.file) {
            const oldStar = await RisingStarService.getStarById(id);
            if (oldStar && oldStar.video) {
                const oldFilePath = path.join(__dirname, '..', 'uploads', path.basename(oldStar.video));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.video = `/uploads/${req.file.filename}`;
        }

        const updatedStar = await RisingStarService.updateStar(id, updateData);
        if (!updatedStar) {
            return res.status(404).json({ message: "Rising Star not found" });
        }
        res.status(200).json({
            success: true,
            data: updatedStar,
            message: "Rising Star updated successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteStar = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStar = await RisingStarService.deleteStar(id);
        if (!deletedStar) {
            return res.status(404).json({ message: "Rising Star not found" });
        }
        res.status(200).json({
            success: true,
            message: 'Rising Star deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllStars,
    createStar,
    updateStar,
    deleteStar
};
