interface HttpStatusCodes {
  [key: string]: number;
}

export const status = {
  // Success
  OK: 200, // OK
  CREATED: 201, // Created
  ACCEPTED: 202, // Accepted

  // Client errors
  BAD_REQUEST: 400, // Bad Request
  UNAUTHORIZED: 401, // Unauthorized
  FORBIDDEN: 403, // Forbidden
  NOT_FOUND: 404, // Not Found
  CONFLICT: 409, // Conflict

  // Server errors
  INTERNAL_ERROR: 500, // Internal Server Error
  BAD_GATEWAY: 502, // Bad Gateway
  SERVICE_UNAVAILABLE: 503, // Service Unavailable
};
