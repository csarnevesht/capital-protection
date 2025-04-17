import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Schedule Meeting
export const scheduleMeeting = async (meetingData: any) => {
  try {
    const response = await api.post('/schedule', meetingData);
    return response.data;
  } catch (error) {
    console.error('Error scheduling meeting:', error);
    throw error;
  }
};

// Get Events
export const getEvents = async () => {
  try {
    const response = await api.get('/events');
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Download Guide
export const getGuideDownloadLink = async (guideId: string) => {
  try {
    const response = await api.get(`/guides/${guideId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting guide download link:', error);
    throw error;
  }
};

// Health Check
export const checkServerHealth = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    console.error('Error checking server health:', error);
    throw error;
  }
};

export default api;
