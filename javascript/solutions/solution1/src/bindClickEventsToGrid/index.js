export default () => {
  const cellList = Array.from(document.querySelectorAll('td'));

  cellList.forEach(c => {
    c.addEventListener('click', (e) => {
      console.log(e.target);
    });
  });
};
