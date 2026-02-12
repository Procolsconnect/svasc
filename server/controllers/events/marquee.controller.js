const EventsMarqueeService = require('../../services/events/marquee.service');
const path = require('path');
const fs = require('fs');

const getAllEventsMarquee = async (req, res) => {
    try {
        const events = await EventsMarqueeService.getAllEventsMarquee();
        res.status(200).json({
            success: true,
            data: events,
            message: "Events marquee fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getEventMarqueeById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await EventsMarqueeService.getEventMarqueeById(id);
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

const createEventMarquee = async (req, res) => {
    try {
        const { title, day, month, description } = req.body;

        // Validate image upload
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Event image is required'
            });
        }

        // Automatically assign order based on current count
        const currentCount = await EventsMarqueeService.getEventMarqueeCount();

        const imagePath = `/uploads/${req.file.filename}`;

        const event = await EventsMarqueeService.createEventMarquee({
            title,
            day,
            month,
            description,
            image: imagePath,
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

const updateEventMarquee = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, day, month, description } = req.body;
        let updateData = { title, day, month, description };

        // Handle image update
        if (req.file) {
            const oldEvent = await EventsMarqueeService.getEventMarqueeById(id);
            if (oldEvent && oldEvent.image) {
                // Updated path to step back two levels to reach uploads
                const oldFilePath = path.join(__dirname, '../..', 'uploads', path.basename(oldEvent.image));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.image = `/uploads/${req.file.filename}`;
        }

        const updatedEvent = await EventsMarqueeService.updateEventMarquee(id, updateData);
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

const deleteEventMarquee = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = await EventsMarqueeService.deleteEventMarquee(id);
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
    getAllEventsMarquee,
    getEventMarqueeById,
    createEventMarquee,
    updateEventMarquee,
    deleteEventMarquee
};
