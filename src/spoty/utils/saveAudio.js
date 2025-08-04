const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

function saveAudioFile(audioDataUri) {
    try {
        // Extract base64 data from data URI
        const base64Data = audioDataUri.split(',')[1];
        const audioBuffer = Buffer.from(base64Data, 'base64');

        // Generate unique filename
        const timestamp = Date.now();
        const filename = `audio_${timestamp}.wav`;

        // Save to temp_audio directory
        const audioPath = path.join(projectRoot, 'temp_audio', filename);
        fs.writeFileSync(audioPath, audioBuffer);

        console.log(`Audio saved: ${filename}`);

        // Return the public URL
        const publicUrl = `${process.env.PUBLIC_URL || 'http://localhost:8000'}/audio/${filename}`;
        return publicUrl;

    } catch (error) {
        console.error('Error saving audio file:', error);
        throw error;
    }
}

function cleanupOldAudioFiles(maxAgeMinutes) {
    maxAgeMinutes = maxAgeMinutes || 60;

    try {
        const audioDir = path.join(projectRoot, 'temp_audio');
        const files = fs.readdirSync(audioDir);
        const now = Date.now();

        files.forEach(function(file) {
            if (file.startsWith('audio_')) {
                const filePath = path.join(audioDir, file);
                const stats = fs.statSync(filePath);
                const ageMinutes = (now - stats.mtime.getTime()) / (1000 * 60);

                if (ageMinutes > maxAgeMinutes) {
                    fs.unlinkSync(filePath);
                    console.log(`Cleaned up old audio file: ${file}`);
                }
            }
        });
    } catch (error) {
        console.error('Error cleaning up audio files:', error);
    }
}

module.exports = {
    saveAudioFile,
    cleanupOldAudioFiles
};
