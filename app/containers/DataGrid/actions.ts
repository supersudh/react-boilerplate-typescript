/*
 *
 * DataGrid actions
 *
 */

import { action } from 'typesafe-actions';
import { } from './types';

import ActionTypes from './constants';

export const defaultAction = () => action(ActionTypes.DEFAULT_ACTION);
export const onUpdateCounter = () => action(ActionTypes.ON_UPDATE_COUNTER);
export const updateCounter = (newCounter: number) => action(ActionTypes.UPDATE_COUNTER, newCounter);
