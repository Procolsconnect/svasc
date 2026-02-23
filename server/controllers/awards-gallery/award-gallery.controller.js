const awardGalleryService = require('../../services/awards-gallery/award-gallery.service');

class AwardGalleryController {
    async createAward(req, res) {
        try {
            const { alt, category } = req.body;
            if (!req.file) {
                return res.status(400).json({ success: false, message: 'Image is required' });
            }

            const data = {
                image: `uploads/${req.file.filename}`,
                alt,
                category
            };

            const award = await awardGalleryService.createAward(data);
            res.status(201).json({ success: true, data: award });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getAllAwards(req, res) {
        try {
            const awards = await awardGalleryService.getAllAwards();
            res.status(200).json({ success: true, data: awards });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async updateAward(req, res) {
        try {
            const { id } = req.params;
            const { alt, category } = req.body;

            const updateData = {
                alt,
                category
            };

            if (req.file) {
                updateData.image = `uploads/${req.file.filename}`;
            }

            // Remove undefined fields
            Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

            const award = await awardGalleryService.updateAward(id, updateData);
            if (!award) {
                return res.status(404).json({ success: false, message: 'Award not found' });
            }

            res.status(200).json({ success: true, data: award });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async deleteAward(req, res) {
        try {
            const { id } = req.params;
            const award = await awardGalleryService.deleteAward(id);
            if (!award) {
                return res.status(404).json({ success: false, message: 'Award not found' });
            }
            res.status(200).json({ success: true, message: 'Award deleted successfully' });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = new AwardGalleryController();
