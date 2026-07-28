# 🛡️ Guardpot Desktop Application

Guardpot masaüstü uygulaması; **Deception**, **Honeypot** ve **Ağ Güvenliği (VGN & Recorder)** ürünlerini tek bir merkezi panel üzerinden yönetmeyi ve izlemeyi sağlayan, Electron + React tabanlı kurumsal bir Windows masaüstü yazılımıdır.

---

## 🌟 Öne Çıkan Özellikler

- 🌑 **Siber Güvenlik Teması**: Dark theme, neon yeşil (`#00e5a3`) dış ışıma efektleri ve vektörel SVG simgeleri.
- 🖼️ **Orijinal Kırmızı Guardpot "G" Logosu**: Şirket kurumsal kimliğine uygun özel vektörel logo bileşeni.
- 🖼️ **Çerçevesiz Pencere (Frameless Window)**: Özel min/max/close butonlarına sahip entegre başlık çubuğu (`TitleBar`).
- 🚨 **Canlı Tehdit / SOC Paneli**: Son 24 saat engellenen saldırı sayısı, aktif Honeypot düğümleri ve Recorder akış durumu.
- ⚡ **Hızlı Aksiyon Barı**: Sistem Sağlık Taraması, Tüm Logları Dışa Aktarma ve Acil Bağlantı Kesme butonları.
- 🛡️ **Guardpot VGN Modülü**: Sanal Ağ Güvenliği, canlı trafik grafiği, tehdit tablosu ve Honeypot düğüm durumu.
- 🎥 **Guardpot Recorder Modülü**: Canlı kamera/oturum akış önizleme kartları, kayıt başlat/durdur kontrolleri ve depolama alanı göstergesi.
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

```
guardpot-desktop/
├── resources/              # Uygulama ikon ve görsel varlıkları
├── src/
│   ├── main/               # Electron Main Process (Pencere yönetimi, IPC)
│   ├── preload/            # Güvenli preload bridge (contextBridge)
│   └── renderer/           # React Kullanıcı Arayüzü
│       └── src/
│           ├── components/ # Tekrar kullanılabilir modüler bileşenler
│           │   ├── Header.jsx          # Üst Navigasyon Barı & Breadcrumb
│           │   ├── Sidebar.jsx         # Sol Menü & Bağlantı Rozeti
│           │   ├── ProductCard.jsx     # Dinamik Ürün Kartı Bileşeni
│           │   ├── GuardpotLogo.jsx    # Vektörel Red Guardpot G Logosu
│           │   └── TitleBar.jsx        # Pencere Kontrolleri
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
│           │   ├── RecorderView.jsx    # Guardpot Recorder Modül Ekranı
│           │   └── ProductPage.jsx     # Dinamik Ürün Yönlendirme Sayfası
│           ├── App.jsx
│           └── App.css
├── package.json
└── electron.vite.config.mjs
```

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edin:

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Geliştirme (Dev) Modunda Başlatın
```bash
npm run dev
```

### 3. Windows Installer (.exe) Paketini Derleyin
```bash
npm run build:win
```
*Derlenen `.exe` kurulum dosyası `dist/` klasörüne çıktı olarak verilecektir.*

---

## 🤝 Stajyer Görev Paylaşım Planı (%50 - %50)

Proje geliştirme sürecini 2 stajyer arasında eşit olarak yürütmek için hazırlanan modüler iş bölümü:

### 💙 Tamamlanan Altyapı & Modüller (%50)
- [x] Electron + Vite projesinin sıfırdan kurulumu ve konfigürasyonu.
- [x] Çerçevesiz pencere (Frameless window) ve `TitleBar` bileşeni.
- [x] Tasarım sistemi, koyu tema CSS değişkenleri ve vektörel `GuardpotLogo`.
- [x] `AppContext.jsx` ile merkezi state yönetimi ve URL kalıcılığı.
- [x] Guardpot VGN modülü arayüzü, canlı grafik ve tehdit log tablosu (`VgnView.jsx`).

### 💚 Arkadaşınıza Bırakılan Geliştirme Alanları (%50)
- [ ] **Guardpot Recorder Modülü (`RecorderView.jsx`)**: Canlı akış oynatıcı bileşeni ve kayıt kontrol mantığı.
- [ ] **Sistem Ayarları Modalı (`SettingsModal.jsx`)**: Üst bardaki çark ikonuna basıldığında açılan popup modalı.
- [ ] **Log Filtreleme ve Dışa Aktarma (`exportLogs.js`)**: Tehdit loglarını JSON/CSV dosyası olarak indirme fonksiyonu.
- [ ] **Canlı Bildirim Sistemi (`Toast.jsx`)**: Ekranın sağ altında gösterilen bildirim kutucukları.
- [ ] **Windows Çıktısı Derleme ve Test (`npm run build:win`)**.

---

## 📝 Lisans

Bu proje **Guardpot Siber Güvenlik Teknolojileri** bünyesinde geliştirilmiştir. Tüm hakları saklıdır.
