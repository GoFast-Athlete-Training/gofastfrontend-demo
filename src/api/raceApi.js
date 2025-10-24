import axiosInstance from './axiosConfig';

/**
 * Race API - V2 Normalized endpoints
 */

/**
 * Create a new race
 */
export const createRace = async (raceData) => {
  const response = await axiosInstance.post('/api/race/create', raceData);
  return response.data;
};

/**
 * Get user's active race
 */
export const getActiveRace = async () => {
  const response = await axiosInstance.get('/api/race/active');
  return response.data;
};

/**
 * Get race by ID
 */
export const getRaceById = async (raceId) => {
  const response = await axiosInstance.get(`/api/race/${raceId}`);
  return response.data;
};

/**
 * Update race prediction
 */
export const updateRacePrediction = async (raceId, adaptive5kTime) => {
  const response = await axiosInstance.put(`/api/race/${raceId}/prediction`, {
    adaptive5kTime
  });
  return response.data;
};

/**
 * Update race status
 */
export const updateRaceStatus = async (raceId, status) => {
  const response = await axiosInstance.put(`/api/race/${raceId}/status`, {
    status
  });
  return response.data;
};

/**
 * Submit race result
 */
export const submitRaceResult = async (raceId, resultData) => {
  const response = await axiosInstance.post(`/api/race/${raceId}/result`, resultData);
  return response.data;
};

/**
 * Get all races for user
 */
export const getUserRaces = async () => {
  const response = await axiosInstance.get('/api/race/user/all');
  return response.data;
};

