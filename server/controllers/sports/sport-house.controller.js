const SportHouseService = require('../../services/sports/sport-house.service');
const path = require('path');
const fs = require('fs');

const getAllHouses = async (req, res) => {
    try {
        const houses = await SportHouseService.getAllHouses();
        res.status(200).json({
            success: true,
            data: houses
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createHouse = async (req, res) => {
    try {
        const { name, subtitle, description, offset, custom, order } = req.body;
        
        const image = req.file ? `/uploads/${req.file.filename}` : null;
        const house = await SportHouseService.createHouse({
            name,
            subtitle,
            image,
            description,
            offset: offset === 'true',
            custom: custom === 'true',
            order: order ? parseInt(order) : 0
        });

        res.status(201).json({
            success: true,
            data: house,
            message: "Sport House created successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateHouse = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, subtitle, description, offset, custom, order } = req.body;
        const updateData = {};
        if (name) updateData.name = name;
        if (subtitle) updateData.subtitle = subtitle;
        if (description !== undefined) updateData.description = description;
        if (offset !== undefined) updateData.offset = offset === 'true';
        if (custom !== undefined) updateData.custom = custom === 'true';
        if (order !== undefined) updateData.order = parseInt(order);

        if (req.file) {
            const oldHouse = await SportHouseService.getHouseById(id);
            if (oldHouse && oldHouse.image) {
                const oldFilePath = path.join(__dirname, '..', '..', 'uploads', path.basename(oldHouse.image));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.image = `/uploads/${req.file.filename}`;
        }

        const updatedHouse = await SportHouseService.updateHouse(id, updateData);
        if (!updatedHouse) {
            return res.status(404).json({ success: false, message: "Sport House not found" });
        }

        res.status(200).json({
            success: true,
            data: updatedHouse,
            message: "Sport House updated successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteHouse = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHouse = await SportHouseService.deleteHouse(id);
        if (!deletedHouse) {
            return res.status(404).json({ success: false, message: "Sport House not found" });
        }
        res.status(200).json({
            success: true,
            message: "Sport House deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllHouses,
    createHouse,
    updateHouse,
    deleteHouse
};
