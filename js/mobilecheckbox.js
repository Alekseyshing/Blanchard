document.addEventListener("DOMContentLoaded", function () {
  const MOBILE_WIDTH = 580;
  let acc;
  const accWrap = document.querySelector(".editions__accordion-wrap");
  const checkboxes = accWrap.querySelector(".editions__categories");
  const accHeader = accWrap.querySelector(".editions__categories-header");

  function sortElems(elems) {
    elems.sort(function (a, b) {
      const valueA = parseInt(a.parentNode.dataset.position);
      const valueB = parseInt(b.parentNode.dataset.position);

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
  }

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function onAccordionClick(evt, ui) {
    const checkedBoxes = Array.from(accWrap.querySelectorAll(".editions__checkbox"));
    sortElems(checkedBoxes);

    if (!ui.newHeader[0]) {
      checkedBoxes.forEach(function (el) {
        if (el.checked) {
          accWrap.append(el.parentNode);
        }
      });
    } else {
      checkedBoxes.forEach(function (el) {
        checkboxes.append(el.parentNode);
      });
    }
  }

  function checkWindowWidth() {
    const currentWidth = getWindowWidth();
    const checkedBoxes = Array.from(accWrap.querySelectorAll(".editions__checkbox"));

    if (currentWidth > MOBILE_WIDTH && acc) {
      acc.accordion("destroy");
      acc = false;
      checkedBoxes.forEach(function (el) {
        checkboxes.append(el.parentNode);
      });
    } else if ((currentWidth <= MOBILE_WIDTH) & !acc) {
      acc = $(".editions-accordion").accordion({
        header: '.editions__categories-header',
        collapsible: true,
        active: false,
        icons: false,
        heightStyle: "content",
        activate: function (evt, ui) {
          console.log(ui);
          onAccordionClick(evt, ui);
        }
      });

      checkedBoxes.forEach(function (el) {
        if (el.checked) {
          accWrap.append(el.parentNode);
        }
      });
    }
  }

  checkWindowWidth();
  window.addEventListener("resize", function () {
    checkWindowWidth();
  });
});
