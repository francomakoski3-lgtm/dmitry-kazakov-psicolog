(() => {
  const config = window.BOOKING_CONFIG || {};
  const storageKey = "dmitrySiteLang";
  const leadStorageKey = "dmitryBookingLead";
  const defaultLang = "ru";

  const ui = {
    ru: {
      pageTitle: "Онлайн-запись и оплата",
      pageIntro:
        "Заполните короткую анкету, выберите формат работы и перейдите к защищенной онлайн-записи. После активации реальных аккаунтов на этой странице будут доступны оплата, календарь, подтверждения и ссылка на видеовстречу.",
      heroTag: "Booking",
      flowTag: "Шаг 1",
      flowTitle: "Выберите услугу и заполните форму",
      flowSub:
        "Эта страница уже подготовлена под интеграцию бронирования. Форма ниже собирает обязательные данные до оплаты и подтверждения записи.",
      services: {
        single: {
          name: "Индивидуальная сессия",
          priceNote: "45-55 минут",
          description:
            "Онлайн-сессия с прямым бронированием свободного времени, обязательной оплатой до подтверждения и автоматическим письмом с деталями встречи.",
          bullets: [
            "Онлайн",
            "Прямая запись по свободным слотам",
            "Оплата до подтверждения"
          ],
          cta: "Выбрать сессию"
        },
        package: {
          name: "Пакет из 3 сессий",
          priceNote: "Оплата онлайн, остальные встречи согласуются позже",
          description:
            "Покупка полного пакета онлайн. После оплаты оставшиеся встречи согласуются отдельно, их не нужно бронировать все сразу на сайте.",
          bullets: [
            "Онлайн",
            "Покупка пакета одной оплатой",
            "Дальнейшие встречи согласуются отдельно"
          ],
          cta: "Выбрать пакет"
        }
      },
      selectedBadge: "Выбрано",
      formTag: "Шаг 2",
      formTitle: "Обязательная анкета перед записью",
      formSub:
        "Без этих данных переход к оплате и бронированию не открывается. Поля соответствуют будущей настройке booking-платформы.",
      fullName: "Имя и фамилия",
      email: "Email",
      phone: "Телефон / WhatsApp",
      language: "Язык сессии",
      reason: "Причина обращения",
      birthDate: "Дата рождения",
      placeholderFullName: "Введите имя и фамилию",
      placeholderEmail: "name@example.com",
      placeholderPhone: "Введите номер телефона или WhatsApp",
      placeholderReason:
        "Кратко опишите, с чем хотите работать на сессии",
      languagePlaceholder: "Выберите язык",
      languageOptions: {
        he: "Иврит",
        ru: "Русский"
      },
      policyTitle: "Политика отмены",
      policyText:
        "Бесплатная отмена возможна не позднее чем за 24 часа до сессии. При поздней отмене или неявке возвращается 50% оплаты.",
      policyCheckbox:
        "Я прочитал(а) и принимаю политику отмены и условия онлайн-бронирования.",
      adultRule:
        "Запись доступна только для клиентов старше 18 лет.",
      submit: "Продолжить к бронированию",
      paymentHint:
        "После активации аккаунтов здесь откроются онлайн-оплата, выбор времени и автоматические письма.",
      connectorTag: "Шаг 3",
      connectorTitle: "Система бронирования",
      connectorLead:
        "После заполнения формы ниже откроется встроенная платформа бронирования для выбранной услуги.",
      connectorPendingTitle: "Интеграция в режиме подготовки",
      connectorPendingBody:
        "Зона бронирования уже подключена к конфигурации сайта, но реальные аккаунты платформы еще не добавлены. После внесения ссылок и ключей здесь появятся свободные слоты, оплата и подтверждение.",
      connectorLiveSingle:
        "Выберите свободное время, оплатите запись и получите автоматическое подтверждение на email.",
      connectorLivePackage:
        "Оплатите пакет онлайн. После покупки оставшиеся встречи будут согласованы отдельно в ручном сопровождении специалиста.",
      openExternal: "Открыть внешнюю страницу бронирования",
      summaryTitle: "Параметры записи",
      summaryRules: [
        "Только онлайн",
        "Только иврит и русский",
        "18+",
        "Минимум 24 часа до начала",
        "Без пауз между сессиями",
        "Прямое бронирование без ручного подтверждения"
      ],
      automationTitle: "Что получит клиент",
      automations: [
        "Email-подтверждение после записи",
        "Напоминание за 24 часа",
        "Напоминание за 1 час",
        "Автоматическая ссылка на видеовстречу"
      ],
      statusTitle: "Статус интеграции",
      statusReady:
        "Страница уже подготовлена под SimplyBook как основную интеграцию и под Calendly как запасной вариант.",
      statusPending:
        "Пока что не хватает реальных учетных записей и платежных данных. После их добавления ничего переписывать не придется.",
      backToSite: "Вернуться на сайт",
      contactFallback:
        "Если хотите сохранить текущий способ связи, вы все равно можете вернуться на основной сайт и написать напрямую.",
      validation: {
        selectService: "Сначала выберите услугу.",
        fullName: "Введите имя и фамилию.",
        email: "Введите корректный email.",
        phone: "Введите телефон или WhatsApp.",
        language: "Выберите язык сессии.",
        reason: "Кратко опишите причину обращения.",
        birthDate: "Укажите дату рождения.",
        age: "Онлайн-запись доступна только для клиентов 18+.",
        policy: "Необходимо принять политику отмены."
      },
      summaryBoxTitle: "Данные перед записью",
      summaryService: "Услуга",
      summaryLanguage: "Язык",
      summaryEmail: "Email",
      summaryPhone: "Телефон",
      summaryBirthDate: "Дата рождения",
      summaryReason: "Причина обращения"
    },
    he: {
      pageTitle: "הזמנה ותשלום אונליין",
      pageIntro:
        "ממלאים טופס קצר, בוחרים את סוג השירות וממשיכים להזמנה מאובטחת אונליין. לאחר חיבור החשבונות האמיתיים, כאן יופיעו התשלום, היומן, האישורים והקישור לפגישת הווידאו.",
      heroTag: "Booking",
      flowTag: "שלב 1",
      flowTitle: "בחירת שירות ומילוי טופס חובה",
      flowSub:
        "העמוד כבר מוכן לשילוב מערכת הזמנות. הטופס שלמטה אוסף את כל המידע המחויב לפני תשלום ואישור ההזמנה.",
      services: {
        single: {
          name: "פגישה אישית",
          priceNote: "45-55 דקות",
          description:
            "פגישה אונליין עם בחירת שעה פנויה, תשלום מראש ואישור אוטומטי באימייל עם פרטי המפגש.",
          bullets: [
            "אונליין בלבד",
            "בחירה ישירה של שעה פנויה",
            "תשלום לפני אישור"
          ],
          cta: "בחירת פגישה"
        },
        package: {
          name: "חבילה של 3 פגישות",
          priceNote: "תשלום אונליין, שאר הפגישות יתואמו לאחר מכן",
          description:
            "רכישת החבילה המלאה אונליין. לאחר התשלום, יתר הפגישות יתואמו בנפרד ואין צורך להזמין את שלושתן מראש באתר.",
          bullets: [
            "אונליין בלבד",
            "רכישת חבילה בתשלום אחד",
            "שאר הפגישות יתואמו בהמשך"
          ],
          cta: "בחירת חבילה"
        }
      },
      selectedBadge: "נבחר",
      formTag: "שלב 2",
      formTitle: "טופס חובה לפני הזמנה",
      formSub:
        "ללא המידע הזה לא נפתח שלב התשלום וההזמנה. השדות תואמים להגדרה העתידית בתוך פלטפורמת ההזמנות.",
      fullName: "שם מלא",
      email: "אימייל",
      phone: "טלפון / וואטסאפ",
      language: "שפת הפגישה",
      reason: "סיבת הפנייה",
      birthDate: "תאריך לידה",
      placeholderFullName: "יש להזין שם מלא",
      placeholderEmail: "name@example.com",
      placeholderPhone: "יש להזין טלפון או WhatsApp",
      placeholderReason: "יש לתאר בקצרה במה תרצו להתמקד בפגישה",
      languagePlaceholder: "בחירת שפה",
      languageOptions: {
        he: "עברית",
        ru: "רוסית"
      },
      policyTitle: "מדיניות ביטול",
      policyText:
        "ביטול ללא עלות אפשרי עד 24 שעות לפני הפגישה. בביטול מאוחר או באי-הגעה יוחזרו 50% מהתשלום.",
      policyCheckbox:
        "קראתי ואני מאשר/ת את מדיניות הביטול ואת תנאי ההזמנה המקוונת.",
      adultRule:
        "ההזמנה פתוחה למטופלים בני 18 ומעלה בלבד.",
      submit: "המשך להזמנה",
      paymentHint:
        "לאחר חיבור החשבונות, כאן יופיעו התשלום המקוון, בחירת השעה והאימיילים האוטומטיים.",
      connectorTag: "שלב 3",
      connectorTitle: "מערכת ההזמנות",
      connectorLead:
        "לאחר מילוי הטופס תיפתח כאן מערכת ההזמנות המוטמעת עבור השירות שבחרתם.",
      connectorPendingTitle: "האינטגרציה עדיין במצב הכנה",
      connectorPendingBody:
        "אזור ההזמנה כבר מחובר להגדרות האתר, אבל חשבונות המערכת האמיתיים עדיין לא נוספו. לאחר הוספת הקישורים והחיבורים, כאן יופיעו שעות פנויות, תשלום ואישור.",
      connectorLiveSingle:
        "בחרו שעה פנויה, השלימו תשלום וקבלו אישור אוטומטי לאימייל.",
      connectorLivePackage:
        "שלמו על החבילה אונליין. לאחר הרכישה, יתר הפגישות יתואמו בנפרד מול המטפל.",
      openExternal: "פתיחת עמוד ההזמנה החיצוני",
      summaryTitle: "כללי ההזמנה",
      summaryRules: [
        "אונליין בלבד",
        "עברית ורוסית בלבד",
        "18+",
        "מינימום 24 שעות מראש",
        "ללא זמן הפסקה בין פגישות",
        "הזמנה ישירה ללא אישור ידני"
      ],
      automationTitle: "מה הלקוח יקבל",
      automations: [
        "אימייל אישור לאחר ההזמנה",
        "תזכורת 24 שעות לפני",
        "תזכורת שעה לפני",
        "קישור אוטומטי לפגישת הווידאו"
      ],
      statusTitle: "מצב האינטגרציה",
      statusReady:
        "העמוד כבר הוכן לשילוב SimplyBook כהטמעה ראשית ו-Calendly כחלופה.",
      statusPending:
        "עדיין חסרים חשבונות אמיתיים ופרטי תשלום. אחרי חיבורם לא יהיה צורך לבנות מחדש את הזרימה.",
      backToSite: "חזרה לאתר",
      contactFallback:
        "אם תרצו לשמור על דרך יצירת הקשר הנוכחית, אפשר לחזור לאתר הראשי ולפנות ישירות.",
      validation: {
        selectService: "יש לבחור קודם שירות.",
        fullName: "יש להזין שם מלא.",
        email: "יש להזין כתובת אימייל תקינה.",
        phone: "יש להזין טלפון או WhatsApp.",
        language: "יש לבחור את שפת הפגישה.",
        reason: "יש לתאר בקצרה את סיבת הפנייה.",
        birthDate: "יש להזין תאריך לידה.",
        age: "הזמנה מקוונת זמינה רק לבני 18 ומעלה.",
        policy: "יש לאשר את מדיניות הביטול."
      },
      summaryBoxTitle: "הפרטים לפני הזמנה",
      summaryService: "שירות",
      summaryLanguage: "שפה",
      summaryEmail: "אימייל",
      summaryPhone: "טלפון",
      summaryBirthDate: "תאריך לידה",
      summaryReason: "סיבת הפנייה"
    },
    en: {
      pageTitle: "Online Booking & Payment",
      pageIntro:
        "Complete a short intake form, choose the service you need, and continue to a secure online booking step. Once the real accounts are connected, this page will handle payment, calendar selection, confirmations, and the video-call link.",
      heroTag: "Booking",
      flowTag: "Step 1",
      flowTitle: "Choose a service and complete the required form",
      flowSub:
        "This page is already prepared for the booking integration. The form below collects the mandatory details before payment and booking confirmation.",
      services: {
        single: {
          name: "Single Session",
          priceNote: "45-55 minutes",
          description:
            "A direct online session with live slot selection, required prepayment, and an automatic email with the session details.",
          bullets: [
            "Online only",
            "Direct booking from available slots",
            "Payment before confirmation"
          ],
          cta: "Choose Session"
        },
        package: {
          name: "3-Session Package",
          priceNote: "Paid online, remaining sessions coordinated later",
          description:
            "Purchase the full package online. After payment, the remaining sessions are coordinated separately and do not need to be auto-booked from the site.",
          bullets: [
            "Online only",
            "Package purchased in one payment",
            "Remaining sessions coordinated afterwards"
          ],
          cta: "Choose Package"
        }
      },
      selectedBadge: "Selected",
      formTag: "Step 2",
      formTitle: "Required intake form before booking",
      formSub:
        "Without these details, the payment and booking step does not open. The fields match the future booking-platform setup.",
      fullName: "Full name",
      email: "Email",
      phone: "Phone / WhatsApp",
      language: "Session language",
      reason: "Reason for consultation",
      birthDate: "Date of birth",
      placeholderFullName: "Enter full name",
      placeholderEmail: "name@example.com",
      placeholderPhone: "Enter phone or WhatsApp",
      placeholderReason:
        "Briefly describe what you want to work on in the session",
      languagePlaceholder: "Choose language",
      languageOptions: {
        he: "Hebrew",
        ru: "Russian"
      },
      policyTitle: "Cancellation Policy",
      policyText:
        "Free cancellation is available up to 24 hours before the session. Late cancellations or no-shows receive a 50% refund.",
      policyCheckbox:
        "I have read and accept the cancellation policy and the online booking terms.",
      adultRule:
        "Booking is available only for clients aged 18 or older.",
      submit: "Continue to Booking",
      paymentHint:
        "Once the real accounts are connected, online payment, live availability, and automatic emails will appear here.",
      connectorTag: "Step 3",
      connectorTitle: "Booking Platform",
      connectorLead:
        "Once the form is completed, the embedded booking system for the selected service will open below.",
      connectorPendingTitle: "Integration still in staging mode",
      connectorPendingBody:
        "This booking area is already connected to the website configuration, but the real provider accounts have not been added yet. As soon as the live URLs and credentials are inserted, available slots, payments, and confirmations will appear here.",
      connectorLiveSingle:
        "Choose an available time, complete payment, and receive an automatic confirmation email.",
      connectorLivePackage:
        "Pay for the package online. After purchase, the remaining sessions will be coordinated separately with the practitioner.",
      openExternal: "Open external booking page",
      summaryTitle: "Booking Rules",
      summaryRules: [
        "Online only",
        "Hebrew and Russian only",
        "18+ only",
        "Minimum 24 hours notice",
        "No buffer between sessions",
        "Direct booking with no manual approval"
      ],
      automationTitle: "What the client receives",
      automations: [
        "Booking confirmation email",
        "24-hour reminder email",
        "1-hour reminder email",
        "Automatic video-call link"
      ],
      statusTitle: "Integration Status",
      statusReady:
        "This page is already prepared for SimplyBook as the primary integration and Calendly as a fallback option.",
      statusPending:
        "Real provider accounts and payment credentials are still missing. Once they are added, the flow can go live without rebuilding the page.",
      backToSite: "Back to Website",
      contactFallback:
        "If you want to keep the current contact path for now, you can still return to the main site and reach out directly.",
      validation: {
        selectService: "Please choose a service first.",
        fullName: "Please enter your full name.",
        email: "Please enter a valid email address.",
        phone: "Please enter your phone or WhatsApp.",
        language: "Please choose the session language.",
        reason: "Please describe the reason for your consultation.",
        birthDate: "Please enter your date of birth.",
        age: "Online booking is available only for adults aged 18+.",
        policy: "You must accept the cancellation policy."
      },
      summaryBoxTitle: "Your intake details",
      summaryService: "Service",
      summaryLanguage: "Language",
      summaryEmail: "Email",
      summaryPhone: "Phone",
      summaryBirthDate: "Date of birth",
      summaryReason: "Reason"
    }
  };

  const titles = {
    ru: "Дмитрий Казаков — Онлайн-запись",
    he: "דמיטרי קזקוב — הזמנה אונליין",
    en: "Dmitriy Kazakov — Online Booking"
  };
  let state = {
    lang: localStorage.getItem(storageKey) || document.documentElement.lang || defaultLang,
    selectedService: "single"
  };

  const refs = {};

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function splitFullName(fullName) {
    const trimmed = fullName.trim();
    const parts = trimmed.split(/\s+/);
    return {
      firstName: parts[0] || trimmed,
      lastName: parts.slice(1).join(" ")
    };
  }

  function maxBirthDate() {
    const today = new Date();
    today.setFullYear(today.getFullYear() - (config.constraints?.minAge || 18));
    return today.toISOString().slice(0, 10);
  }

  function calculateAge(dateString) {
    const dob = new Date(dateString);
    if (Number.isNaN(dob.getTime())) return 0;
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age -= 1;
    }
    return age;
  }

  function serviceFromQuery() {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    return service === "package" ? "package" : "single";
  }

  function getProviderConfig() {
    const providerName = config.activeProvider;
    return providerName ? config.providers?.[providerName] : null;
  }

  function getLanguageLabel(code) {
    const t = ui[state.lang];
    return t.languageOptions[code] || code;
  }

  function writeLeadToStorage(data) {
    sessionStorage.setItem(leadStorageKey, JSON.stringify(data));
  }

  function readLeadFromStorage() {
    try {
      const raw = sessionStorage.getItem(leadStorageKey);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function applyLang(lang) {
    const t = ui[lang] || ui[defaultLang];
    state.lang = ui[lang] ? lang : defaultLang;
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "he" ? "rtl" : "ltr";
    document.title = titles[state.lang] || titles[defaultLang];

    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.langCode === state.lang);
    });

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (t[key]) node.textContent = t[key];
    });

    document.querySelectorAll("[data-placeholder-key]").forEach((node) => {
      const key = node.dataset.placeholderKey;
      if (t[key]) node.placeholder = t[key];
    });

    refs.languageSelect.innerHTML = `
      <option value="">${escapeHtml(t.languagePlaceholder)}</option>
      <option value="he">${escapeHtml(t.languageOptions.he)}</option>
      <option value="ru">${escapeHtml(t.languageOptions.ru)}</option>
    `;

    const storedLead = readLeadFromStorage();
    if (storedLead?.language) {
      refs.languageSelect.value = storedLead.language;
    }

    refs.policyText.textContent = t.policyText;
    refs.policyCheckboxText.textContent = t.policyCheckbox;
    refs.statusBody.textContent = config.bookingEnabled ? t.statusReady : t.statusPending;
    refs.contactFallback.textContent = t.contactFallback;

    renderServiceCards();
    renderStaticLists();
    renderSummaryBox();
  }

  function renderServiceCards() {
    const t = ui[state.lang];
    refs.serviceCards.innerHTML = ["single", "package"]
      .map((serviceKey) => {
        const service = t.services[serviceKey];
        const serviceConfig = config.services[serviceKey];
        const isSelected = state.selectedService === serviceKey;
        const badge = isSelected
          ? `<span class="selected-pill">${escapeHtml(t.selectedBadge)}</span>`
          : "";

        return `
          <article class="service-card ${isSelected ? "active" : ""}" data-service-card="${serviceKey}">
            <div class="service-card-head">
              <div>
                <p class="service-price">${escapeHtml(serviceConfig.priceLabel)}</p>
                <h3>${escapeHtml(service.name)}</h3>
                <p class="service-note">${escapeHtml(service.priceNote)}</p>
              </div>
              ${badge}
            </div>
            <p class="service-description">${escapeHtml(service.description)}</p>
            <ul class="service-list">
              ${service.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
            <button type="button" class="btn-secondary service-select" data-service-select="${serviceKey}">
              ${escapeHtml(service.cta)}
            </button>
          </article>
        `;
      })
      .join("");
  }

  function renderStaticLists() {
    const t = ui[state.lang];
    refs.rulesList.innerHTML = t.summaryRules.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    refs.automationList.innerHTML = t.automations.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function setSelectedService(serviceKey) {
    state.selectedService = serviceKey === "package" ? "package" : "single";
    renderServiceCards();
    const existing = readLeadFromStorage();
    if (existing) {
      existing.service = state.selectedService;
      writeLeadToStorage(existing);
      renderSummaryBox(existing);
      if (!refs.connectorSection.hidden) {
        renderConnector(existing);
      }
    } else {
      renderSummaryBox();
    }
  }

  function collectFormData() {
    return {
      service: state.selectedService,
      fullName: refs.fullName.value.trim(),
      email: refs.email.value.trim(),
      phone: refs.phone.value.trim(),
      language: refs.languageSelect.value,
      reason: refs.reason.value.trim(),
      birthDate: refs.birthDate.value,
      policyAccepted: refs.policyCheckbox.checked
    };
  }

  function validate(data) {
    const t = ui[state.lang].validation;
    if (!data.service) return t.selectService;
    if (!data.fullName) return t.fullName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return t.email;
    if (!data.phone) return t.phone;
    if (!data.language) return t.language;
    if (!data.reason) return t.reason;
    if (!data.birthDate) return t.birthDate;
    if (calculateAge(data.birthDate) < (config.constraints?.minAge || 18)) return t.age;
    if (config.policy?.checkboxRequired && !data.policyAccepted) return t.policy;
    return "";
  }

  function showError(message) {
    refs.formError.hidden = !message;
    refs.formError.textContent = message;
  }

  function renderSummaryBox(data = readLeadFromStorage()) {
    const t = ui[state.lang];
    const serviceName = data?.service ? t.services[data.service].name : t.services[state.selectedService].name;
    const content = data
      ? `
        <div class="summary-row"><strong>${escapeHtml(t.summaryService)}:</strong><span>${escapeHtml(serviceName)}</span></div>
        <div class="summary-row"><strong>${escapeHtml(t.summaryLanguage)}:</strong><span>${escapeHtml(getLanguageLabel(data.language))}</span></div>
        <div class="summary-row"><strong>${escapeHtml(t.summaryEmail)}:</strong><span>${escapeHtml(data.email)}</span></div>
        <div class="summary-row"><strong>${escapeHtml(t.summaryPhone)}:</strong><span>${escapeHtml(data.phone)}</span></div>
        <div class="summary-row"><strong>${escapeHtml(t.summaryBirthDate)}:</strong><span>${escapeHtml(data.birthDate)}</span></div>
        <div class="summary-row full"><strong>${escapeHtml(t.summaryReason)}:</strong><span>${escapeHtml(data.reason)}</span></div>
      `
      : `
        <div class="summary-row"><strong>${escapeHtml(t.summaryService)}:</strong><span>${escapeHtml(serviceName)}</span></div>
        <div class="summary-row full"><span>${escapeHtml(ui[state.lang].flowSub)}</span></div>
      `;

    refs.summaryBox.innerHTML = `
      <h3>${escapeHtml(t.summaryBoxTitle)}</h3>
      ${content}
    `;
  }

  function connectorMessageForService(serviceKey) {
    const t = ui[state.lang];
    return serviceKey === "package" ? t.connectorLivePackage : t.connectorLiveSingle;
  }

  function renderPendingConnector() {
    const t = ui[state.lang];
    refs.connectorNotice.className = "connector-message pending";
    refs.connectorNotice.innerHTML = `
      <strong>${escapeHtml(t.connectorPendingTitle)}</strong>
      <p>${escapeHtml(t.connectorPendingBody)}</p>
    `;
    refs.bookingEmbed.innerHTML = "";
  }

  function renderExternalLink(url) {
    const t = ui[state.lang];
    refs.bookingEmbed.innerHTML = `
      <a class="btn-primary" href="${escapeHtml(url)}" target="_blank" rel="noopener">
        ${escapeHtml(t.openExternal)}
      </a>
    `;
  }

  function buildCalendlyPrefill(data) {
    const map = config.providers?.calendly?.prefillCustomAnswerMap || {};
    const nameParts = splitFullName(data.fullName);
    const customAnswers = {};

    if (map.phone) customAnswers[map.phone] = data.phone;
    if (map.language) customAnswers[map.language] = getLanguageLabel(data.language);
    if (map.reason) customAnswers[map.reason] = data.reason;
    if (map.birthDate) customAnswers[map.birthDate] = data.birthDate;

    return {
      name: data.fullName,
      firstName: nameParts.firstName,
      lastName: nameParts.lastName,
      email: data.email,
      customAnswers
    };
  }

  function loadCalendlyScript() {
    const url = config.providers?.calendly?.scriptUrl;
    if (!url) return Promise.reject(new Error("Calendly script URL missing"));
    if (window.Calendly) return Promise.resolve(window.Calendly);

    return new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-calendly-script="true"]');
      if (existing) {
        existing.addEventListener("load", () => resolve(window.Calendly));
        existing.addEventListener("error", reject);
        return;
      }

      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.dataset.calendlyScript = "true";
      script.onload = () => resolve(window.Calendly);
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  async function renderCalendly(url, data) {
    await loadCalendlyScript();
    refs.bookingEmbed.innerHTML = '<div id="calendly-inline-root" class="booking-frame booking-frame-calendly"></div>';
    const target = document.getElementById("calendly-inline-root");
    window.Calendly.initInlineWidget({
      url,
      parentElement: target,
      prefill: buildCalendlyPrefill(data)
    });
  }

  function renderSimplyBook(widgetUrl, fallbackUrl) {
    if (widgetUrl) {
      refs.bookingEmbed.innerHTML = `
        <iframe
          class="booking-frame"
          src="${escapeHtml(widgetUrl)}"
          title="Booking"
          loading="lazy"
          allow="payment *; camera *; microphone *; fullscreen *"
          referrerpolicy="strict-origin-when-cross-origin"></iframe>
      `;
      return;
    }

    if (fallbackUrl) {
      renderExternalLink(fallbackUrl);
      return;
    }

    refs.bookingEmbed.innerHTML = "";
  }

  async function renderConnector(data) {
    const providerName = config.activeProvider;
    const provider = getProviderConfig();
    const serviceKey = data.service;

    refs.connectorSection.hidden = false;
    refs.connectorNotice.className = "connector-message";
    refs.connectorNotice.innerHTML = `
      <strong>${escapeHtml(ui[state.lang].connectorTitle)}</strong>
      <p>${escapeHtml(connectorMessageForService(serviceKey))}</p>
    `;

    refs.bookingEmbed.innerHTML = "";

    if (!config.bookingEnabled || !providerName || !provider) {
      renderPendingConnector();
      return;
    }

    try {
      if (providerName === "simplybook") {
        const widgetUrl = provider.widgetUrls?.[serviceKey];
        const fallbackUrl = provider.fallbackUrls?.[serviceKey] || provider.publicBookingUrl;
        if (!widgetUrl && !fallbackUrl) {
          renderPendingConnector();
          return;
        }
        renderSimplyBook(widgetUrl, fallbackUrl);
        return;
      }

      if (providerName === "calendly") {
        const eventUrl = provider.eventUrls?.[serviceKey];
        if (!eventUrl) {
          renderPendingConnector();
          return;
        }
        await renderCalendly(eventUrl, data);
        return;
      }

      renderPendingConnector();
    } catch (error) {
      renderPendingConnector();
    }
  }

  function setLang(lang) {
    localStorage.setItem(storageKey, lang);
    applyLang(lang);
  }

  function hydrateForm() {
    const lead = readLeadFromStorage();
    if (!lead) return;
    refs.fullName.value = lead.fullName || "";
    refs.email.value = lead.email || "";
    refs.phone.value = lead.phone || "";
    refs.languageSelect.value = lead.language || "";
    refs.reason.value = lead.reason || "";
    refs.birthDate.value = lead.birthDate || "";
    refs.policyCheckbox.checked = Boolean(lead.policyAccepted);
    if (lead.service) {
      state.selectedService = lead.service === "package" ? "package" : "single";
    }
  }

  function bindEvents() {
    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => setLang(button.dataset.langCode));
    });

    refs.serviceCards.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-service-select]");
      if (!trigger) return;
      setSelectedService(trigger.dataset.serviceSelect);
    });

    refs.intakeForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = collectFormData();
      const message = validate(data);
      showError(message);
      if (message) return;

      writeLeadToStorage(data);
      renderSummaryBox(data);
      await renderConnector(data);
      refs.connectorSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function cacheRefs() {
    refs.languageSelect = document.getElementById("sessionLanguage");
    refs.policyText = document.getElementById("policyText");
    refs.policyCheckboxText = document.getElementById("policyCheckboxText");
    refs.statusBody = document.getElementById("statusBody");
    refs.contactFallback = document.getElementById("contactFallback");
    refs.serviceCards = document.getElementById("serviceCards");
    refs.intakeForm = document.getElementById("intakeForm");
    refs.fullName = document.getElementById("fullName");
    refs.email = document.getElementById("email");
    refs.phone = document.getElementById("phone");
    refs.reason = document.getElementById("reason");
    refs.birthDate = document.getElementById("birthDate");
    refs.policyCheckbox = document.getElementById("policyAccepted");
    refs.formError = document.getElementById("formError");
    refs.connectorSection = document.getElementById("connectorSection");
    refs.connectorNotice = document.getElementById("connectorNotice");
    refs.bookingEmbed = document.getElementById("bookingEmbed");
    refs.rulesList = document.getElementById("rulesList");
    refs.automationList = document.getElementById("automationList");
    refs.summaryBox = document.getElementById("summaryBox");
  }

  function init() {
    cacheRefs();
    state.selectedService = serviceFromQuery();
    refs.birthDate.max = maxBirthDate();
    hydrateForm();
    bindEvents();
    applyLang(state.lang);
    renderSummaryBox();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
