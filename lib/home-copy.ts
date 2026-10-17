// Copy for the dark home page. Prices are the UK plan prices.
export const homeCopy = {
  en: {
    nav: ["Features", "Security", "Plans", "FAQ"],
    hero: {
      title: "The card that thinks before it pays",
      copy: "Uniqo checks every payment in real time, so you pay smarter, faster and always in control.",
      cta: "Get your card"
    },
    overview: {
      title: "One card. Everything in control.",
      copy: "Virtual cards, limits, travel and protection, in one app that stays out of your way.",
      primary: "Get your card",
      secondary: "See plans",
      tiles: [
        { title: "A card for every plan", chip: { title: "Midnight card", meta: "Physical · •• 4587", value: "Included" } },
        { title: "Your money at a glance", chip: { title: "Coffee, Brick Lane", meta: "08:42 · Midnight •• 4587", value: "−£3.60" } },
        { title: "Limits that hold", chip: { title: "£612 left of £1,000", meta: "Resets on the 1st of each month", progress: 61 } },
        { title: "Freeze in one tap", chip: { title: "Card frozen", meta: "Every payment is paused", toggle: true } },
        { title: "Works where you say", chip: { title: "Country lock", meta: "Your card works in 3 countries", value: "Edit ›" } }
      ]
    },
    more: {
      title: "More than just a card",
      copy: "From the moment your card arrives, everything you need to spend well is already in the app.",
      points: [
        "Virtual cards for subscriptions and online shopping",
        "One-time cards that refresh after every payment",
        "Change your card number instantly",
        "Spending sorted into categories automatically",
        "Choose the shops and countries your card works in"
      ],
      cta: "Get your card"
    },
    protect: {
      title: "Protection, end to end",
      copy: "Uniqo checks a payment before money leaves your account, and keeps every control one tap away.",
      points: [
        "Suspicious payments checked before they go through",
        "Freeze and unfreeze your card in one tap",
        "Instant alerts for payments and important activity",
        "Anyone who finds your card can help return it"
      ],
      cta: "Join the waitlist",
      cards: [
        { title: "Every payment, checked", chip: { title: "£249.00 · Unknown shop", meta: "Was this you?", yes: "It was me", no: "Block card" } },
        { title: "A lost card finds its way home", chip: { title: "Someone found your card", meta: "Your number stays private", value: "Message" } },
        { title: "Know the moment it happens", chip: { title: "Payment declined", meta: "Card is frozen · 21:14", value: "£18.00" } }
      ]
    },
    film: { title: "Every plan, its own card." },
    toggle: { on: "Frozen", off: "Active" },
    numbers: {
      title: "Simple by design",
      items: [
        { value: "£0", label: "for Arctic, forever", note: "No monthly fee on the free plan" },
        { value: "1 tap", label: "to freeze a card", note: "And one more to bring it back" },
        { value: "4", valueRu: "3", label: "card designs", note: "One for every plan, included" }
      ]
    },
    plans: {
      title: "Find your plan",
      primary: "Get started",
      secondary: "Compare plans",
      month: "/month",
      free: "Free",
      items: [
        { id: "arctic", name: "Arctic", price: "0", copy: "Everyday spending, with a virtual card and one physical card." },
        { id: "midnight", name: "Midnight", price: "4.99", copy: "Up to 5 virtual cards, one-time cards and AI spending categories." },
        { id: "graphite", name: "Graphite", price: "9.99", copy: "Unlimited virtual cards, merchant control and country lock." },
        { id: "sirius", name: "Sirius", price: "19.99", copy: "Our titanium card, with everything Uniqo can do." }
      ]
    },
    manifesto: "No unnecessary features. No hidden fees. Just a card that puts you in charge.",
    faq: {
      kicker: "Have questions?",
      title: "Uniqo FAQs",
      items: [
        { q: "When can I get a Uniqo card?", a: "Uniqo is pre-launch. Join the waitlist and we’ll invite you as soon as cards are available in your country, starting with the UK." },
        { q: "Is Uniqo a bank?", a: "No. Uniqo is a financial technology company. Your money will be held by a regulated partner, and we’ll name it before launch." },
        { q: "How much does it cost?", a: "Arctic is free forever. Midnight, Graphite and Sirius are paid plans, billed monthly or yearly, and every plan includes its own physical card.", aRu: "Arctic is free forever. Midnight and Graphite are paid plans, billed monthly or yearly, and every plan includes its own physical card." },
        { q: "What if I lose my card?", a: "Freeze it in the app in one tap. Anyone who finds it can tap it with their phone to reach you securely, without seeing your details." }
      ],
      note: "Uniqo is pre-launch. Features, plans and prices may change before launch."
    }
  },
  ru: {
    nav: ["Возможности", "Безопасность", "Тарифы", "Вопросы"],
    hero: {
      title: "Карта, которая думает до оплаты",
      copy: "Uniqo проверяет каждый платёж в реальном времени — вы платите умнее, быстрее и всегда под контролем.",
      cta: "Получить карту"
    },
    overview: {
      title: "Одна карта. Всё под контролем.",
      copy: "Виртуальные карты, лимиты, поездки и защита — в одном приложении, которое не мешает.",
      primary: "Получить карту",
      secondary: "Тарифы",
      tiles: [
        { title: "Своя карта у каждого тарифа", chip: { title: "Карта Midnight", meta: "Физическая · •• 4587", value: "Входит" } },
        { title: "Деньги на виду", chip: { title: "Кофе, Brick Lane", meta: "08:42 · Midnight •• 4587", value: "−£3.60" } },
        { title: "Лимиты, которые работают", chip: { title: "Осталось £612 из £1 000", meta: "Обновляется 1-го числа", progress: 61 } },
        { title: "Заморозка в одно касание", chip: { title: "Карта заморожена", meta: "Все платежи на паузе", toggle: true } },
        { title: "Работает там, где скажете", chip: { title: "Блокировка стран", meta: "Работает в 3 странах", value: "Редактировать ›" } }
      ]
    },
    more: {
      title: "Больше, чем просто карта",
      copy: "С первого дня всё, что нужно, чтобы тратить с умом, уже есть в приложении.",
      points: [
        "Виртуальные карты для подписок и покупок онлайн",
        "Одноразовые карты, которые меняются после каждого платежа",
        "Мгновенная смена номера карты",
        "Траты сами раскладываются по категориям",
        "Выбирайте магазины и страны, где работает карта"
      ],
      cta: "Получить карту"
    },
    protect: {
      title: "Защита от начала до конца",
      copy: "Uniqo проверяет платёж до того, как деньги уйдут со счёта, а все настройки — в одном касании.",
      points: [
        "Подозрительные платежи проверяются до списания",
        "Заморозка и разморозка карты в одно касание",
        "Мгновенные уведомления о платежах и важных событиях",
        "Тот, кто найдёт вашу карту, поможет её вернуть"
      ],
      cta: "В лист ожидания",
      cards: [
        { title: "Каждый платёж — под проверкой", chip: { title: "£249.00 · Неизвестный магазин", meta: "Это были вы?", yes: "Да, я", no: "Заблокировать" } },
        { title: "Потерянная карта вернётся", chip: { title: "Вашу карту нашли", meta: "Ваш номер скрыт", value: "Написать" } },
        { title: "Узнаете сразу", chip: { title: "Платёж отклонён", meta: "Карта заморожена · 21:14", value: "£18.00" } }
      ]
    },
    film: { title: "Каждому тарифу — своя карта." },
    toggle: { on: "Заморожена", off: "Активна" },
    numbers: {
      title: "Просто по задумке",
      items: [
        { value: "£0", label: "за Arctic навсегда", note: "Без ежемесячной платы на бесплатном тарифе" },
        { value: "1 касание", label: "чтобы заморозить карту", note: "И ещё одно, чтобы вернуть" },
        { value: "4", valueRu: "3", label: "дизайна карт", note: "У каждого тарифа свой, бесплатно" }
      ]
    },
    plans: {
      title: "Выберите тариф",
      primary: "Начать",
      secondary: "Сравнить тарифы",
      month: "/мес",
      free: "Бесплатно",
      items: [
        { id: "arctic", name: "Arctic", price: "0", copy: "Ежедневные траты: виртуальная карта и одна физическая." },
        { id: "midnight", name: "Midnight", price: "4.99", copy: "До 5 виртуальных карт, одноразовые карты и AI-категории трат." },
        { id: "graphite", name: "Graphite", price: "9.99", copy: "Безлимит виртуальных карт, контроль магазинов и блокировка стран." },
        { id: "sirius", name: "Sirius", price: "19.99", copy: "Титановая карта и всё, что умеет Uniqo." }
      ]
    },
    manifesto: "Без лишних функций. Без скрытых комиссий. Просто карта, которая оставляет решения за вами.",
    faq: {
      kicker: "Остались вопросы?",
      title: "Вопросы об Uniqo",
      items: [
        { q: "Когда можно получить карту Uniqo?", a: "Uniqo ещё не запущен. Запишитесь в лист ожидания — мы пригласим вас, как только карты появятся в вашей стране. Начинаем с Великобритании." },
        { q: "Uniqo — это банк?", a: "Нет. Uniqo — финтех-компания. Ваши деньги будет хранить регулируемый партнёр, и мы назовём его до запуска." },
        { q: "Сколько это стоит?", a: "Arctic бесплатен навсегда. Midnight, Graphite и Sirius — платные тарифы с оплатой помесячно или за год, и в каждый тариф входит своя физическая карта.", aRu: "Arctic бесплатен навсегда. Midnight и Graphite — платные тарифы с оплатой помесячно или за год, и в каждый тариф входит своя физическая карта." },
        { q: "Что если я потеряю карту?", a: "Заморозьте её в приложении одним касанием. Тот, кто её найдёт, сможет приложить телефон и безопасно связаться с вами, не видя ваших данных." }
      ],
      note: "Uniqo ещё не запущен. Возможности, тарифы и цены могут измениться до запуска."
    }
  }
} as const;
