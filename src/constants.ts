// CSS
export const CONTENT_WIDTH = '600px';
export const HEADER_HEIGHT = '80px';

export const ICON_STYLE = {
  color: '#2D3748', // gray 700
  marginRight: '5px',
};

// URL
export const DEV_SERVER_URL = process.env.NEXT_PUBLIC_DEV_SERVER_URL;

// API
export const LOGIN_API_URL = `${DEV_SERVER_URL}/api/login`;

// TOAST
export const TOAST_DURATION = 3000;

export const TOAST_STATUS_SUCCESS = 'success';
export const TOAST_STATUS_ERROR = 'error';
export const TOAST_STATUS_INFO = 'info';
export const TOAST_STATUS_WARNING = 'warning';

// ACTION TYPE
export const LOGIN_ACTION = 'auth/login';
export const LOGOUT_ACTION = 'auth/logout';

// PAGE ROUTE
export const DICTIONARY_PAGE_URL = '/dictionary';
export const LOGIN_PAGE_URL = '/signin';
export const SIGNUP_PAGE_URL = '/signup';
export const ROADMAP_PAGE_URL = '/roadmap';
export const LECTURE_PAGE_URL = '/lecture';
export const LANDING_PAGE_URL = '/';
export const PROFILE_PAGE_URL = '/profile';

// STORAGE
export const LOGIN_STORAGE_KEY = 'loginData';
