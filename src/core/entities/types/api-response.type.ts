import { HttpError } from 'http-errors';

export type ApiResponse<T> = T | HttpError;
