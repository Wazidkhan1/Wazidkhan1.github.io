'use strict';

const filterGroup = document.querySelector('.filters');
const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project-card');
const projectCount = document.querySelector('.project-count');

if (filterGroup && projectCount && projects.length) {
  filterGroup.hidden = false;
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      let visibleCount = 0;
      projects.forEach((project) => {
        project.hidden = category !== 'all' && project.dataset.category !== category;
        if (!project.hidden) visibleCount += 1;
      });
      filterButtons.forEach((filter) => {
        const selected = filter === button;
        filter.classList.toggle('active', selected);
        filter.setAttribute('aria-pressed', String(selected));
      });
      projectCount.textContent = `Showing ${visibleCount} project${visibleCount === 1 ? '' : 's'}`;
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
