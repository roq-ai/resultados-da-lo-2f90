import axios from 'axios';
import queryString from 'query-string';
import { LotteryResultInterface, LotteryResultGetQueryInterface } from 'interfaces/lottery-result';
import { GetQueryInterface } from '../../interfaces';

export const getLotteryResults = async (query?: LotteryResultGetQueryInterface) => {
  const response = await axios.get(`/api/lottery-results${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createLotteryResult = async (lotteryResult: LotteryResultInterface) => {
  const response = await axios.post('/api/lottery-results', lotteryResult);
  return response.data;
};

export const updateLotteryResultById = async (id: string, lotteryResult: LotteryResultInterface) => {
  const response = await axios.put(`/api/lottery-results/${id}`, lotteryResult);
  return response.data;
};

export const getLotteryResultById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/lottery-results/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLotteryResultById = async (id: string) => {
  const response = await axios.delete(`/api/lottery-results/${id}`);
  return response.data;
};
