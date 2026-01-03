export type Language = 'id' | 'en' | 'ja';

export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      company: 'Company',
      project: 'Project',
      service: 'Service',
      contact: 'Contact',
    },
    about: {
      subtitle: 'Who We Are',
      title: 'AWA CONSTRUCTION',
      badge: 'By SAGAWA GROUP',
      headline: 'Specialists in Construction/Renovation for Housing, Coffee Shops, and Shophouses',
      intro: 'We work with professional standards covering:',
      list: [
        'Transparent Budgeting (RAB)',
        'Daily Supervision',
        'Consultation Anytime',
        'High Quality Standards',
      ],
      closing:
        'We are committed to delivering the best results with full attention to detail and client satisfaction.',
    },
    services: {
      title: 'OUR SERVICES',
      subtitle:
        'We provide a spectrum of services to meet your construction needs, from initial planning to handover',
      items: {
        design: {
          title: 'Design & Planning',
          desc: 'Innovative and sustainable design solutions tailored to your vision and requirements.',
        },
        construction: {
          title: 'Construction',
          desc: 'High quality construction project management, ensuring projects are on time and on budget.',
        },
        maintenance: {
          title: 'Maintenance',
          desc: 'Comprehensive post-construction support and maintenance to ensure longevity.',
        },
      },
      cta: 'Our Service',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Recent Projects',
      floorArea: 'Floor Area',
      viewAll: 'View All Project',
      partner: {
        title: 'Partner With Us for Your Construction Needs',
        desc: 'Our teams is ready to deliver efficient, high-quality, and integrated construction solutions tailored to your business needs',
        cta: 'Contact Us',
      },
    },
    contact: {
      subtitle: 'Contact Us',
      title: 'Partner With Us for Your Construction Needs',
      description:
        'Our team is ready to deliver efficient, high-quality, and integrated construction solutions tailored to your business needs',
      cta: 'Consult Now',
    },
    footer: {
      companyDesc:
        'A Leading construction company providing design, build and maintenance service across Indonesia.',
      quickAccess: 'Quick Access',
      services: 'Services',
      officialAddress: 'Official Address',
      links: {
        about: 'About Us',
        projects: 'Projects',
        careers: 'Careers',
        contact: 'Contact Us',
      },
      location: 'Location',
      followUs: 'Follow Us',
    },
    chatbot: {
      greeting: {
        morning: "Good morning! I'm AWA Bot, ready to assist you. How can I help you today?",
        afternoon: "Good afternoon! I'm AWA Bot, ready to assist you. How can I help you today?",
        evening: "Good evening! I'm AWA Bot, ready to assist you. How can I help you today?",
      },
      initialMessage: "Hello, I'm AWA Assistant",
      responses: {
        greetingMorning: 'Hello! Good morning, welcome to AWA Construction. How can I assist you?',
        greetingAfternoon:
          'Hello! Good afternoon, welcome to AWA Construction. How can I assist you?',
        greetingEvening: 'Hello! Good evening, welcome to AWA Construction. How can I assist you?',
        servicePrompt: 'Here are the services available at AWA Construction:',
        defaultResponse:
          "Thank you for your question. Would you like to know about our services? Please type 'service' to see available service options.",
      },
      serviceOptions: {
        consultation: 'Consultation',
        construction: 'Construction Services',
      },
    },
    consultation: {
      title: 'Consultation',
      intro: {
        title: 'Need Help with Your Construction Project?',
        desc: 'Fill out the form below and our expert team will contact you within 24 hours.',
      },
      contactInfo: {
        title: 'Our Official Contact Information',
      },
      form: {
        title: 'Consultation Form',
        name: 'Name',
        email: 'Email',
        whatsapp: 'WhatsApp Number',
      },
      project: {
        title: 'Project Details',
        type: 'Project Type',
        location: 'Project Location',
        area: 'Project Area',
        length: 'Length',
        width: 'Width',
        unit: 'in m²',
        typePlaceholder: 'Example: Home Renovation',
      },
      preferences: {
        title: 'Preferences & Budget',
        budget: 'Budget',
        budgetPlaceholder: 'Example: 100 Million',
        timeline: 'Timeline',
        timelinePlaceholder: 'Example: Next Month',
      },
      submit: 'Consult Now',
    },
    error: {
      title: 'Something Went Wrong',
      description:
        "Sorry, our system encountered an unexpected issue. We're working on fixing it. Please try reloading the page.",
      retry: 'Try Again',
      back: 'Back to Home',
    },
    notFound: {
      title: 'Page Not Found',
      description:
        "Sorry, it looks like the page you are looking for is under construction or unavailable. Let's go back to the foundation.",
      backHome: 'Back to Home',
      goBack: 'Go Back',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      company: 'Perusahaan',
      project: 'Proyek',
      service: 'Layanan',
      contact: 'Kontak',
    },
    about: {
      subtitle: 'Who We Are',
      title: 'AWA CONSTRUCTION',
      badge: 'By SAGAWA GROUP',
      headline: 'Spesialis Pembangunan/Renovasi Rumah, Coffee Shop, dan Ruko',
      intro: 'Kami bekerja dengan standar profesional mencakup:',
      list: [
        'RAB Transparan',
        'Pengawasan Harian',
        'Konsultasi Kapan saja',
        'Standar Kualitas Tinggi',
      ],
      closing:
        'Kami berkomitmen untuk memberikan hasil yang terbaik dengan perhatian penuh pada detail dan kepuasan klien.',
    },
    services: {
      title: 'LAYANAN KAMI',
      subtitle:
        'Kami menyediakan spektrum layanan untuk memenuhi kebutuhan konstruksi Anda, dari perencanaan awal hingga serah terima',
      items: {
        design: {
          title: 'Desain & Perencanaan',
          desc: 'Solusi desain inovatif dan berkelanjutan yang disesuaikan dengan visi dan kebutuhan Anda.',
        },
        construction: {
          title: 'Konstruksi',
          desc: 'Manajemen proyek konstruksi berkualitas tinggi, memastikan proyek tepat waktu dan sesuai anggaran.',
        },
        maintenance: {
          title: 'Pemeliharaan',
          desc: 'Dukungan pasca-konstruksi dan pemeliharaan menyeluruh untuk memastikan umur panjang bangunan.',
        },
      },
      cta: 'Layanan Kami',
    },
    projects: {
      title: 'Proyek Unggulan',
      subtitle: 'Projek terakhir',
      floorArea: 'Luas Lantai',
      viewAll: 'Lihat Semua Proyek',
      partner: {
        title: 'Bermitra Dengan Kami untuk Kebutuhan Konstruksi Anda',
        desc: 'Tim kami siap memberikan solusi konstruksi yang efisien, berkualitas tinggi, dan terintegrasi yang disesuaikan dengan kebutuhan bisnis Anda',
        cta: 'Hubungi Kami',
      },
    },
    contact: {
      subtitle: 'Hubungi Kami',
      title: 'Bermitra Dengan Kami untuk Kebutuhan Konstruksi Anda',
      description:
        'Tim kami siap memberikan solusi konstruksi yang efisien, berkualitas tinggi, dan terintegrasi yang disesuaikan dengan kebutuhan bisnis Anda',
      cta: 'Konsultasi Sekarang',
    },
    footer: {
      companyDesc:
        'Perusahaan konstruksi terkemuka yang menyediakan layanan desain, bangun, dan pemeliharaan di seluruh Indonesia.',
      quickAccess: 'Akses Cepat',
      services: 'Layanan',
      officialAddress: 'Alamat Resmi',
      links: {
        about: 'Tentang Kami',
        projects: 'Proyek',
        careers: 'Karir',
        contact: 'Hubungi Kami',
      },
      location: 'Lokasi',
      followUs: 'Ikuti Kami',
    },
    chatbot: {
      greeting: {
        morning:
          'Selamat pagi! Saya AWA Bot, siap membantu Anda. Ada yang bisa saya bantu hari ini?',
        afternoon:
          'Selamat siang! Saya AWA Bot, siap membantu Anda. Ada yang bisa saya bantu hari ini?',
        evening:
          'Selamat malam! Saya AWA Bot, siap membantu Anda. Ada yang bisa saya bantu hari ini?',
      },
      initialMessage: 'Halo Aku AI Assistant AWA',
      responses: {
        greetingMorning:
          'Halo! Selamat pagi, selamat datang di AWA Construction. Ada yang bisa saya bantu?',
        greetingAfternoon:
          'Halo! Selamat siang, selamat datang di AWA Construction. Ada yang bisa saya bantu?',
        greetingEvening:
          'Halo! Selamat malam, selamat datang di AWA Construction. Ada yang bisa saya bantu?',
        servicePrompt: 'Berikut adalah layanan yang tersedia di AWA Construction:',
        defaultResponse:
          "Terima kasih atas pertanyaannya. Apakah Anda ingin mengetahui layanan kami? Silakan ketik 'service' atau 'layanan' untuk melihat pilihan layanan yang tersedia.",
      },
      serviceOptions: {
        consultation: 'Konsultasi',
        construction: 'Layanan Konstruksi',
      },
    },
    consultation: {
      title: 'Konsultasi',
      intro: {
        title: 'Butuh Bantuan untuk Proyek Konstruksi Anda?',
        desc: 'Isi form berikut dan tim ahli kami akan menghubungi Anda dalam 24 jam.',
      },
      contactInfo: {
        title: 'Informasi Kontak Resmi Kami',
      },
      form: {
        title: 'Form Konsultasi',
        name: 'Nama',
        email: 'Email',
        whatsapp: 'No WhatsApp',
      },
      project: {
        title: 'Detail Proyek',
        type: 'Jenis Proyek',
        location: 'Lokasi Proyek',
        area: 'Luas Proyek',
        length: 'Panjang',
        width: 'Lebar',
        unit: 'dalam satuan m²',
        typePlaceholder: 'Contoh: Renovasi Rumah',
      },
      preferences: {
        title: 'Preferensi & Budget',
        budget: 'Budget',
        budgetPlaceholder: 'Contoh: 100 Juta',
        timeline: 'Rencana Pengerjaan',
        timelinePlaceholder: 'Contoh: Bulan Depan',
      },
      submit: 'Konsultasi Sekarang',
    },
    error: {
      title: 'Terjadi Kesalahan',
      description:
        'Maaf, sistem kami mengalami kendala tak terduga. Kami sedang berusaha memperbaikinya. Silakan coba muat ulang halaman.',
      retry: 'Coba Lagi',
      back: 'Kembali ke Beranda',
    },
    notFound: {
      title: 'Halaman Tidak Ditemukan',
      description:
        'Maaf, sepertinya halaman yang Anda cari sedang dalam konstruksi atau tidak tersedia. Mari kembali ke pondasi awal.',
      backHome: 'Kembali ke Beranda',
      goBack: 'Kembali Sebelumnya',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      company: '会社概要',
      project: 'プロジェクト',
      service: 'サービス',
      contact: 'お問い合わせ',
    },
    about: {
      subtitle: '私たちについて',
      title: 'AWA CONSTRUCTION',
      badge: 'By SAGAWA GROUP',
      headline: '住宅、コーヒーショップ、店舗の建設・リノベーションのスペシャリスト',
      intro: '私たちは以下の専門基準に従って仕事をしています：',
      list: ['透明性のある予算 (RAB)', '毎日の監督', 'いつでも相談可能', '高品質な基準'],
      closing: '細部へのこだわりと顧客満足を重視し、最高の結果を提供することをお約束します。',
    },
    services: {
      title: '私たちのサービス',
      subtitle: '初期計画から引き渡しまで、お客様の建設ニーズを満たす幅広いサービスを提供します',
      items: {
        design: {
          title: '設計と計画',
          desc: 'お客様のビジョンと要件に合わせた、革新的で持続可能な設計ソリューション。',
        },
        construction: {
          title: '建設',
          desc: '高品質な建設プロジェクト管理により、プロジェクトを予定通り、予算内で確実に遂行します。',
        },
        maintenance: {
          title: 'メンテナンス',
          desc: '建物の寿命を確保するための包括的な建設後のサポートとメンテナンス。',
        },
      },
      cta: '当社のサービス',
    },
    projects: {
      title: '注目のプロジェクト',
      subtitle: '最近のプロジェクト',
      floorArea: '床面積',
      viewAll: 'すべてのプロジェクトを見る',
      partner: {
        title: '建設ニーズのために私たちと提携しましょう',
        desc: '私たちのチームは、お客様のビジネスニーズに合わせた効率的で高品質かつ統合された建設ソリューションを提供する準備ができています',
        cta: '私たちに問い合わせる',
      },
    },
    contact: {
      subtitle: 'お問い合わせ',
      title: '建設ニーズのために私たちと提携しましょう',
      description:
        '私たちのチームは、お客様のビジネスニーズに合わせた効率的で高品質かつ統合された建設ソリューションを提供する準備ができています',
      cta: '今すぐ相談する',
    },
    footer: {
      companyDesc: 'インドネシア全土で設計、建設、メンテナンスサービスを提供する大手建設会社。',
      quickAccess: 'クイックアクセス',
      services: 'サービス',
      officialAddress: '公式住所',
      links: {
        about: '私たちについて',
        projects: 'プロジェクト',
        careers: 'キャリア',
        contact: 'お問い合わせ',
      },
      location: '所在地',
      followUs: 'フォローする',
    },
    chatbot: {
      greeting: {
        morning: 'おはようございます！私はAWA Botです。本日はどのようにお手伝いいたしましょうか？',
        afternoon: 'こんにちは！私はAWA Botです。本日はどのようにお手伝いいたしましょうか？',
        evening: 'こんばんは！私はAWA Botです。本日はどのようにお手伝いいたしましょうか？',
      },
      initialMessage: 'こんにちは、私はAWAアシスタントです',
      responses: {
        greetingMorning:
          'こんにちは！おはようございます。AWA Constructionへようこそ。どのようにお手伝いいたしましょうか？',
        greetingAfternoon:
          'こんにちは！AWA Constructionへようこそ。どのようにお手伝いいたしましょうか？',
        greetingEvening:
          'こんばんは！AWA Constructionへようこそ。どのようにお手伝いいたしましょうか？',
        servicePrompt: 'AWA Constructionで利用可能なサービスは次のとおりです：',
        defaultResponse:
          "ご質問ありがとうございます。当社のサービスについて知りたいですか？利用可能なサービスオプションを表示するには、'service'と入力してください。",
      },
      serviceOptions: {
        consultation: '相談',
        construction: '建設サービス',
      },
    },
    consultation: {
      title: '相談',
      intro: {
        title: '建設プロジェクトでお困りですか？',
        desc: '以下のフォームにご記入ください。専門チームが24時間以内にご連絡いたします。',
      },
      contactInfo: {
        title: '公式連絡先情報',
      },
      form: {
        title: '相談フォーム',
        name: '名前',
        email: 'メールアドレス',
        whatsapp: 'WhatsApp番号',
      },
      project: {
        title: 'プロジェクト詳細',
        type: 'プロジェクトの種類',
        location: 'プロジェクトの場所',
        area: 'プロジェクト面積',
        length: '長さ',
        width: '幅',
        unit: '単位 m²',
        typePlaceholder: '例：家のリノベーション',
      },
      preferences: {
        title: '希望と予算',
        budget: '予算',
        budgetPlaceholder: '例：1億ルピア',
        timeline: 'タイムライン',
        timelinePlaceholder: '例：来月',
      },
      submit: '今すぐ相談する',
    },
    error: {
      title: 'エラーが発生しました',
      description:
        '申し訳ありませんが、システムに予期しない問題が発生しました。現在修正作業中です。ページを再読み込みしてください。',
      retry: 'あきらめないで',
      back: 'ホームに戻る',
    },
    notFound: {
      title: 'ページが見つかりません',
      description:
        '申し訳ありませんが、お探しのページは建設中か利用できないようです。基礎に戻りましょう。',
      backHome: 'ホームに戻る',
      goBack: '前に戻る',
    },
  },
} as const;
