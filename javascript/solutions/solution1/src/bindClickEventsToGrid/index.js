import getSameColoredSquaredTouching from '../getSameColoredSquaresTouching';

export default () => {
  const cellList = Array.from(document.querySelectorAll('td'));

  cellList.forEach(el => {
    el.addEventListener('click', (e) => {
      const target = e.target;
      const rowPos = parseInt(target.getAttribute('data-rowPos'));
      const colPos = parseInt(target.getAttribute('data-colPos'));
      const color = target.getAttribute('data-color');
      const list = getSameColoredSquaredTouching({rowPos, colPos, color });

      console.log(list)

    });
  });
};
