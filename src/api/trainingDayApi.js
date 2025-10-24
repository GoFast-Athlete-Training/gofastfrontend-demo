import axiosInstance from './axiosConfig';

/**
 * Training Day API - V2 Normalized endpoints
 */

/**
 * Get today's workout
 */
export const getTodayWorkout = async () => {
  const response = await axiosInstance.get('/api/training-day/today');
  return response.data;
};

/**
 * Get workout for specific date
 */
export const getWorkoutByDate = async (date) => {
  const response = await axiosInstance.get(`/api/training-day/date/${date}`);
  return response.data;
};

/**
 * Get all workouts for a week
 */
export const getWeekWorkouts = async (weekIndex) => {
  const response = await axiosInstance.get(`/api/training-day/week/${weekIndex}`);
  return response.data;
};

/**
 * Submit workout feedback
 */
export const submitWorkoutFeedback = async (trainingDayId, feedbackData) => {
  const response = await axiosInstance.post(
    `/api/training-day/${trainingDayId}/feedback`,
    feedbackData
  );
  return response.data;
};

/**
 * Get weekly summary
 */
export const getWeeklySummary = async (weekIndex) => {
  const response = await axiosInstance.get(`/api/training-day/week/${weekIndex}/summary`);
  return response.data;
};

/**
 * Get training progress
 */
export const getTrainingProgress = async () => {
  const response = await axiosInstance.get('/api/training-day/progress');
  return response.data;
};

/**
 * Trigger manual Garmin hydration
 */
export const hydrateGarminData = async (date) => {
  const response = await axiosInstance.post(`/api/training-day/hydrate/${date}`);
  return response.data;
};

