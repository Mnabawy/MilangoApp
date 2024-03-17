import axios from 'axios';

// Create an axios instance
const instance = axios.create({
  baseURL: 'https://api.github.com/',
});

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    // Do something before the request is sent
    // For example, add your auth token here
    // config.headers.Authorization = `Bearer YOUR_AUTH_TOKEN`;
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  },
);

// Function to get GitHub repos for a specific user
const getGithubRepos = async (
  username: string,
  page: number = 1,
): Promise<any[]> => {
  try {
    const response = await instance.get(`users/${username}/repos`, {
      params: {
        page,
        per_page: 20, 
      },
    });
    // return only name, description, language keys to avoid unnecessary data
    const data = response?.data?.map(
      (repo: {id: any; name: any; description: any; language: any}) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
      }),
    );

    return data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      if (error.response.status === 404) {
        return `User ${username} not found`;
      } else if (
        error.response.status === 403 ||
        error.response.status === 429
      ) {
        // Handle rate limit exceeded errors
        const resetTime = new Date(
          error.response.headers['x-ratelimit-reset'] * 1000,
        );
        return `API rate limit exceeded. Try again after ${resetTime}`;
      } else {
        return `Error fetching GitHub repos for user ${username}: ${error.response.data.message}`;
      }
    } else if (error.request) {
      // The request was made but no response was received
      return `No response received while fetching GitHub repos for user ${username}`;
    } else {
      // Something happened in setting up the request that triggered an error
      return `Error fetching GitHub repos for user ${username}: ${error.message}`;
    }
  }
};

export {getGithubRepos};
