export const getTodo = async () => {
  await fetch('https://6532d346d80bd20280f615b7.mockapi.io/todo')
    .then(res => res.json())
    .then(res => console.log(res));
};
