import { ERROR, FETCHED, FETCHING, IDLE } from './index'

export type FetchStatus =
  | typeof FETCHING
  | typeof IDLE
  | typeof FETCHED
  | typeof ERROR
