const EventsGridService = require('../../services/events/grid.service');
const path = require('path');
const fs = require('fs');

const getAllEventsGrid = async (req, res) => {
    try {
        const events = await EventsGridService.getAllEventsGrid();
        res.status(200).json({
            success: true,
            data: events,
            message: "Events grid fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getEventGridById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await EventsGridService.getEventGridById(id);
        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found"
            });
        }
        res.status(200).json({
            success: true,
            data: event,
            message: "Event fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createEventGrid = async (req, res) => {
    try {
        const { title, date, description, spanTwoCols } = req.body;

        // Validate image upload
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Event image is required'
            });
        }

        // Automatically assign order based on current count
        const currentCount = await EventsGridService.getEventGridCount();

        const imagePath = `/uploads/${req.file.filename}`;

        const event = await EventsGridService.createEventGrid({
            title,
            date,
            description,
            image: imagePath,
            spanTwoCols: spanTwoCols === 'true' || spanTwoCols === true,
            order: currentCount
        });

        res.status(201).json({
            success: true,
            data: event,
            message: "Event created successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateEventGrid = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, date, description, spanTwoCols } = req.body;
        let updateData = { title, date, description };

        if (spanTwoCols !== undefined) {
            updateData.spanTwoCols = spanTwoCols === 'true' || spanTwoCols === true;
        }

        // Handle image update
        if (req.file) {
            const oldEvent = await EventsGridService.getEventGridById(id);
            if (oldEvent && oldEvent.image) {
                // Updated path to step back two levels to reach uploads
                const oldFilePath = path.join(__dirname, '../..', 'uploads', path.basename(oldEvent.image));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.image = `/uploads/${req.file.filename}`;
        }

        const updatedEvent = await EventsGridService.updateEventGrid(id, updateData);
        if (!updatedEvent) {
            return res.status(404).json({
                success: false,
                message: "Event not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedEvent,
            message: "Event updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteEventGrid = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = await EventsGridService.deleteEventGrid(id);
        if (!deletedEvent) {
            return res.status(404).json({
                success: false,
                message: "Event not found"
            });
        }
        res.status(200).json({
            success: true,
            message: 'Event deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllEventsGrid,
    getEventGridById,
    createEventGrid,
    updateEventGrid,
    deleteEventGrid
};
