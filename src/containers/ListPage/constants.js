/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LIST_TAG = 'react__demo--cnode/Home/LIST_TAG';
export const BEFORE_FETCH = 'react__demo--cnode/Home/BEFORE_FETCH';
export const FETCH_SUCCESS = 'react__demo--cnode/Home/FETCH_SUCCESS';
export const INVALIDATE_TOPICS = 'react__demo--cnode/Home/INVALIDATE_TOPICS';

