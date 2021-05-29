let insert = (value) => ({
  into: (array) => ({
    after: (afterValue) => {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      console.log("array:", array);
    },
  }),
});

insert(2).into([1, 3]).after(1);
