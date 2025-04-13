class Item {
    constructor(title, date, category, time = '') {
      this.id = Date.now();
      this.title = title;
      this.date = date;
      this.category = category;
      this.time = time;
    }
  }
  
  // ambil data dari localStorage
  const items = JSON.parse(localStorage.getItem('dashboardItems')) || [];
  
  // menyimpan data ke localStorage
  const saveItems = () => localStorage.setItem('dashboardItems', JSON.stringify(items));
  
  const renderItems = () => {
    const container = document.getElementById('items-container');
    container.innerHTML = '';
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <strong>${item.title}</strong><br/>
        <span class="category">${item.category}</span><br/>
        <small>📅 ${item.date}${item.category === 'Jadwal' && item.time ? ` ⏰ ${item.time}` : ''}</small><br/>
        <button class="edit" data-id="${item.id}">Edit</button>
        <button class="delete" data-id="${item.id}">Hapus</button>
      `;
      container.appendChild(div);
    });
  };
  
  const addItem = e => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const category = document.getElementById('category').value;
  
    const newItem = new Item(title, date, category, time);
    items.push(newItem);
    saveItems();
    renderItems();
    e.target.reset();
    document.getElementById('time').value = '';
  };
  
  const handleAction = e => {
    const id = Number(e.target.dataset.id);
    const index = items.findIndex(item => item.id === id);
  
    if (e.target.classList.contains('delete')) {
      if (index > -1) {
        items.splice(index, 1);
        saveItems();
        renderItems();
      }
    }
  
    if (e.target.classList.contains('edit')) {
      const item = items[index];
      const newTitle = prompt('Edit Judul:', item.title);
      const newDate = prompt('Edit Tanggal (YYYY-MM-DD):', item.date);
      const newTime = item.category === 'Jadwal' ? prompt('Edit Waktu (HH:MM):', item.time) : '';
  
      if (newTitle && newDate) {
        item.title = newTitle;
        item.date = newDate;
        item.time = item.category === 'Jadwal' ? newTime : '';
        saveItems();
        renderItems();
      }
    }
  };
  
  const fetchGreeting = async () => {
    return new Promise(resolve => {
      setTimeout(() => resolve("🌟 Selamat datang di Dashboard kamu!"), 400);
    });
  };
 
  document.getElementById('item-form').addEventListener('submit', addItem);
  document.getElementById('items-container').addEventListener('click', handleAction);
  

  renderItems();
  