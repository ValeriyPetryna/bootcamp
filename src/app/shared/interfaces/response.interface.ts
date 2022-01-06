export interface ServerResponse {
  message: string;
  code: number;
  error?: {
    message: string;
  };
}
