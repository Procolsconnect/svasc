const libraryActivityService = require('../../services/library/library-activity.service');

exports.getAllActivities = async (req, res) => {
    try {
        const activities = await libraryActivityService.getAllActivities();
        res.status(200).json({ success: true, data: activities });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.createActivity = async (req, res) => {
    try {
        const { title, date, desc } = req.body;
        
        let image1 = '';
        let image2 = '';
        
        if (req.files && req.files.image1) {
            image1 = `uploads/${req.files.image1[0].filename}`;
        }
        if (req.files && req.files.image2) {
            image2 = `uploads/${req.files.image2[0].filename}`;
        }

        const data = { title, date, desc, image1, image2 };
        const activity = await libraryActivityService.createActivity(data);
        res.status(201).json({ success: true, data: activity, message: 'Activity created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.updateActivity = async (req, res) => {
    try {
        const { title, date, desc } = req.body;
        const updateData = { title, date, desc };

        if (req.files && req.files.image1) {
            updateData.image1 = `uploads/${req.files.image1[0].filename}`;
        }
        if (req.files && req.files.image2) {
            updateData.image2 = `uploads/${req.files.image2[0].filename}`;
        }

        Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

        const activity = await libraryActivityService.updateActivity(req.params.id, updateData);
        if (!activity) return res.status(404).json({ success: false, message: 'Activity not found' });
        res.status(200).json({ success: true, data: activity, message: 'Activity updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteActivity = async (req, res) => {
    try {
        const activity = await libraryActivityService.deleteActivity(req.params.id);
        if (!activity) return res.status(404).json({ success: false, message: 'Activity not found' });
        res.status(200).json({ success: true, message: 'Activity deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
