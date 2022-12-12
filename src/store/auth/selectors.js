import { REDUCERS } from "constants/reducers";

const selectAuth = (state) => state[REDUCERS.AUTH];

export const selectUserToken = (state) => selectAuth(state).token;
