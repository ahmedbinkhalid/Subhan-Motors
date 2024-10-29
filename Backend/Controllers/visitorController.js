const visitorModel = require('../Models/visitorModel');

const activeSessions = {}; // Store active sessions

// Log visitor and create session
exports.logVisitor = async (req, res, next) => {
    try {
        const ip = req.ip;

        // Check if the IP has an active session
        if (!activeSessions[ip]) {
            // If session is new, log the visitor
            activeSessions[ip] = {
                lastActivity: Date.now()
            };

            // Log the visitor to the database
            await visitorModel.logVisitors(req.app.locals.db, ip);
        } else {
            // Update the last activity time for existing sessions
            activeSessions[ip].lastActivity = Date.now();
        }

        next(); // Continue to the next middleware or route handler
    } catch (error) {
        console.error("Error logging visitor:", error);
        res.status(500).json({ error: "Error logging visitor" });
    }
};

// Cleanup inactive visitors
exports.cleanupInactiveVisitors = () => {
    const now = Date.now();
    const timeoutDuration = 50000; // 1 minute timeout

    for (const ip in activeSessions) {
        if (now - activeSessions[ip].lastActivity > timeoutDuration) {
            delete activeSessions[ip]; // Remove inactive users
        }
    }
};

exports.getDailyVisitors = async (req, res) => {
    try {
       const db = req.app.locals.db;
       const dailyVisitors = await visitorModel.getVisitorCountInLast24Hours(db);
       res.json({ dailyVisitors });
    } catch (error) {
       console.error("Error fetching daily visitors:", error);
       res.status(500).json({ error: "Error fetching daily visitors" });
    }
 };
 
 exports.getLiveVisitors = async (req, res) => {
    try {
        const db = req.app.locals.db;
        const liveVisitors = await visitorModel.getLiveVisitorCount(db);

        // // Check if liveVisitors is a valid number
        // if (typeof liveVisitors !== 'number') {
        //     console.error("Invalid response type for live visitors:", liveVisitors);
        //     return res.status(500).json({ error: "Invalid data format received" });
        // }

        res.json({ liveVisitors });
    } catch (error) {
        console.error("Error fetching live visitors:", error);
        res.status(500).json({ error: "Error fetching live visitors" });
    }
};

// This one is double comented
// exports.getLiveVisitors = async (req, res) => {
//     try {
//         const db = req.app.locals.db; // Access the database from app.locals
//         const liveVisitors = await visitorModel.getLiveVisitorCount(db); // Fetch live visitor count
//         return liveVisitors;// Send live visitor count as JSON
//     } catch (error) {
//         console.error("Error fetching live visitors:", error);
//         res.status(500).json({ error: "Error fetching live visitors" });
//     }
// };
// New function to fetch live visitors without req/res
// exports.getLiveVisitors = async (req, db) => {
//     try {
//         const db = req.app.locals.db;
//         return await visitorModel.getLiveVisitorCount(db);
//     } catch (error) {
//         console.error("Error fetching live visitor count:", error);
//         throw error; // Rethrow the error to handle it in the calling code
//     }
// };
 
 exports.getWeeklyVisitors = async (req, res) => {
    try {
       const db = req.app.locals.db;
       const weeklyVisitors = await visitorModel.getVisitorCountInLastWeek(db);
       res.json({ weeklyVisitors });
    } catch (error) {
       console.error("Error fetching weekly visitors:", error);
       res.status(500).json({ error: "Error fetching weekly visitors" });
    }
 };
 
 exports.getMonthlyVisitors = async (req, res) => {
    try {
       const db = req.app.locals.db;
       const monthlyVisitors = await visitorModel.getVisitorCountInLastMonth(db);
       res.json({ monthlyVisitors });
    } catch (error) {
       console.error("Error fetching monthly visitors:", error);
       res.status(500).json({ error: "Error fetching monthly visitors" });
    }
 };