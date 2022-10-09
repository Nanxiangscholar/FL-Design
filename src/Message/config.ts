// config.ts
export interface MessageApi {
    info: (text: string) => void;
    success: (text: string) => void;
    warning: (text: string) => void;
    error: (text: string) => void;
}
  
export interface List {
    text: string;
    key: string;
    type: 'info' | 'success' | 'error' | 'warning';
}
  
