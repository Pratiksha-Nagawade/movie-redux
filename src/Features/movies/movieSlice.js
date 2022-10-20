import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../Common/apis/movieAPI";
import { APIKey } from "../../Common/apis/movieAPIKEY";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (search) => {
    const response = await movieAPI.get(
      `?apikey=${APIKey}&s=${search}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (serach) => {
    const response = await movieAPI.get(
      `?apikey=${APIKey}&s=${serach}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id) => {
    const response = await movieAPI.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  details: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelected: (state) => {
      state.details = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched movies succesfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("fetched series succesfully");
      return { ...state, series: payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("fetched Deatils succesfully");
      return { ...state, details: payload };
    },
  },
});

export const { removeSelected } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getAllDetails = (state) => state.movies.details;
export default movieSlice.reducer;
