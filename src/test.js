function counter() {
  let state = {
    value: 0,
  };

  return {
    increment: () => {
      state.value += 1;
    },
    decrement: () => {
      state.value -= 1;
    },
    getState() {
      return state;
    },
  };
}

const { increment, decrement, getState } = counter();

increment();
increment();
increment();
decrement();

console.log(getState());
