# Movie-Search-App

This is a React application that provides a movie context using the React Context API. 
It includes a MovieProvider component that wraps the application and provides movie data to its children components.

The movie data is fetched from two different APIs: IMDBmovies and Rapid API. 
These APIs provide information about popular movies, including details such as title, thumbnail, rating, year, genre, director, and more.
To fetch data from the Rapid API, we imported and used the axios library.  
We updated the API endpoints in these functions to retrieve data from the Rapid API.

We implemented React Slick, a popular carousel/slider library, to create a dynamic and interactive slider component.

Additionally, we integrated an API fetch functionality to retrieve data for a single page from the API, 
allowing us to display the fetched data within the slider's slides. 
This implementation provides a visually appealing and user-friendly way to showcase and navigate through the fetched content.

This application also includes a search bar and filter functionality to enhance the user experience. 
These features allow users to search for specific movies and apply filters based on various criteria.
To implement the filter functionality, we added filter options such as title.
When user type their desired movie title, the movie data will be updated to display only the relevant movies.


![Screenshot 2023-07-13 at 9 25 00 PM](https://github.com/Jharanatmg/Movie-Search-App/assets/133729796/57319b96-681d-4dc0-abc7-c7145e08425e)
![Screenshot 2023-07-13 at 9 25 15 PM](https://github.com/Jharanatmg/Movie-Search-App/assets/133729796/4d5c5f6b-fc2a-477e-a3c8-c556c97020e1)
![Screenshot 2023-07-13 at 9 25 43 PM](https://github.com/Jharanatmg/Movie-Search-App/assets/133729796/16868d56-f29d-4424-aa7f-1677ad931518)
![Screenshot 2023-07-13 at 9 28 24 PM](https://github.com/Jharanatmg/Movie-Search-App/assets/133729796/0832c17e-4beb-4f28-9213-944bc450f21c)
