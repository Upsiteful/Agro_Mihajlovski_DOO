const ALL_PRODUCTS = [
  {
    id: 101892, emoji: "🛒", name: "Kolica Compact 75 l Villager", cat: "ostalo",
    price: 6000,
    img: "Kolica Villager Compact 75 l.png",
    desc: "Kolica (tačke) zapremine 75L za rad u dvorištu i polju.",
    fullDesc: "Kompaktna kolica VILLAGER zapremine 75 litara, pogodna za prevoz zemlje, đubriva, alata i drugih materijala.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Zapremina 75 L", "Kompaktna konstrukcija", "Za dvorište i imanje"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 101893, emoji: "🛒", name: "Kolica Standard 85 l", cat: "ostalo",
    price: 5500,
    img: "Kolica Villager Standard 85 l.png",
    desc: "Standardna kolica (tačke) zapremine 85L.",
    fullDesc: "Standardna kolica zapremine 85 litara za prevoz materijala u dvorištu, voćnjaku i na njivi.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Zapremina 85 L", "Praktična upotreba", "Za razne poslove"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 102678, emoji: "💧", name: "Potapajuća pumpa za prljavu vodu VSP 10000", cat: "ostalo",
    price: 8000,
    img: "POTAPAJUCA PUMPA ZA PRLJAVU VODU VSP 10000.png",
    desc: "Potapajuća pumpa za ispumpavanje prljave vode.",
    fullDesc: "Potapajuća pumpa VSP 10000 za ispumpavanje prljave vode iz šahti, podruma, rezervoara i sličnih mesta.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Za prljavu vodu", "Potapajući rad", "Kućna i pomoćna upotreba"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 101507, emoji: "🌿", name: "Električna kosačica Villy 1400P", cat: "ostalo",
    price: 11250,
    img: "ELEKTRICNA KOSACICA VILLY 1400P.png",
    desc: "Električna kosačica za održavanje travnjaka.",
    fullDesc: "Električna kosačica VILLY 1400P za redovno košenje travnjaka oko kuće i vikendice.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Električni pogon", "Za travnjake", "Jednostavno rukovanje"],
    season: "Proleće / Leto / Jesen",
    relatedIds: []
  },
  {
    id: 101505, emoji: "🌿", name: "Električna kosačica Villy 1200 P", cat: "ostalo",
    price: 8600,
    img: "ELEKTRICNA KOSACICA VILLY 1200 P.png",
    desc: "Električna kosačica za manje i srednje travnjake.",
    fullDesc: "Električna kosačica VILLY 1200 P namenjena je održavanju travnjaka u dvorištu.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Električni pogon", "Lagana i praktična", "Lako održavanje"],
    season: "Proleće / Leto / Jesen",
    relatedIds: []
  },
  {
    id: 102277, emoji: "💦", name: "Motorna pumpa za vodu Villager WP 36P", cat: "ostalo",
    price: 30000,
    img: "MOTORNA PUMPA ZA VODU VILLAGER WP 36P.png",
    desc: "Motorna pumpa za prebacivanje vode i navodnjavanje.",
    fullDesc: "Motorna pumpa VILLAGER WP 36P pogodna za navodnjavanje, ispumpavanje i prebacivanje vode na imanju.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Motorni pogon", "Terenski rad", "Za navodnjavanje/ispumpavanje"],
    season: "Proleće / Leto",
    relatedIds: []
  },
  {
    id: 103205, emoji: "🛢️", name: "Ulje za dvotaktne motore 100ml Villager", cat: "ostalo",
    price: 110,
    img: "ULJE ZA DVOTAKTNE MOTORE 100ML VILLAGER.png",
    desc: "Ulje za 2T motore, pakovanje 100 ml.",
    fullDesc: "Ulje za dvotaktne motore VILLAGER (100 ml) za pripremu mešavine goriva kod 2T uređaja.",
    activeSubstance: "—", dosage: "Po preporuci proizvođača uređaja", waiting: "—", crops: [],
    features: ["Za 2T motore", "Pakovanje 100 ml", "Za mešavinu goriva"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 1001393, emoji: "🛢️", name: "010-6361 - Ulje za dvotaktne motore - zeleno, 100 ml", cat: "ostalo",
    price: 110,
    img: "010-6361 - ULJE ZA DVOTAKTNE MOTORE - ZELENO, 100ML.png",
    desc: "Zeleno ulje za 2T motore, pakovanje 100 ml.",
    fullDesc: "Zeleno ulje za dvotaktne motore (100 ml) za pripremu mešavine goriva kod 2T uređaja.",
    activeSubstance: "—", dosage: "Po preporuci proizvođača uređaja", waiting: "—", crops: [],
    features: ["Za 2T motore", "Zeleno (lakša kontrola mešavine)", "Pakovanje 100 ml"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 116472, emoji: "🧴", name: "Mast višenamenska Vill 120 g", cat: "ostalo",
    price: 390,
    img: "MAST VISENAMENSKA VILL 120 GR.png",
    desc: "Višenamenska mast za podmazivanje, 120 g.",
    fullDesc: "Višenamenska mast (120 g) za podmazivanje i zaštitu pokretnih delova alata i mašina.",
    activeSubstance: "—", dosage: "Po potrebi", waiting: "—", crops: [],
    features: ["Pakovanje 120 g", "Višenamenska upotreba", "Smanjuje trenje i habanje"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 116909, emoji: "⛽", name: "Motorna kosacica Atlas 5001 T", cat: "ostalo",
    price: 26000,
    img: "Motorna kosacica Atlas 5001 T.png",
    desc: "Motorna kosačica za travnjake i okućnice.",
    fullDesc: "Motorna kosačica Atlas 5001 T za košenje travnjaka na većim površinama (dvorišta, voćnjaci, zelene površine).",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Motorni pogon", "Za veće površine", "Robusna konstrukcija"],
    season: "Proleće / Leto / Jesen",
    relatedIds: []
  },
  {
    id: 116908, emoji: "⛽", name: "Motorna kosacica Atlas 5001 B", cat: "ostalo",
    price: 32500,
    img: "Motorna kosacica Atlas 5001 B.png",
    desc: "Motorna kosačica za održavanje travnjaka.",
    fullDesc: "Motorna kosačica Atlas 5001 B pogodna za redovno košenje travnjaka i zelenih površina.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Motorni pogon", "Efikasno košenje", "Za dvorišta i okućnice"],
    season: "Proleće / Leto / Jesen",
    relatedIds: []
  },
  {
    id: 118977, emoji: "🪚", name: "Ulje za lanac testerol 1l villager", cat: "ostalo",
    price: 320,
    img: "Ulje za lanac testerol 1l villager.png",
    desc: "Ulje za podmazivanje lanca testere, 1L.",
    fullDesc: "Ulje za lanac testere (Testerol) VILLAGER u pakovanju od 1 litra za podmazivanje lanca i vodilice.",
    activeSubstance: "—", dosage: "Po potrebi", waiting: "—", crops: [],
    features: ["Pakovanje 1 L", "Za lanac i vodilicu", "Smanjuje habanje"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 121024, emoji: "🪚", name: "Ulje za lanac testerol 3l villager", cat: "ostalo",
    price: 900,
    img: "ULJE ZA LANAC TESTEROL 3L.png",
    desc: "Ulje za lanac testere, 3L.",
    fullDesc: "Ulje za lanac testere (Testerol) u pakovanju od 3 litra za redovno podmazivanje lanca i vodilice.",
    activeSubstance: "—", dosage: "Po potrebi", waiting: "—", crops: [],
    features: ["Pakovanje 3 L", "Za lanac i vodilicu", "Za redovnu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 120994, emoji: "🪚", name: "Ulje za lanac 5l AGM", cat: "ostalo",
    price: 1450,
    img: "Ulje za lanac 5l AGM.png",
    desc: "Ulje za lanac testere, 5L (AGM).",
    fullDesc: "AGM ulje za lanac u pakovanju od 5 litara za podmazivanje lanca i vodilice motornih testera.",
    activeSubstance: "—", dosage: "Po potrebi", waiting: "—", crops: [],
    features: ["Pakovanje 5 L", "Za lanac i vodilicu", "Ekonomično pakovanje"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 120306, emoji: "🧪", name: "Prskalica Hortus 5 l", cat: "ostalo",
    price: 1450,
    img: "PRSKALICA HORTUS 5L.png",
    desc: "Ručna prskalica zapremine 5L.",
    fullDesc: "Ručna prskalica HORTUS 5L za tretmane u bašti, voćnjaku i oko kuće (zaštita bilja, prihrana i sl.).",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Zapremina 5 L", "Ručni rad", "Za baštu i voćnjak"],
    season: "Proleće / Leto",
    relatedIds: []
  },
  {
    id: 120307, emoji: "🧪", name: "Prskalica Hortus 8 l", cat: "ostalo",
    price: 1550,
    img: "PRSKALICA HORTUS 8L.png",
    desc: "Ručna prskalica zapremine 8L.",
    fullDesc: "Ručna prskalica HORTUS 8L pogodna za veće tretmane u bašti i voćnjaku.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Zapremina 8 L", "Ručni rad", "Za veće površine"],
    season: "Proleće / Leto",
    relatedIds: []
  },
  {
    id: 120305, emoji: "🧪", name: "Prskalica Hortus 10 l", cat: "ostalo",
    price: 1650,
    img: "PRSKALICA HORTUS 10L.png",
    desc: "Ručna prskalica zapremine 10L.",
    fullDesc: "Ručna prskalica HORTUS 10L za tretmane zaštite i prihrane na većim površinama.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Zapremina 10 L", "Ručni rad", "Praktična za duže tretmane"],
    season: "Proleće / Leto",
    relatedIds: []
  },
  {
    id: 121865, emoji: "🪚", name: "Ulje za lanac testerol 2l villager", cat: "ostalo",
    price: 650,
    img: "ULJE ZA LANAC TESTEROL 2L.png",
    desc: "Ulje za lanac testere, 2L.",
    fullDesc: "Ulje za lanac testere (Testerol) u pakovanju od 2 litra za podmazivanje lanca i vodilice.",
    activeSubstance: "—", dosage: "Po potrebi", waiting: "—", crops: [],
    features: ["Pakovanje 2 L", "Za lanac i vodilicu", "Za redovnu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },





  {
    id: 116274, emoji: "🌱", name: "Farma Plus J1 40/1", cat: "ostalo",
    price: 1750,
    img: "Farma Plus J1 40-1.png",
    desc: "Farma Plus J1, pakovanje 40/1.",
    fullDesc: "Farma Plus J1 u pakovanju 40/1.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 40/1", "Za poljoprivrednu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 114944, emoji: "🌱", name: "Farma Plus M 40/1", cat: "ostalo",
    price: 1950,
    img: "Farma Plus M 40-1.png",
    desc: "Farma Plus M, pakovanje 40/1.",
    fullDesc: "Farma Plus M u pakovanju 40/1.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 40/1", "Za poljoprivrednu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 117402, emoji: "🌱", name: "Farma Plus TOV I 40/1", cat: "ostalo",
    price: 2000,
    img: "Farma Plus TOV I 40-1.png",
    desc: "Farma Plus TOV I, pakovanje 40/1.",
    fullDesc: "Farma Plus TOV I u pakovanju 40/1.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 40/1", "Za poljoprivrednu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 118200, emoji: "🌱", name: "Farma Plus TOV II 40/1", cat: "ostalo",
    price: 1900,
    img: "Farma Plus TOV II 40-1.png",
    desc: "Farma Plus TOV II, pakovanje 40/1.",
    fullDesc: "Farma Plus TOV II u pakovanju 40/1.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 40/1", "Za poljoprivrednu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 117403, emoji: "🌱", name: "Farma Plus N Plavi 20/1", cat: "ostalo",
    price: 1150,
    img: "Farma Plus N Plavi 20-1.png",
    desc: "Farma Plus N Plavi, pakovanje 20/1.",
    fullDesc: "Farma Plus N Plavi u pakovanju 20/1.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 20/1", "Za poljoprivrednu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 118910, emoji: "🌱", name: "Farma Plus TOV I 20/1", cat: "ostalo",
    price: 1000,
    img: "Farma Plus TOV I 20-1.png",
    desc: "Farma Plus TOV I, pakovanje 20/1.",
    fullDesc: "Farma Plus TOV I u pakovanju 20/1.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 20/1", "Za poljoprivrednu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },

  {
    id: 109976, emoji: "🌿", name: "Talisman 1/1", cat: "zastita",
    price: 940,
    img: "Talisman 1-1.png",
    desc: "Talisman, pakovanje 1/1.",
    fullDesc: "Talisman u pakovanju 1/1.",
    activeSubstance: "—", dosage: "Po preporuci proizvođača", waiting: "—", crops: [],
    features: ["Pakovanje 1/1", "Sredstvo za zaštitu bilja"],
    season: "Proleće / Leto",
    relatedIds: []
  },
  {
    id: 121247, emoji: "🌿", name: "Pylon Plus 1L", cat: "zastita",
    price: 4850,
    img: "Pylon Plus 1L.png",
    desc: "Pylon Plus, pakovanje 1L.",
    fullDesc: "Pylon Plus u pakovanju od 1 litra.",
    activeSubstance: "—", dosage: "Po preporuci proizvođača", waiting: "—", crops: [],
    features: ["Pakovanje 1L", "Sredstvo za zaštitu bilja"],
    season: "Proleće / Leto",
    relatedIds: []
  },
  {
    id: 112399, emoji: "🌿", name: "Galbenon 1L", cat: "zastita",
    price: 1100,
    img: "Galbenon 1L.png",
    desc: "Galbenon, pakovanje 1L.",
    fullDesc: "Galbenon u pakovanju od 1 litra.",
    activeSubstance: "—", dosage: "Po preporuci proizvođača", waiting: "—", crops: [],
    features: ["Pakovanje 1L", "Sredstvo za zaštitu bilja"],
    season: "Proleće / Leto",
    relatedIds: []
  },

  {
    id: 111147, emoji: "🌱", name: "Topsan 25/1", cat: "ostalo",
    price: 5800,
    img: "Topsan 25-1.png",
    desc: "Topsan, pakovanje 25/1.",
    fullDesc: "Topsan u pakovanju 25/1.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 25/1", "Za poljoprivrednu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 111120, emoji: "🌱", name: "ProtAmino Premium 10/1", cat: "ostalo",
    price: 1160,
    img: "ProtAmino Premium 10-1.png",
    desc: "ProtAmino Premium, pakovanje 10/1.",
    fullDesc: "ProtAmino Premium u pakovanju 10/1.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 10/1", "Za poljoprivrednu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 111119, emoji: "🌱", name: "ProtAmino Premium 25/1", cat: "ostalo",
    price: 2800,
    img: "ProtAmino Premium 25-1.png",
    desc: "ProtAmino Premium, pakovanje 25/1.",
    fullDesc: "ProtAmino Premium u pakovanju 25/1.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 25/1", "Za poljoprivrednu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 111116, emoji: "🌱", name: "ProtAmino Piggi 10/1", cat: "ostalo",
    price: 1400,
    img: "ProtAmino Piggi 10-1.png",
    desc: "ProtAmino Piggi, pakovanje 10/1.",
    fullDesc: "ProtAmino Piggi u pakovanju 10/1.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 10/1", "Za poljoprivrednu upotrebu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },

    {
    id: 112437, emoji: "🌿", name: "Ektanon 100ml", cat: "zastita",
    price: 860,
    img: "Ektanon 100ml.png",
    desc: "Ektanon, pakovanje 100 ml.",
    fullDesc: "Ektanon u pakovanju od 100 ml.",
    activeSubstance: "—", dosage: "Po preporuci proizvođača", waiting: "—", crops: [],
    features: ["Pakovanje 100 ml", "Sredstvo za zaštitu bilja"],
    season: "Proleće / Leto",
    relatedIds: []
  },

  {
    id: 111573, emoji: "🐔", name: "Veta Super Kosvit 1kg", cat: "ostalo",
    price: 200,
    img: "Veta Super Kosvit 1kg.png",
    desc: "Veta Super Kosvit, pakovanje 1 kg.",
    fullDesc: "Veta Super Kosvit u pakovanju od 1 kg.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 1 kg", "Za životinje"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 111570, emoji: "🐔", name: "Veta Eko Jaje 1kg", cat: "ostalo",
    price: 220,
    img: "Veta Eko Jaje 1kg.png",
    desc: "Veta Eko Jaje, pakovanje 1 kg.",
    fullDesc: "Veta Eko Jaje u pakovanju od 1 kg.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 1 kg", "Za živinu"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 111567, emoji: "🐔", name: "Veta Specijal Max-Mix 4kg", cat: "ostalo",
    price: 430,
    img: "Veta Specijal Max-Mix 4kg.png",
    desc: "Veta Specijal Max-Mix, pakovanje 4 kg.",
    fullDesc: "Veta Specijal Max-Mix u pakovanju od 4 kg.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 4 kg", "Za životinje"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 111574, emoji: "🐔", name: "Veta Super Kosvit 2kg", cat: "ostalo",
    price: 290,
    img: "Veta Super Kosvit 2kg.png",
    desc: "Veta Super Kosvit, pakovanje 2 kg.",
    fullDesc: "Veta Super Kosvit u pakovanju od 2 kg.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Pakovanje 2 kg", "Za životinje"],
    season: "Sva godišnja doba",
    relatedIds: []
  },

  {
    id: 101525, emoji: "🛠️", name: "Električni mešač za boju 1050W VEM-1050", cat: "ostalo",
    price: 9300,
    img: "Elektricni mesac za boju 1050W VEM-1050.png",
    desc: "Električni mešač za boju snage 1050W.",
    fullDesc: "Električni mešač za boju VEM-1050 snage 1050W.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Snaga 1050W", "Za mešanje boje i mase"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 102729, emoji: "🧪", name: "Prskalica Villager 0.5L", cat: "ostalo",
    price: 250,
    img: "Prskalica Villager 0.5L.png",
    desc: "Ručna prskalica zapremine 0.5L.",
    fullDesc: "Ručna prskalica Villager zapremine 0.5L.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Zapremina 0.5L", "Ručna upotreba"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 119178, emoji: "🧰", name: "Prostirka Bomber 1.05x100m crna 100gr", cat: "ostalo",
    price: 80,
    img: "Prostirka Bomber 1.05x100m crna 100gr.png",
    desc: "Crna prostirka Bomber, 1.05x100m, 100gr.",
    fullDesc: "Prostirka Bomber crna, dimenzija 1.05x100m, 100gr.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Dimenzije 1.05x100m", "Crna", "100gr"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 122735, emoji: "🧪", name: "Prskalica Hortus 16L", cat: "ostalo",
    price: 2600,
    img: "Prskalica Hortus 16L.png",
    desc: "Ručna prskalica zapremine 16L.",
    fullDesc: "Prskalica Hortus zapremine 16L za baštu, voćnjak i dvorište.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Zapremina 16L", "Za baštu i voćnjak"],
    season: "Proleće / Leto",
    relatedIds: []
  },





    {
    id: 101290, emoji: "🪚", name: "Rezna ploča za metal 115x1.2 mm", cat: "ostalo",
    price: 50,
    img: "Rezna ploca 115x1.2.png",
    desc: "Rezna ploča za metal 115x1.2 mm.",
    fullDesc: "Rezna ploča za sečenje metala dimenzije 115x1.2 mm.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["115x1.2 mm", "Za metal"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 101291, emoji: "🪚", name: "Rezna ploča za metal 125x1.0 mm", cat: "ostalo",
    price: 60,
    img: "Rezna ploca 125x1.0.png",
    desc: "Rezna ploča za metal 125x1.0 mm.",
    fullDesc: "Rezna ploča za sečenje metala dimenzije 125x1.0 mm.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["125x1.0 mm", "Za metal"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 101292, emoji: "🪚", name: "Rezna ploča za metal 125x1.2 mm", cat: "ostalo",
    price: 60,
    img: "Rezna ploca 125x1.2.png",
    desc: "Rezna ploča za metal 125x1.2 mm.",
    fullDesc: "Rezna ploča za sečenje metala dimenzije 125x1.2 mm.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["125x1.2 mm", "Za metal"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 101293, emoji: "🪚", name: "Rezna ploča za metal 150x1.2 mm", cat: "ostalo",
    price: 90,
    img: "Rezna ploca 150x1.2.png",
    desc: "Rezna ploča za metal 150x1.2 mm.",
    fullDesc: "Rezna ploča za sečenje metala dimenzije 150x1.2 mm.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["150x1.2 mm", "Za metal"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 101294, emoji: "🪚", name: "Rezna ploča za metal 150x1.6 mm", cat: "ostalo",
    price: 90,
    img: "Rezna ploca 150x1.6.png",
    desc: "Rezna ploča za metal 150x1.6 mm.",
    fullDesc: "Rezna ploča za sečenje metala dimenzije 150x1.6 mm.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["150x1.6 mm", "Za metal"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 101295, emoji: "🪚", name: "Rezna ploča za metal 180x1.6 mm", cat: "ostalo",
    price: 110,
    img: "Rezna ploca 180x1.6.png",
    desc: "Rezna ploča za metal 180x1.6 mm.",
    fullDesc: "Rezna ploča za sečenje metala dimenzije 180x1.6 mm.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["180x1.6 mm", "Za metal"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 101296, emoji: "🪚", name: "Rezna ploča za metal 230x2.0 mm", cat: "ostalo",
    price: 170,
    img: "Rezna ploca 230x2.0.png",
    desc: "Rezna ploča za metal 230x2.0 mm.",
    fullDesc: "Rezna ploča za sečenje metala dimenzije 230x2.0 mm.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["230x2.0 mm", "Za metal"],
    season: "Sva godišnja doba",
    relatedIds: []
  },
  {
    id: 122736, emoji: "🔧", name: "Fuse set u koferu 3220 + baterija + punjač", cat: "ostalo",
    price: 9000,
    img: "Fuse set u koferu 3220.png",
    desc: "Set alata u koferu sa baterijom i punjačem.",
    fullDesc: "Fuse set u koferu 3220 sa baterijom i punjačem, komplet za rad.",
    activeSubstance: "—", dosage: "—", waiting: "—", crops: [],
    features: ["Kofer", "Baterija", "Punjač", "Komplet"],
    season: "Sva godišnja doba",
    relatedIds: []
  }
];
