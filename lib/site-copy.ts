export type SiteLanguage = "en" | "ru";

export const siteCopy = {
  en: {
    header: {
      nav: ["Features", "Security", "Pricing", "Manifesto"],
      cta: "Get your card"
    },
    hero: {
      titleTop: "The card",
      titleBottom: "that thinks before it pays",
      copy: "Uniqo analyzes in real time so you always pay smarter, faster and with total control"
    },
    features: {
      titleTop: "Everything you need.",
      titleBottom: "Nothing you don’t.",
      copy: "Powerful card controls and useful intelligence, kept simple from the first tap.",
      cards: [
        { title: "Smart card controls", copy: "Freeze your card, change limits and manage payments without support." },
        { title: "Virtual cards", copy: "Create separate virtual cards for subscriptions, shopping and everyday spending." },
        { title: "One-time cards", copy: "Card details refresh after every payment for additional privacy." },
        { title: "Merchant and country locks", copy: "Decide which merchants and countries your card works with." },
        { title: "AI fraud protection", copy: "Suspicious activity is checked before money leaves your account." },
        { title: "Spending intelligence", copy: "Understand your spending and the context behind every purchase." }
      ]
    },
    film: {
      title: "The card is a key, not a vault.",
      copy: "Your money stays in your accounts. Uniqo decides where each payment comes from."
    },
    security: {
      title: "Security",
      copy: "Built to protect your money, before anything happens",
      cards: [
        { title: "Fraud Detection", copy: "Blocks suspicious payments before money leaves your account." },
        { title: "Freeze in One Tap", copy: "Freeze and unfreeze your card in one tap." },
        { title: "Real-time Alerts", copy: "Instant alerts for payments and important activity." },
        { title: "You're in Control", copy: "Set limits and choose where your card works." }
      ],
      lostCardTitle: "Lost your card? Someone else can return it.",
      lostCardCopy: "If your card is lost, anyone can tap it with their phone to contact you securely and help return it."
    },
    pricing: {
      titleTop: "One card.",
      titleBottom: "Four ways.",
      copy: "Every plan comes with its own card, free. Upgrade or downgrade anytime.",
      monthly: "Monthly",
      yearly: "Yearly",
      month: "month",
      year: "year",
      forever: "forever",
      cardIncluded: "Card included",
      cardsTitle: "Your card comes with your plan.",
      cards: [
        { title: "One free card", copy: "Every plan includes one physical card in its own design: Arctic, Midnight, Graphite or Sterling." },
        { title: "Extra cards", copy: "Need another one? Order extra cards in the design of your plan for an additional fee." },
        { title: "Limited editions", copy: "Special designs and drops are not tied to any plan. Order them on any plan for an additional fee." },
        { title: "Designs stay with plans", copy: "Plan designs come with their plan. To get a different one, switch plans." }
      ],
      startTitleTop: "Not sure yet?",
      startTitleBottom: "Start with Arctic.",
      startCopy: "You can upgrade, downgrade or cancel in any time",
      startCta: "Get your card",
      plans: [
        {
          name: "Arctic",
          copy: "Clean, subtle and timeless. For everyday spending.",
          card: "Arctic card",
          cta: "Get started",
          features: ["Virtual card", "1 physical card", "Instant notifications", "Spending insights", "Freeze / Unfreeze card"]
        },
        {
          name: "Midnight",
          copy: "Bold, minimal and refined. For those who go further.",
          card: "Midnight card",
          cta: "Choose midnight",
          features: [
            "Everything in Arctic",
            "Up to 5 virtual cards",
            "Change card number instantly",
            "One-time cards",
            "AI spending categories"
          ]
        },
        {
          name: "Graphite",
          copy: "Strong, reliable and distinct. For total control.",
          card: "Graphite card",
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
        },
        {
          name: "Sterling",
          copy: "Titanium and uncompromising. The very best of Uniqo.",
          card: "Sterling titanium card",
          cta: "Choose sterling",
          features: [
            "Everything in Graphite",
            "Priority support, 24/7",
            "Extended travel insurance",
            "Express card replacement",
            "First access to limited editions",
            "Early access to new features"
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
        { label: "Japan" },
        { label: "Russia" },
        { label: "Belarus" }
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
      error: "Could not join the waitlist. Please try again."
    }
  },
  ru: {
    header: {
      nav: ["Возможности", "Безопасность", "Тарифы", "Манифест"],
      cta: "Получить карту"
    },
    hero: {
      titleTop: "Карта,",
      titleBottom: "которая думает перед оплатой",
      copy: "Uniqo анализирует всё в реальном времени, чтобы каждый платёж был быстрее, умнее и полностью под вашим контролем"
    },
    features: {
      titleTop: "Всё, что нужно.",
      titleBottom: "Ничего лишнего.",
      copy: "Управление картой и полезная аналитика в простом интерфейсе с первого касания.",
      cards: [
        { title: "Умное управление картой", copy: "Замораживайте карту, меняйте лимиты и управляйте платежами без поддержки." },
        { title: "Виртуальные карты", copy: "Создавайте отдельные виртуальные карты для подписок, покупок и повседневных расходов." },
        { title: "Одноразовые карты", copy: "Реквизиты обновляются после каждой оплаты для дополнительной защиты." },
        { title: "Блокировки продавцов и стран", copy: "Решайте, у каких продавцов и в каких странах карта будет работать." },
        { title: "AI-защита от мошенничества", copy: "Подозрительные операции проверяются до списания денег со счёта." },
        { title: "Аналитика расходов", copy: "Понимайте структуру расходов и контекст каждой покупки." }
      ]
    },
    film: {
      title: "Карта — это ключ, а не сейф.",
      copy: "Деньги остаются на ваших счетах. Uniqo решает, откуда взять каждый платёж."
    },
    security: {
      title: "Безопасность",
      copy: "Защищает ваши деньги ещё до того, как что-то произойдёт",
      cards: [
        { title: "Защита платежей", copy: "Блокирует подозрительные платежи до списания." },
        { title: "Заморозка карты", copy: "Замораживайте и включайте карту одним касанием." },
        { title: "Мгновенные уведомления", copy: "Сразу сообщает об операциях и важных событиях." },
        { title: "Всё под контролем", copy: "Настраивайте лимиты и условия работы карты." }
      ],
      lostCardTitle: "Потеряли карту? Вам помогут её вернуть.",
      lostCardCopy: "Нашедшему достаточно коснуться карты телефоном, чтобы безопасно связаться с вами."
    },
    pricing: {
      titleTop: "Одна карта.",
      titleBottom: "Четыре варианта.",
      copy: "В каждый тариф входит своя карта. Меняйте тариф в любой момент.",
      monthly: "Месяц",
      yearly: "Год",
      month: "месяц",
      year: "год",
      forever: "навсегда",
      cardIncluded: "Карта входит",
      cardsTitle: "Карта входит в тариф.",
      cards: [
        { title: "Одна карта бесплатно", copy: "В каждый тариф входит одна физическая карта в его дизайне: Arctic, Midnight, Graphite или Sterling." },
        { title: "Дополнительные карты", copy: "Нужна ещё одна? Закажите дополнительные карты в дизайне вашего тарифа за отдельную плату." },
        { title: "Лимитированные дизайны", copy: "Особые дизайны и дропы не привязаны к тарифам. Их можно заказать на любом тарифе за отдельную плату." },
        { title: "Дизайн идёт с тарифом", copy: "Дизайны тарифов доступны только вместе с ними. Чтобы получить другой, смените тариф." }
      ],
      startTitleTop: "Не уверены?",
      startTitleBottom: "Начните с Arctic.",
      startCopy: "Тариф всегда можно сменить или отменить",
      startCta: "Получить карту",
      plans: [
        {
          name: "Arctic",
          copy: "Чистая, сдержанная и вне времени. Для ежедневных трат.",
          card: "Карта Arctic",
          cta: "Начать",
          features: ["Виртуальная карта", "1 физическая карта", "Мгновенные уведомления", "Аналитика трат", "Заморозка / разморозка карты"]
        },
        {
          name: "Midnight",
          copy: "Смелая, минималистичная и выверенная. Для тех, кто идёт дальше.",
          card: "Карта Midnight",
          cta: "Выбрать Midnight",
          features: [
            "Всё из Arctic",
            "До 5 виртуальных карт",
            "Мгновенная смена номера карты",
            "Одноразовые карты",
            "AI-категории трат"
          ]
        },
        {
          name: "Graphite",
          copy: "Надёжная, выразительная и строгая. Для полного контроля.",
          card: "Карта Graphite",
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
        },
        {
          name: "Sterling",
          copy: "Титан без компромиссов. Лучшее от Uniqo.",
          card: "Титановая карта Sterling",
          cta: "Выбрать Sterling",
          features: [
            "Всё из Graphite",
            "Приоритетная поддержка 24/7",
            "Расширенное страхование поездок",
            "Срочная замена карты",
            "Первый доступ к лимитированным дизайнам",
            "Ранний доступ к новым функциям"
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
        { label: "Япония" },
        { label: "Россия" },
        { label: "Беларусь" }
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
      error: "Не удалось присоединиться к листу ожидания. Попробуйте еще раз."
    }
  }
} as const;
