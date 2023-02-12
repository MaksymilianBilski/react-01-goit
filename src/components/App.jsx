import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Feedback from 'componentsFeedback/Feedback';
import Phonebook from './pages/Phoneboook';
import ImagesFinder from './pages/ImagesFinder';
import MoviesFinder from './pages/MoviesFinder';
import Searchbar from './ComponentsImagesFinder/Searchbar/Searchbar';
import MovieDetails from './ComponentsMovieFinder/MovieDetails/MovieDetails';
import Cast from './ComponentsMovieFinder/Cast/Cast';
import Reviews from './ComponentsMovieFinder/Reviews/Reviews';
import TrendingList from './ComponentsMovieFinder/Home/TrendingList';
import Navigation from './Navigation/Navigation';
import { TaskManager } from './pages/TaskManager';

export class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/react-01-goit" element={<Navigation />} />
          <Route path="/react-01-goit/phonebook" element={<Phonebook />} />
          <Route path="/react-01-goit/feedback" element={<Feedback />} />
          <Route path="/react-01-goit/images" element={<ImagesFinder />} />
          <Route path="/react-01-goit/tasksManager" element={<TaskManager />} />
          <Route path="/react-01-goit/movies" element={<MoviesFinder />}>
            <Route path="moviesList" element={<TrendingList />} />
            <Route path="searchbar" element={<Searchbar />} />
          </Route>
          <Route path="details/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    );
  }
}
