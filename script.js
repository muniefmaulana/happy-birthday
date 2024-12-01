document.addEventListener('DOMContentLoaded', () => {
    // Tombol dan Section
    const kenanganBtn = document.getElementById('kenanganBtn');
    const kutipanBtn = document.getElementById('kutipanBtn');
    const harapanBtn = document.getElementById('harapanBtn');
    const kenangan = document.getElementById('kenangan');
    const kutipan = document.getElementById('kutipan');
    const harapan = document.getElementById('harapan');
    const harapanForm = document.getElementById('harapanForm');
  
    // Event untuk tombol Kenangan
    kenanganBtn.addEventListener('click', () => toggleSection(kenangan));
    kutipanBtn.addEventListener('click', () => toggleSection(kutipan));
    harapanBtn.addEventListener('click', () => toggleSection(harapan));
  
    harapanForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = document.getElementById('message').value;
      if (message.trim()) {
        sendEmail(message);
        alert('Harapanmu telah dikirim! Terima kasih.');
        harapanForm.reset();
      } else {
        alert('Harap isi pesan sebelum mengirim.');
      }
    });
  
    function toggleSection(section) {
      [kenangan, kutipan, harapan].forEach((sec) => {
        if (sec !== section) sec.classList.add('hidden');
      });
      section.classList.toggle('hidden');
    }
  
    function sendEmail(message) {
      const email = "muniefindra691@gmail.com";
      const subject = "Harapan Ulang Tahun untuk Annidaa' Fatih Ernizar";
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Tombol Play
    const playBtn = document.getElementById('playBtn');
    
    // Audio
    const audio = new Audio('audio/happy_birthday.mp3');
    let isPlaying = false;
  
    // Event untuk tombol play/pause
    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        playBtn.textContent = '🎵 Putar Lagu';
      } else {
        audio.play();
        playBtn.textContent = '⏸️ Jeda Lagu';
      }
      isPlaying = !isPlaying;
    });
  
    // Reset tombol jika lagu berhenti
    audio.addEventListener('ended', () => {
      playBtn.textContent = '🎵 Putar Lagu';
      isPlaying = false;
    });
  });
  