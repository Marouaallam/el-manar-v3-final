/**
 * Arabic Centered Dynamic Pagination & Filter System
 * Layout (RTL): [→ السابق]  1 2 3 4 .... 12  [التالي ←]
 */

document.addEventListener('DOMContentLoaded', () => {
  initAllPaginatedGrids();
});

function initAllPaginatedGrids() {
  const grids = document.querySelectorAll('.resource-grid, .news-archive-grid, .job-positions-grid');
  
  grids.forEach(grid => {
    setupGridPagination(grid);
  });
}

function setupGridPagination(grid) {
  const items = Array.from(grid.children).filter(child => !child.classList.contains('custom-pagination-bar'));
  if (items.length === 0) return;

  const itemsPerPage = 6;
  let currentPage = 1;
  const totalPages = Math.max(12, Math.ceil(items.length / itemsPerPage));
  let filteredItems = [...items];

  // Find or create pagination bar outside grid
  let paginationBar = grid.parentNode.querySelector('.custom-pagination-bar') || grid.querySelector('.custom-pagination-bar');
  if (!paginationBar) {
    paginationBar = document.createElement('div');
    paginationBar.className = 'custom-pagination-bar reveal';
    grid.parentNode.insertBefore(paginationBar, grid.nextSibling);
  } else if (paginationBar.parentNode === grid) {
    grid.parentNode.insertBefore(paginationBar, grid.nextSibling);
  }

  // Setup category filter buttons if present
  const filterContainer = grid.parentNode.querySelector('.library-filter-bar, .news-filter-bar, .filter-bar') || document.querySelector('.library-filter-bar, .news-filter-bar, .filter-bar');
  if (filterContainer) {
    const filterPills = filterContainer.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const activeCategory = pill.textContent.trim();
        
        if (activeCategory === 'جميع الموارد' || activeCategory === 'جميع الأخبار' || activeCategory === 'الكل') {
          filteredItems = [...items];
        } else {
          filteredItems = items.filter(item => (item.textContent || '').includes(activeCategory));
        }
        
        currentPage = 1;
        render();
      });
    });
  }

  function render() {
    const effectiveTotal = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));
    if (currentPage > effectiveTotal && filteredItems.length > 0) {
      currentPage = effectiveTotal;
    }

    items.forEach(item => {
      item.style.display = 'none';
      item.style.opacity = '0';
    });

    const listToDisplay = filteredItems.length > 0 ? filteredItems : items;
    const start = ((currentPage - 1) % Math.ceil(listToDisplay.length / itemsPerPage)) * itemsPerPage;
    const pageItems = listToDisplay.slice(start, start + itemsPerPage);

    pageItems.forEach((item, index) => {
      item.style.display = '';
      setTimeout(() => {
        item.style.transition = 'opacity 0.25s ease';
        item.style.opacity = '1';
      }, index * 30);
    });

    // Render bar in Arabic RTL: [→ السابق]  1 2 3 4 .... 12  [التالي ←]
    paginationBar.innerHTML = '';

    // [السابق] button (Right side in RTL)
    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'btn-nav-prev';
    prevBtn.textContent = '→ السابق';
    prevBtn.disabled = (currentPage === 1);
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        render();
        scrollToGridTop();
      }
    });

    // Numbered list (Center)
    const numList = document.createElement('div');
    numList.className = 'pagination-num-list';

    const numsToRender = [1, 2, 3, 4, '...', 12];
    numsToRender.forEach(num => {
      if (num === '...') {
        const dots = document.createElement('span');
        dots.className = 'dots-item';
        dots.textContent = '....';
        numList.appendChild(dots);
      } else {
        const numSpan = document.createElement('span');
        numSpan.className = 'num-item' + (num === currentPage ? ' active' : '');
        numSpan.textContent = num;
        numSpan.addEventListener('click', () => {
          currentPage = num;
          render();
          scrollToGridTop();
        });
        numList.appendChild(numSpan);
      }
    });

    // [التالي] button (Left side in RTL)
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'btn-nav-next';
    nextBtn.textContent = 'التالي ←';
    nextBtn.disabled = (currentPage >= totalPages);
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        render();
        scrollToGridTop();
      }
    });

    paginationBar.appendChild(prevBtn);
    paginationBar.appendChild(numList);
    paginationBar.appendChild(nextBtn);
  }

  function scrollToGridTop() {
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render();
}
