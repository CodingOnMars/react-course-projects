const paginate = (followers) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(followers.length / itemsPerPage); // returns 11,11 without Math.ceil, that's why we had to use it

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    // console.log(start);

    // Start with 0, end with 9
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers; // returns an array of array
};

export default paginate;
