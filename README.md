# React Native GitHub Repository Viewer

A simple React Native application to fetch and view public repositories for a GitHub user. Users can mark/select repositories and apply filters.

## Features

- User Input: Enter a GitHub username.
- GitHub API Integration: Fetch public repositories using the GitHub API.
- Repository List: Display repositories with basic info.
- Marking Repositories: Option to mark/select repositories.

## Bonus Features

- Filtering: Filter repositories by language or star count.
- Pagination: Handle large repository lists.

## Technical Details

- Uses axios library for API calls.
    - used interceptors in case we need to configure reuest or reponse config 
- react-native-size-matters used to have same experience on diffrent devices
- react-native-svg to have a better exp for used icons 


## Conclusion

The React Native GitHub Repository Viewer fetches and displays public repositories. It supports marking/selecting repositories, filtering, and pagination. The code follows best practices for quality.
