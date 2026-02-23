const newsletterService = require('../../services/newsletter/newsletter.service');
const path = require('path');
const fs = require('fs');

class NewsletterController {
    async createNewsletter(req, res) {
        try {
            const { title } = req.body;
            if (!req.file) {
                return res.status(400).json({ success: false, message: 'PDF file is required' });
            }

            const data = {
                title,
                pdf: `uploads/${req.file.filename}`
            };

            const newsletter = await newsletterService.createNewsletter(data);
            res.status(201).json({
                success: true,
                data: newsletter,
                message: 'Newsletter uploaded successfully'
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getAllNewsletters(req, res) {
        try {
            const newsletters = await newsletterService.getAllNewsletters();
            res.status(200).json({ success: true, data: newsletters });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async updateNewsletter(req, res) {
        try {
            const { id } = req.params;
            const { title } = req.body;

            const updateData = { title };

            if (req.file) {
                const oldNewsletter = await newsletterService.getNewsletterById(id);
                if (oldNewsletter && oldNewsletter.pdf) {
                    const oldFilePath = path.join(__dirname, '..', '..', 'uploads', path.basename(oldNewsletter.pdf));
                    if (fs.existsSync(oldFilePath)) {
                        fs.unlinkSync(oldFilePath);
                    }
                }
                updateData.pdf = `uploads/${req.file.filename}`;
            }

            const newsletter = await newsletterService.updateNewsletter(id, updateData);
            if (!newsletter) {
                return res.status(404).json({ success: false, message: 'Newsletter not found' });
            }

            res.status(200).json({ success: true, data: newsletter });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async deleteNewsletter(req, res) {
        try {
            const { id } = req.params;
            const newsletter = await newsletterService.getNewsletterById(id);

            if (!newsletter) {
                return res.status(404).json({ success: false, message: 'Newsletter not found' });
            }

            if (newsletter.pdf) {
                const filePath = path.join(__dirname, '..', '..', 'uploads', path.basename(newsletter.pdf));
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }

            await newsletterService.deleteNewsletter(id);
            res.status(200).json({ success: true, message: 'Newsletter deleted successfully' });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = new NewsletterController();
