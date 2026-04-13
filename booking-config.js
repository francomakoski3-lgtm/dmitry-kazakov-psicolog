window.BOOKING_CONFIG = {
  siteName: "Dmitriy Kazakov",
  recommendedProvider: "simplybook",
  activeProvider: "simplybook",
  bookingEnabled: true,
  updatedAt: "2026-04-14",
  constraints: {
    onlineOnly: true,
    minAge: 18,
    minNoticeHours: 24,
    bufferMinutes: 0,
    autoApproval: true,
    languages: ["he", "ru"]
  },
  policy: {
    freeCancellationHours: 24,
    lateCancellationRefundPercent: 50,
    checkboxRequired: true
  },
  services: {
    single: {
      slug: "single",
      priceLabel: "₪450",
      durationLabel: "45-55 minutes",
      bookingMode: "direct"
    },
    package: {
      slug: "package",
      priceLabel: "₪3,500",
      durationLabel: "3-session package",
      bookingMode: "package-followup"
    }
  },
  providers: {
    simplybook: {
      widgetMode: "iframe",
      publicBookingUrl: "https://httpsdimatherapyonlinecom.simplybook.it",
      widgetUrls: {
        single: "https://httpsdimatherapyonlinecom.simplybook.it/v2#book/service/2/",
        package: "https://httpsdimatherapyonlinecom.simplybook.it"
      },
      fallbackUrls: {
        single: "https://httpsdimatherapyonlinecom.simplybook.it",
        package: "https://httpsdimatherapyonlinecom.simplybook.it"
      }
    },
    calendly: {
      scriptUrl: "https://assets.calendly.com/assets/external/widget.js",
      eventUrls: {
        single: "",
        package: ""
      },
      prefillCustomAnswerMap: {
        phone: "a1",
        language: "a2",
        reason: "a3",
        birthDate: "a4"
      }
    }
  }
};
