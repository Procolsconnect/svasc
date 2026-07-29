const PageHeroService = require('../services/page-hero.service');
const path = require('path');
const fs = require('fs');

const getAllHeroes = async (req, res) => {
    try {
        const heroes = await PageHeroService.getAllHeroes();
        res.status(200).json({
            success: true,
            data: heroes
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getHeroByPage = async (req, res) => {
    try {
        const { pageKey } = req.params;
        const hero = await PageHeroService.getHeroByPage(pageKey);
        if (!hero) {
            return res.status(404).json({
                success: false,
                message: `Hero not found for page: ${pageKey}`
            });
        }
        res.status(200).json({
            success: true,
            data: hero
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateOrCreateHero = async (req, res) => {
    try {
        const { pageKey } = req.params;
        const { title, description } = req.body;
        const updateData = { title, description };

        if (req.file) {
            const oldHero = await PageHeroService.getHeroByPage(pageKey);
            if (oldHero && oldHero.image) {
                const oldFilePath = path.join(__dirname, '..', 'uploads', path.basename(oldHero.image));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.image = `/uploads/${req.file.filename}`;
        }

        const hero = await PageHeroService.updateOrCreateHero(pageKey, updateData);
        res.status(200).json({
            success: true,
            data: hero,
            message: "Page Hero updated successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllHeroes,
    getHeroByPage,
    updateOrCreateHero
};
