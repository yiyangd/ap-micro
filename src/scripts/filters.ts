const compareText = (value: string) => value.normalize('NFKC').toLowerCase().trim();
const compact = (value: string) => value.replace(/[^\p{L}\p{N}]/gu, '');
const questionCode = /\b(?:(\d{4})[-\s]*)?q\s*(\d+)((?:\s*\([a-z0-9]+\))*)(?![\p{L}\p{N}])/iu;

for (const scope of document.querySelectorAll<HTMLElement>('[data-filter-scope]')) {
  const form = scope.querySelector<HTMLFormElement>('[data-filter-form]')!;
  const status = scope.querySelector<HTMLElement>('[data-filter-status]')!;
  const count = scope.querySelector<HTMLElement>('[data-result-count]')!;
  const clear = scope.querySelector<HTMLButtonElement>('[data-clear]')!;
  const empty = scope.querySelector<HTMLElement>('[data-no-results]')!;
  const pages = scope.querySelector<HTMLElement>('[data-pagination]')!;
  const prev = scope.querySelector<HTMLButtonElement>('[data-previous]')!;
  const next = scope.querySelector<HTMLButtonElement>('[data-next]')!;
  const indicator = scope.querySelector<HTMLElement>('[data-page-indicator]')!;
  const results = [...scope.querySelectorAll<HTMLElement>('[data-filter-item]')].map(element => {
    const searchText = compareText(element.dataset.search ?? '');
    return { element, searchText, compactText: compact(searchText) };
  });
  const names = ['q', 'year', 'kind', 'form'] as const;
  const controls = names.map(name => form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement);
  const [query, year, kind, variant] = controls;
  const pageSize = Number(scope.dataset.pageSize);
  let page = 1;

  function syncFromLocation() {
    const params = new URLSearchParams(location.search);
    controls.forEach(control => {
      const value = params.get(control.name) ?? '';
      control.value = value;
      if (control instanceof HTMLSelectElement && control.selectedIndex === -1) control.value = '';
    });
    page = Math.max(1, Number.parseInt(params.get('page') ?? '', 10) || 1);
  }

  function syncToLocation() {
    const url = new URL(location.href);
    controls.forEach(({ name, value }) => {
      if (value.trim()) url.searchParams.set(name, value.trim());
      else url.searchParams.delete(name);
    });
    if (page > 1) url.searchParams.set('page', String(page));
    else url.searchParams.delete('page');
    history.replaceState(null, '', url);
  }

  function render(updateUrl = false) {
    const search = compareText(query.value);
    const code = scope.dataset.filterType === 'questions' ? questionCode.exec(search) : null;
    const keywords = (code ? search.replace(code[0], '') : search).split(/\s+/).filter(Boolean);
    const matches = results.filter(({ element, searchText, compactText }) => {
      const data = element.dataset;
      if (code) {
        const [, codeYear, number, part] = code;
        if (data.question !== String(Number(number)) || (codeYear && data.year !== codeYear)) return false;
        if (part && !data.part?.startsWith(part.replaceAll(/\s/g, ''))) return false;
      }
      const textMatches = keywords.every(keyword => {
        const plain = compact(keyword);
        return searchText.includes(keyword) || (plain.length >= 3 && compactText.includes(plain));
      });
      return textMatches
        && (!year.value || element.dataset.year === year.value)
        && (!kind.value || element.dataset.kind === kind.value)
        && (!variant.value || element.dataset.form === variant.value);
    });
    const maxPage = Math.max(1, Math.ceil(matches.length / pageSize));
    page = Math.min(page, maxPage);
    const start = (page - 1) * pageSize;
    const visible = new Set(matches.slice(start, start + pageSize));
    results.forEach(item => { item.element.hidden = !visible.has(item); });
    const total = matches.length.toLocaleString('en');
    count.textContent = matches.length > pageSize
      ? `${start + 1}–${Math.min(start + pageSize, matches.length)} of ${total} results · 共 ${total} 条`
      : `${total} results · 共 ${total} 条`;
    clear.hidden = controls.every(control => !control.value);
    empty.hidden = matches.length > 0;
    pages.hidden = maxPage < 2;
    prev.disabled = page === 1;
    next.disabled = page === maxPage;
    indicator.textContent = `Page ${page} of ${maxPage} · 第 ${page} 页`;
    if (updateUrl) syncToLocation();
  }

  function resetPage() {
    page = 1;
    render(true);
  }

  function turnPage(direction: number) {
    page += direction;
    render(true);
    status.scrollIntoView({ block: 'center' });
  }

  form.addEventListener('submit', event => { event.preventDefault(); resetPage(); });
  form.addEventListener('input', resetPage);
  clear.addEventListener('click', () => { form.reset(); resetPage(); query.focus(); });
  prev.addEventListener('click', () => turnPage(-1));
  next.addEventListener('click', () => turnPage(1));
  window.addEventListener('popstate', () => { syncFromLocation(); render(); });
  syncFromLocation();
  render();
  form.hidden = false;
  status.hidden = false;
}
