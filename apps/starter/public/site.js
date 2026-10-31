// Client-side interactions for githubzhinan.homes
// Loaded without violating CSP
document.addEventListener('DOMContentLoaded', () => {
  // 1. Promo Code Clipboard Copy
  const copyButtons = document.querySelectorAll('[data-copy-code], #copy-code-btn, #copy-brand-code');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const explicitCode = btn.getAttribute('data-copy-code');
      const targetId = btn.getAttribute('data-copy-target');
      let codeToCopy = explicitCode;
      if (!codeToCopy && targetId) {
        const el = document.getElementById(targetId);
        if (el) codeToCopy = el.textContent?.trim();
      }
      if (!codeToCopy) {
        const fallbackEl = document.querySelector('#promo-code-box, #brand-promo-code');
        if (fallbackEl) codeToCopy = fallbackEl.textContent?.trim();
      }
      if (!codeToCopy) codeToCopy = 'AMM';

      try {
        await navigator.clipboard.writeText(codeToCopy);
        const originalText = btn.textContent;
        btn.textContent = '已复制!';
        setTimeout(() => {
          btn.textContent = originalText;
        }, 2000);
      } catch (err) {
        prompt('请手动复制优惠码:', codeToCopy);
      }
    });
  });

  // 2. Brand Directory Search & Category Filter
  const searchInput = document.getElementById('brand-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.brand-item');
  const noResults = document.getElementById('no-results');

  if (filterBtns.length > 0 && items.length > 0) {
    let currentFilter = 'all';
    let searchQuery = '';

    function updateList() {
      let visibleCount = 0;
      items.forEach((item) => {
        const el = item;
        const name = el.dataset.name || '';
        const protocols = el.dataset.protocols || '';
        const line = el.dataset.line || '';
        const isTop10 = el.dataset.top10 === 'true';
        const isDedicated = el.dataset.dedicated === 'true';
        const isBudget = el.dataset.budget === 'true';
        const isHistorical = el.dataset.historical === 'true';

        let categoryMatch = false;
        if (currentFilter === 'all') categoryMatch = true;
        else if (currentFilter === 'top10') categoryMatch = isTop10;
        else if (currentFilter === 'dedicated') categoryMatch = isDedicated;
        else if (currentFilter === 'budget') categoryMatch = isBudget;
        else if (currentFilter === 'historical') categoryMatch = isHistorical;

        const queryMatch =
          !searchQuery ||
          name.includes(searchQuery) ||
          protocols.includes(searchQuery) ||
          line.includes(searchQuery);

        if (categoryMatch && queryMatch) {
          el.style.display = '';
          visibleCount++;
        } else {
          el.style.display = 'none';
        }
      });

      if (noResults) {
        if (visibleCount === 0) {
          noResults.classList.remove('hidden');
        } else {
          noResults.classList.add('hidden');
        }
      }
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => {
          b.classList.remove(
            'border-emerald-500',
            'bg-emerald-500/10',
            'text-emerald-600',
            'dark:text-emerald-400',
            'font-semibold'
          );
          b.classList.add('border-border', 'bg-surface', 'text-text-secondary');
        });
        btn.classList.add(
          'border-emerald-500',
          'bg-emerald-500/10',
          'text-emerald-600',
          'dark:text-emerald-400',
          'font-semibold'
        );
        btn.classList.remove('border-border', 'bg-surface', 'text-text-secondary');

        currentFilter = btn.dataset.filter || 'all';
        updateList();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        updateList();
      });
    }
  }
});
