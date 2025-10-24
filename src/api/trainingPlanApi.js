import axiosInstance from './axiosConfig';

/**
 * Training Plan API - V2 Normalized endpoints
 */

/**
 * Generate training plan for a race
 */
export const generateTrainingPlan = async (raceId, userAge = 30) => {
  const response = await axiosInstance.post(`/api/training-plan/generate/${raceId}`, {
    userAge
  });
  return response.data;
};

/**
 * Activate training plan
 */
export const activateTrainingPlan = async (planId) => {
  const response = await axiosInstance.put(`/api/training-plan/${planId}/activate`);
  return response.data;
};

/**
 * Get training plan for a race
 */
export const getTrainingPlanForRace = async (raceId) => {
  const response = await axiosInstance.get(`/api/training-plan/race/${raceId}`);
  return response.data;
};

/**
 * Get active training plan
 */
export const getActiveTrainingPlan = async () => {
  const response = await axiosInstance.get('/api/training-plan/active');
  return response.data;
};

