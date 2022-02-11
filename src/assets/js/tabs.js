(function () {
  const tabs = document.querySelectorAll('.js-tabs');
  Array.from(tabs, (tab) => {
    const tabsLinks = tab.querySelectorAll('.js-tab-link');
    let currentActiveTab = tab.querySelector('.js-tab-link.is-active');

    const toggleTap = (toggledTapLink = currentActiveTab) => {
      currentActiveTab = toggledTapLink || currentActiveTab;
      toggledTapLink.classList.toggle('is-active');

      const toggledTapData = toggledTapLink.dataset.index;
      const toggledTapArea = tab.querySelector(
        `.js-tab-area[data-indexed=${toggledTapData}]`
      );
      toggledTapArea.classList.toggle('is-active');
    };

    if (!currentActiveTab) {
      toggleTap(tabsLinks[0]);
    }

    tabsLinks.forEach((tabsLinks) => {
      tabsLinks.addEventListener('click', function () {
        if (currentActiveTab === this) {
          return;
        }
        if (currentActiveTab) {
          toggleTap();
        }
        toggleTap(this);
      });
    });
  });
})();
