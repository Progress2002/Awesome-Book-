import list from './navArr.js';

const PAGE_NAVIGATION = () => {
  list.forEach((item, index) => {
    const link = document.getElementById(item.linkId);
    const page = document.getElementById(item.pageId);

    link.onclick = () => {
      if (index === 1) {
        link.style.color = 'rgb(241, 43, 43)';
        link.previousElementSibling.style.color = '#52545a';
        link.nextElementSibling.style.color = '#52545a';
        page.classList.remove('hidden');
        page.previousElementSibling.classList.add('hidden');
        page.nextElementSibling.classList.add('hidden');
      } else if (index === 0) {
        link.style.color = 'rgb(241, 43, 43)';
        link.nextElementSibling.style.color = '#52545a';
        link.nextElementSibling.nextElementSibling.style.color = '#52545a';
        page.classList.remove('hidden');
        page.nextElementSibling.classList.add('hidden');
        page.nextElementSibling.nextElementSibling.classList.add('hidden');
      } else {
        link.style.color = 'rgb(241, 43, 43)';
        link.previousElementSibling.style.color = '#52545a';
        link.previousElementSibling.previousElementSibling.style.color = '#52545a';
        page.classList.remove('hidden');
        page.previousElementSibling.classList.add('hidden');
        page.previousElementSibling.previousElementSibling.classList.add(
          'hidden',
        );
      }
    };

    const loadListPAge = true;
    if (loadListPAge) {
      const link = document.getElementById(list[0].linkId);
      const page = document.getElementById(list[0].pageId);
      link.style.color = 'rgb(241, 43, 43)';
      link.nextElementSibling.style.color = '#52545a';
      link.nextElementSibling.nextElementSibling.style.color = '#52545a';
      page.classList.remove('hidden');
      page.nextElementSibling.classList.add('hidden');
      page.nextElementSibling.nextElementSibling.classList.add('hidden');
    }
  });
};

export default PAGE_NAVIGATION;