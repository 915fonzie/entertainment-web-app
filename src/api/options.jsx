const authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmFiNjIyNmY2MmY2MzAyODllNzhkY2NlODJjNjZiYiIsIm5iZiI6MTcyMjQ1OTMwMi4zNzcxMDYsInN1YiI6IjY2YWFhMWZmNzcxNDY5NjU4YTBhZjk4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5ZN91X65Oe9qci8vYMvCGz46300rYEcaIqRNsTVzrFI'

export const getOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authorization
    }
  };

export const postOptions = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: authorization
    }
};
export const postRatingOptions = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json;charset=utf-8',
      Authorization: authorization
    }
};
  
export const deleteOptions = {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: authorization
    }
  };
export const deleteRatingOptions = {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json;charset=utf-8',
      Authorization: authorization
    }
  };