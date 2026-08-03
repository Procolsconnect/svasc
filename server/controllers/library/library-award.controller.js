const libraryAwardService = require('../../services/library/library-award.service');

exports.getAllAwards = async (req, res) => {
    try {
        const awards = await libraryAwardService.getAllAwards();
        res.status(200).json({ success: true, data: awards });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.createAward = async (req, res) => {
    try {
        const { category, name, designation, department } = req.body;
        
        const data = { 
            category, 
            name, 
            designation, 
            department,
            image: req.file ? `uploads/${req.file.filename}` : ''
        };
        
        const award = await libraryAwardService.createAward(data);
        res.status(201).json({ success: true, data: award, message: 'Award created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.updateAward = async (req, res) => {
    try {
        const { category, name, designation, department } = req.body;
        const updateData = { category, name, designation, department };

        if (req.file) {
            updateData.image = `uploads/${req.file.filename}`;
        }

        Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

        const award = await libraryAwardService.updateAward(req.params.id, updateData);
        if (!award) return res.status(404).json({ success: false, message: 'Award not found' });
        res.status(200).json({ success: true, data: award, message: 'Award updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteAward = async (req, res) => {
    try {
        const award = await libraryAwardService.deleteAward(req.params.id);
        if (!award) return res.status(404).json({ success: false, message: 'Award not found' });
        res.status(200).json({ success: true, message: 'Award deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
