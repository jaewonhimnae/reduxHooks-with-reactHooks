import {
    INCREMENT_NUMBER,
} from '../_types';

export function incrementNumber(number) {
    return {
        type: INCREMENT_NUMBER,
        payload: number
    }
}
