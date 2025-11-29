# Vetpoultrytz// Data ya mifugo na kuku
const mifugoData = [
  { aina: "kuku", maelezo: "Newcastle, Gumboro, Coccidiosis", kinga: "Vaccination kila wiki 1, 3, 6", matibabu: "Antibiotics + vitamins" },
  { aina: "mbuzi", maelezo: "Peste des Petits Ruminants (PPR)", kinga: "Chanjo ya PPR kila mwaka", matibabu: "Antiserum + supportive care" },
  { aina: "ng'ombe", maelezo: "East Coast Fever (ECF)", kinga: "Acaricide kila wiki 2, chanjo ya ECF", matibabu: "Babs (Parvaquone)" },
  { aina: "kuku wa kienyeji", maelezo: "Fowl pox, worms", kinga: "Vaccinate + ubora wa chakula", matibabu: "Ivermectin, antiseptics" }
];

// Search kwa aina (kuku, mbuzi, ng'ombe...)
function tafutaMifugo() {
  const ingizo = document.getElementById('tafutaMifugo')?.value.toLowerCase().trim();
  const matokeo = document.getElementById('matokeoMifugo');
  if (!matokeo) return;

  if (!ingizo) {
    matokeo.innerHTML = '<p style="color:#666">Andika aina ya mifugo (k.m. "kuku", "mbuzi")...</p>';
    return;
  }

  const zinazolingana = mifugoData.filter(item => item.aina.includes(ingizo));
  
  if (zinazolingana.length === 0) {
    matokeo.innerHTML = `<p style="color:#d32f2f">❌ Hukuwa na maelezo ya "${ingizo}". Jaribu: kuku, mbuzi, ng'ombe.</p>`;
    return;
  }

  matokeo.innerHTML = zinazolingana.map(item => `
    <div class="card">
      <h3>🐔 ${item.aina.charAt(0).toUpperCase() + item.aina.slice(1)}</h3>
      <p><strong>Ugonjwa:</strong> ${item.maelezo}</p>
      <p><strong>Kinga:</strong> ${item.kinga}</p>
      <p><strong>Matibabu:</strong> ${item.matibabu}</p>
      <button onclick="pakuaMaelekezo('${item.aina}')">📥 Pakua Maelekezo</button>
    </div>
  `).join('');
}

// Pakua maelekezo (PDF halisi unaweza kubadilisha link)
function pakuaMaelekezo(aina) {
  const links = {
    kuku: "https://example.com/kuku-guide.pdf",
    mbuzi: "https://example.com/mbuzi-guide.pdf",
    ngombe: "https://example.com/ngombe-guide.pdf",
    "kuku wa kienyeji": "https://example.com/kuku-kienyeji.pdf"
  };
  const url = links[aina] || links.kuku;
  alert(`📥 Pakua maelekezo ya ${aina} — utapokea faili PDF.`);  
  window.open(url, '_blank');
}

// Agiza mzigo wa mifugo (dawa, chakula, chanjo)
function agizaMzigoMifugo() {
  const aina = document.getElementById('ainaMifugo')?.value.trim();
  const mzigo = document.getElementById('ainaMzigo')?.value.trim();
  
  if (!aina || !mzigo) return alert("Jaza aina ya mifugo na mzigo unaohitaji.");
  
  const ujumbe = `Shikamoo Danson, nataka mzigo wa ${mzigo} kwa ${aina}. Tafadhali niwasilie.`;
  window.open(`https://wa.me/255776011896?text=${encodeURIComponent(ujumbe)}`, '_blank');
}
