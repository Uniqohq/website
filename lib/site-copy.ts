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
      startTitleTop: "Not sure yet?",
      startTitleBottom: "Start with Arctic.",
      startCopy: "You can upgrade, downgrade or cancel in any time",
      startCta: "Get your card",
      plans: [
        {
          name: "Arctic",
          copy: "Build for essentials.",
          cta: "Get started",
          features: ["Virtual card", "Up to 3 physical card", "Real-time push'es", "Spending insights", "Card freeze"]
        },
        {
          name: "Midnight",
          copy: "More control.",
          cta: "Choose midnight",
          features: ["Everything in Arctic", "Up to 5 physical cards", "AI spending categories", "Smart limits", "Priority support"]
        },
        {
          name: "Graphite",
          copy: "Total control.",
          cta: "Choose graphite",
          features: ["Everything in Midnight", "Unlimited physical cards", "AI purchase approval", "Merchant control", "Travel insurance"]
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
      titleBottom: "которая думает до оплаты",
      copy: "Uniqo анализирует все в реальном времени, чтобы вы всегда платили умнее, быстрее и с полным контролем"
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
      copy: "Создано, чтобы защищать ваши деньги еще до того, как что-то случится",
      cards: [
        { title: "Защита от мошенничества", copy: "Блокирует подозрительные платежи до того, как они успеют навредить." },
        { title: "Заморозка в одно касание", copy: "Мгновенно блокируйте карту в приложении и так же легко возвращайте ее обратно." },
        { title: "Уведомления в реальном времени", copy: "Получайте мгновенные оповещения о каждой транзакции, входе и событии безопасности." },
        { title: "Контроль у вас", copy: "Настраивайте лимиты, управляйте местами использования карты и контролируйте все по-своему." }
      ],
      lostCardTitle: "Потеряли карту? Ее сможет вернуть другой человек.",
      lostCardCopy: "Если карта потеряна, любой человек сможет приложить ее к телефону, безопасно связаться с вами и помочь вернуть."
    },
    pricing: {
      titleTop: "Одна карта.",
      titleBottom: "Три уровня.",
      copy: "Выберите план под свой ритм жизни. Переходите выше или ниже в любой момент.",
      monthly: "Месяц",
      yearly: "Год",
      month: "месяц",
      year: "год",
      startTitleTop: "Не уверены?",
      startTitleBottom: "Начните с Arctic.",
      startCopy: "Вы сможете повысить, понизить план или отменить его в любой момент",
      startCta: "Получить карту",
      plans: [
        {
          name: "Arctic",
          copy: "База для главного.",
          cta: "Начать",
          features: ["Виртуальная карта", "До 3 физических карт", "Мгновенные пуши", "Аналитика трат", "Заморозка карты"]
        },
        {
          name: "Midnight",
          copy: "Больше контроля.",
          cta: "Выбрать Midnight",
          features: ["Все из Arctic", "До 5 физических карт", "AI-категории трат", "Умные лимиты", "Приоритетная поддержка"]
        },
        {
          name: "Graphite",
          copy: "Максимум контроля.",
          cta: "Выбрать Graphite",
          features: ["Все из Midnight", "Безлимит физических карт", "AI-подтверждение покупок", "Контроль мерчантов", "Страхование поездок"]
        }
      ]
    },
    manifesto: {
      headingTop: "Мы не строим",
      headingBottom: "еще один банк.",
      line: "Uniqo — финтех-компания, которая заново переосмысляет то, как мир платит. Ничего лишнего. Никаких скрытых комиссий. Просто карта, которая оставляет контроль у вас."
    },
    footer: {
      companyCopy: "Финансовая технологическая компания, переосмысляющая то, как мир платит. Умнее, безопаснее и с полным контролем.",
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
      title: "Uniqo еще не запущен.",
      copy: "Мы готовим запуск по регионам. Оставьте email, и мы откроем вам доступ, когда Uniqo будет готов.",
      email: "Email",
      joining: "Отправка",
      join: "Встать в лист ожидания",
      success: "Вы в списке. Мы напишем вам до запуска.",
      idle: "Никакого спама. Только доступ к запуску и важные обновления.",
      error: "Не удалось присоединиться к листу ожидания. Попробуйте еще раз."
    }
  }
} as const;
