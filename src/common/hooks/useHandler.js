import { useCallback } from 'react';

export default (func, params = []) => useCallback(func, params);
