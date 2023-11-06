const isQuotaExceeded = (e: unknown) => {
  let quotaExceeded = false;
  if (e instanceof DOMException) {
    if (e.code) {
      switch (e.code) {
        case 22:
          quotaExceeded = true;
          break;
        case 1014:
          // Firefox
          if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            quotaExceeded = true;
          }
          break;
      }
    }
  }
  return quotaExceeded;
};

export const setToLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    if (isQuotaExceeded(e)) {
      // Storage full, maybe notify user or do some clean-up
      console.error('Storage is not available');
    }
  }
};

export const setUserToLocalStorage = (user) => {
  setToLocalStorage('user', user);
};
export const getUserFromLocalStorage = (): string | null => {
  const user = localStorage.getItem('user');

  if (user) {
    try {
      return user;
    } catch (error) {
      return null;
    }
  }

  return null;
};
