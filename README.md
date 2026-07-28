# 🛡️ Guardpot Desktop Application

Guardpot masaüstü uygulaması; **Deception**, **Honeypot** ve **Ağ Güvenliği (VGN & Recorder)** ürünlerini tek bir merkezi panel üzerinden yönetmeyi ve izlemeyi sağlayan, Electron + React tabanlı kurumsal bir Windows masaüstü yazılımıdır.

---

## 🌟 Proje Özellikleri ve Mimari

- 🌑 **Siber Güvenlik Teması**: Dark theme, neon yeşil (`#00e5a3`) dış ışıma efektleri ve vektörel SVG simgeleri.
- 🖼️ **Orijinal Kırmızı Guardpot "G" Logosu**: Şirket kurumsal kimliğine uygun özel vektörel logo bileşeni.
- 🖼️ **Çerçevesiz Pencere (Frameless Window)**: Özel min/max/close butonlarına sahip entegre başlık çubuğu (`TitleBar`).
- 🚨 **Canlı Tehdit / SOC Paneli**: Son 24 saat engellenen saldırı sayısı, aktif Honeypot düğümleri ve Recorder akış durumu.
- ⚡ **Hızlı Aksiyon Barı**: Sistem Sağlık Taraması, Tüm Logları Dışa Aktarma ve Acil Bağlantı Kesme butonları.
- 🛡️ **Guardpot VGN Modülü**: Sanal Ağ Güvenliği, canlı trafik grafiği, tehdit tablosu ve Honeypot düğüm durumu.
- 🌐 **Kalıcı Sunucu Bağlantısı**: URL kalıcılığı (`localStorage`) ve tak-çalıştır otomatik açılış desteği.

---

## 🛠️ Teknoloji Yığını

| Katman | Teknoloji | Sürüm |
|:---|:---|:---|
| **Runtime** | Electron | ^43.2.0 |
| **Build System** | electron-vite | ^5.0.0 |
| **Frontend Framework** | React | ^18.3.1 |
| **Stil Katmanı** | CSS Variables + Glassmorphism | Custom |
| **Paketleme Tool'u** | electron-builder | ^26.15.3 |

---

## 📂 Proje Klasör Yapısı

```text
guardpot-desktop/
├── resources/              # Uygulama ikon ve görsel varlıkları
├── src/
│   ├── main/               # Electron Main Process (Pencere yönetimi, IPC)
│   ├── preload/            # Güvenli preload bridge (contextBridge)
│   └── renderer/           # React Kullanıcı Arayüzü
│       └── src/
│           ├── components/ # Modüler UI bileşenleri
│           │   ├── Header.jsx          # Üst Navigasyon Barı & Breadcrumb
│           │   ├── Sidebar.jsx         # Sol Menü & Bağlantı Rozeti
│           │   ├── ProductCard.jsx     # Dinamik Ürün Kartı Bileşeni
│           │   ├── GuardpotLogo.jsx    # Vektörel Red Guardpot G Logosu
│           │   ├── TitleBar.jsx        # Pencere Kontrolleri
│           │   └── SettingsModal.jsx   # Sistem Ayarları Penceresi (Geliştirilecek)
│           ├── context/
│           │   └── AppContext.jsx      # Merkezi Context API State Yönetimi
│           ├── services/
│           │   ├── apiClient.js        # Merkezi HTTP Client
│           │   ├── vgnService.js       # VGN Veri Servis İskeleti
│           │   ├── recorderService.js  # Recorder Veri Servis İskeleti
│           │   └── index.js            # Merkezi Servis Export
│           ├── pages/
│           │   ├── DashboardPage.jsx   # Ana Kontrol Paneli & SOC Merkez
│           │   ├── VgnView.jsx         # Guardpot VGN Modül Ekranı
│           │   ├── RecorderView.jsx    # Guardpot Recorder Modül Ekranı (Geliştirilecek)
│           │   └── ProductPage.jsx     # Dinamik Ürün Yönlendirme Sayfası
│           ├── App.jsx
│           └── App.css
├── package.json
└── electron.vite.config.mjs
```

---

## 🚀 Projeyi Klonlama, Kurulum ve Çalıştırma

Projeyi GitHub üzerinden kendi bilgisayarınıza indirip çalıştırmak için sırasıyla şu adımları uygulayın:

### 1. GitHub Reposunu Klonlayın (İndirin)
Terminali (PowerShell / Command Prompt / Git Bash) açın ve komutu çalıştırın:
```bash
git clone https://github.com/KULLANICI_ADINIZ/guardpot-desktop.git
```

### 2. Proje Klasörüne Girin
```bash
cd guardpot-desktop
```

### 3. Gerekli Bağımlılıkları (Packages) Yükleyin
```bash
npm install
```

### 4. Geliştirme (Dev) Modunda Masaüstü Uygulamasını Başlatın
```bash
npm run dev
```

---

## 🔄 Günlük Ekip Çalışma Kuralları (Git Pull & Push Rehberi)

> Ekip üzerinde çakışma (conflict) yaşamamak için gün başlarında ve gün sonlarında şu adımları uygulamayı unutmayınız:

### 🌅 Güne Başlarken (Koda Başlamadan Önce)
Çalışmaya başlamadan önce yapılan son güncellemeleri kendi bilgisayarınıza çekmek için terminalde çalıştırın:
```bash
git pull origin main
```

### 🌆 Gün Sonunda (Çalışmayı Bitirirken)
Gün sonunda yazdığınız tüm yeni kodları GitHub'a göndermek için terminalde sırasıyla çalıştırın:
```bash
git add .
git commit -m "feat: Gunluk yapilan gelistirmeler ve yeni kodlar"
git push origin main
```

---

## 🤝 Modüler Geliştirme Durumu (Roadmap)

### 💙 Tamamlanan Modüller
- [x] Electron + Vite projesinin sıfırdan kurulumu ve konfigürasyonu.
- [x] Çerçevesiz pencere (Frameless window) ve `TitleBar` pencere kontrolleri.
- [x] Siber güvenlik tasarım sistemi, dark theme CSS değişkenleri ve vektörel `GuardpotLogo`.
- [x] `AppContext.jsx` ile merkezi state yönetimi ve URL kalıcılığı.
- [x] **Guardpot VGN Modülü** (`VgnView.jsx`): Canlı trafik grafiği, tehdit tablosu ve Honeypot düğüm durumu.

### 💚 Geliştirilecek Modüller (Roadmap)
- [ ] **Guardpot Recorder Modülü** (`RecorderView.jsx`): Canlı kamera/oturum akış kartlarının, önizleme kutularının ve kayıt başlat/durdur butonlarının geliştirilmesi.
- [ ] **Sistem Ayarları Modalı** (`SettingsModal.jsx`): Üst bardaki ayarlar butonuna basıldığında açılan Sunucu URL değiştirme penceresinin kodlanması.
- [ ] **Log Dışa Aktarma Utili** (`exportLogs.js`): Tehdit loglarını JSON/CSV dosyası olarak indirme fonksiyonunun yazılması.
- [ ] **Canlı Bildirim Bileşeni** (`Toast.jsx`): Sağ alt bildirim toast kutucuklarının yapılması.

---

## 📝 Lisans

Bu proje **Guardpot Siber Güvenlik Teknolojileri** bünyesinde geliştirilmiştir. Tüm hakları saklıdır.
