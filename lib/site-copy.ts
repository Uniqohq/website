export type SiteLanguage = "en" | "ru";

export const siteCopy = {
  en: {
    header: {
      nav: ["Products", "Features", "Security", "Pricing", "Manifesto"],
      cta: "Get your card"
    },
    hero: {
      titleTop: "The card",
      titleBottom: "that thinks before it pays",
      copy: "Uniqo analyzes in real time so you always pay smarter, faster and with total control"
    },
    products: {
      title: "Products",
      discover: "Discover all cards",
      moreDesigns: "More designs, limited editions and exclusive drops.",
      cards: [
        { number: "01", name: "Arctic", copy: "Clean, subtle and timeless. For everyday spending." },
        { number: "02", name: "Midnight", copy: "Bold, minimal and refined. For those who go further." },
        { number: "03", name: "Graphite", copy: "Strong, reliable and distinct. For your business and beyond" }
      ]
    },
    security: {
      title: "Security",
      copy: "Built to protect your money, before anything happens",
      cards: [
        { title: "Fraud Detection", copy: "Blocks suspicious payments before they cause harm." },
        { title: "Freeze in One Tap", copy: "Lock your card instantly from the app. Unfreeze it when you're ready." },
        { title: "Real-time Alerts", copy: "Get notified instantly about every transaction, login and security event." },
        { title: "You're in Control", copy: "Set limits, control where your card works and manage everything your way." }
      ],
      lostCardTitle: "Lost your card? Someone else can return it.",
      lostCardCopy: "If your card is lost, anyone can tap it with their phone to contact you securely and help return it."
    },
    pricing: {
      titleTop: "One card.",
      titleBottom: "Three ways.",
      copy: "Choose the plan that fits your life. Upgrade or downgrade anytime.",
      monthly: "Monthly",
      yearly: "Yearly",
      month: "month",
      year: "year",
      forever: "forever",
      startTitleTop: "Not sure yet?",
      startTitleBottom: "Start with Arctic.",
      startCopy: "You can upgrade, downgrade or cancel in any time",
      startCta: "Get your card",
      plans: [
        {
          name: "Arctic",
          copy: "Build for essentials.",
          cta: "Get started",
          features: ["Virtual card", "1 physical card", "Instant notifications", "Spending insights", "Freeze / Unfreeze card"]
        },
        {
          name: "Midnight",
          copy: "More control.",
          cta: "Choose midnight",
          features: [
            "Everything in Arctic",
            "Up to 5 virtual cards",
            "Change card number instantly",
            "One-time cards",
            "AI spending categories",
            "Premium card designs"
          ]
        },
        {
          name: "Graphite",
          copy: "Total control.",
          cta: "Choose graphite",
          features: [
            "Everything in Midnight",
            "Unlimited virtual cards",
            "Merchant control",
            "Country lock",
            "Time-based card rules",
            "AI fraud protection",
            "Dynamic card number",
            "Travel insurance"
          ]
        }
      ]
    },
    manifesto: {
      headingTop: "We don’t build",
      headingBottom: "another bank.",
      line: "Uniqo is a financial technology company reimagining how the world pays. No unnecessary features. No hidden fees. Just a card that puts you in charge."
    },
    footer: {
      companyCopy: "A financial technology company reimagining how the world pays. Smarter, safer, and designed for total control.",
      columns: [
        { title: "PRODUCTS", links: ["Uniqo Card", "For Personal Use", "For Business", "Pricing", "Compare Plans"] },
        { title: "COMPANY", links: ["Our Manifesto", "About Us", "Careers", "Press Kit", "Contact"] },
        { title: "RESOURCES", links: ["Help centre", "Security", "Terms of Service", "Privacy Policy", "Cookie Policy"] }
      ],
      copyright: "© 2026 FrameLabs LLC. All rights reserved.",
      language: "Language",
      languages: [
        { code: "en", short: "EN", label: "English" },
        { code: "ru", short: "RU", label: "Русский" }
      ],
      regions: [
        { label: "United States", menuLabel: "United States (Default)" },
        { label: "European Union" },
        { label: "United Kingdom" },
        { label: "Canada" },
        { label: "Australia" },
        { label: "Singapore" },
        { label: "United Arab Emirates" },
        { label: "Japan" }
      ]
    },
    waitlist: {
      back: "Back to site",
      title: "Uniqo is not live yet.",
      copy: "We are preparing access by region. Leave your email and we will let you in when Uniqo opens.",
      email: "Email address",
      joining: "Joining",
      join: "Join waitlist",
      success: "You're on the list. We'll email you before launch.",
      idle: "No spam. Just launch access and important availability updates.",
      error: "Could not join the waitlist. Please try again."
    }
  },
  ru: {
    header: {
      nav: ["Продукты", "Возможности", "Безопасность", "Тарифы", "Манифест"],
      cta: "Получить карту"
    },
    hero: {
      titleTop: "Карта,",
      titleBottom: "которая думает перед оплатой",
      copy: "Uniqo анализирует всё в реальном времени, чтобы каждый платёж был быстрее, умнее и полностью под вашим контролем"
    },
    products: {
      title: "Продукты",
      discover: "Смотреть все карты",
      moreDesigns: "Больше дизайнов, лимитированные выпуски и эксклюзивные дропы.",
      cards: [
        { number: "01", name: "Arctic", copy: "Чистая, сдержанная и вне времени. Для ежедневных трат." },
        { number: "02", name: "Midnight", copy: "Смелая, минималистичная и выверенная. Для тех, кто идет дальше." },
        { number: "03", name: "Graphite", copy: "Надежная, выразительная и строгая. Для бизнеса и не только." }
      ]
    },
    security: {
      title: "Безопасность",
      copy: "Защищает ваши деньги ещё до того, как что-то произойдёт",
      cards: [
        { title: "Защита от мошенничества", copy: "Останавливает подозрительные платежи до того, как они причинят ущерб." },
        { title: "Заморозка в одно касание", copy: "Мгновенно замораживайте карту в приложении и включайте её снова, когда будете готовы." },
        { title: "Мгновенные уведомления", copy: "Сразу сообщает о каждой операции, входе в аккаунт и важном событии безопасности." },
        { title: "Всё под контролем", copy: "Задавайте лимиты, выбирайте, где работает карта, и управляйте ею так, как удобно вам." }
      ],
      lostCardTitle: "Потеряли карту? Вам помогут её вернуть.",
      lostCardCopy: "Нашедшему достаточно коснуться карты телефоном, чтобы безопасно связаться с вами."
    },
    pricing: {
      titleTop: "Одна карта.",
      titleBottom: "Три варианта.",
      copy: "Выберите тариф под свой ритм жизни. Меняйте его в любой момент.",
      monthly: "Месяц",
      yearly: "Год",
      month: "месяц",
      year: "год",
      forever: "навсегда",
      startTitleTop: "Не уверены?",
      startTitleBottom: "Начните с Arctic.",
      startCopy: "Тариф всегда можно сменить или отменить",
      startCta: "Получить карту",
      plans: [
        {
          name: "Arctic",
          copy: "База для главного.",
          cta: "Начать",
          features: ["Виртуальная карта", "1 физическая карта", "Мгновенные уведомления", "Аналитика трат", "Заморозка / разморозка карты"]
        },
        {
          name: "Midnight",
          copy: "Больше контроля.",
          cta: "Выбрать Midnight",
          features: [
            "Всё из Arctic",
            "До 5 виртуальных карт",
            "Мгновенная смена номера карты",
            "Одноразовые карты",
            "AI-категории трат",
            "Премиальные дизайны карт"
          ]
        },
        {
          name: "Graphite",
          copy: "Максимум контроля.",
          cta: "Выбрать Graphite",
          features: [
            "Всё из Midnight",
            "Безлимитные виртуальные карты",
            "Блокировка отдельных продавцов",
            "Блокировка по странам",
            "Правила карты по времени",
            "AI-защита от мошенничества",
            "Динамический номер карты",
            "Страхование поездок"
          ]
        }
      ]
    },
    manifesto: {
      headingTop: "Мы не создаём",
      headingBottom: "ещё один банк.",
      line: "Uniqo — финансовая технологическая компания, которая меняет представление о платежах. Никаких лишних функций. Никаких скрытых комиссий. Только карта, с которой всё под вашим контролем."
    },
    footer: {
      companyCopy: "Финансовые технологии для нового подхода к платежам. Умнее, безопаснее и полностью под вашим контролем.",
      columns: [
        { title: "ПРОДУКТЫ", links: ["Карта Uniqo", "Для личного использования", "Для бизнеса", "Тарифы", "Сравнить планы"] },
        { title: "КОМПАНИЯ", links: ["Наш манифест", "О нас", "Карьера", "Пресс-кит", "Контакты"] },
        { title: "РЕСУРСЫ", links: ["Центр помощи", "Безопасность", "Условия использования", "Политика конфиденциальности", "Политика cookie"] }
      ],
      copyright: "© 2026 FrameLabs LLC. Все права защищены.",
      language: "Язык",
      languages: [
        { code: "en", short: "EN", label: "English" },
        { code: "ru", short: "RU", label: "Русский" }
      ],
      regions: [
        { label: "США", menuLabel: "США (по умолчанию)" },
        { label: "Европейский союз" },
        { label: "Великобритания" },
        { label: "Канада" },
        { label: "Австралия" },
        { label: "Сингапур" },
        { label: "ОАЭ" },
        { label: "Япония" }
      ]
    },
    waitlist: {
      back: "Назад на сайт",
      title: "Uniqo пока не запущен.",
      copy: "Мы готовим запуск по регионам. Оставьте электронную почту, и мы сообщим, когда Uniqo станет доступен.",
      email: "Email",
      joining: "Отправка",
      join: "Присоединиться",
      success: "Вы в списке. Мы напишем вам до запуска.",
      idle: "Без спама. Только новости о запуске и доступности Uniqo.",
      error: "Не удалось присоединиться к листу ожидания. Попробуйте еще раз."
    }
  }
} as const;
