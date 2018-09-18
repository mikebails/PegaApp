export function getError(error) {
  if (error.response && error.response.data && error.response.data.errors && error.response.data.errors[0].message) {
    return (error.response.data.errors[0].message);
  } else {
    return (error.message);
  }
}
