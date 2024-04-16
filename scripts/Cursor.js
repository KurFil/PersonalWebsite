document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.querySelector('.cursor');
  const resizableElements = document.querySelectorAll('.resizable');

  const editCursor = function (e) {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = (x - 15) + 'px';
      cursor.style.top = (y - 15) + 'px';
  };

  const resizeCursor = function () {
      cursor.style.transform = 'scale(1.5)';
  };

  const resetCursor = function () {
      cursor.style.transform = '';
  };

  resizableElements.forEach(function (element) {
      element.addEventListener('mouseover', resizeCursor);
      element.addEventListener('mouseout', resetCursor);
  });

  window.addEventListener('mousemove', editCursor);
});
