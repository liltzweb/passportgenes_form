window.FORM_CONFIG = {
  "source": "passportgenes",
  "repo": "passportgenes_form",
  "product": "passportgenes",
  "sourceForm": "passportgenes.html",
  "context": "flight boarding pass & vintage passport aesthetic interactive journey",
  "motif": "✈️",
  "media": "foto paspor / profil + foto destinasi/perjalanan",
  "theme": "passportgenes",
  "price": 20000,
  "palette": [
    "#0B2B26",
    "#163E36",
    "#215147",
    "#8DAA9D",
    "#F4F1EA",
    "#D8C3A5"
  ],
  "sections": [
    {
      "id": "02",
      "title": "passport cover & passenger profile",
      "fields": [
        {
          "key": "passport_title",
          "label": "passport cover title",
          "placeholder": "contoh: cattia's passport",
          "long": false,
          "required": true
        },
        {
          "key": "passport_number",
          "label": "passport / flight document no",
          "placeholder": "contoh: CT-2026-LOVE",
          "long": false,
          "required": true
        },
        {
          "key": "passenger_name",
          "label": "passenger full name",
          "placeholder": "contoh: Cattania Aurelia",
          "long": false,
          "required": true
        },
        {
          "key": "nationality",
          "label": "nationality / origin",
          "placeholder": "contoh: Wonderland / Indonesia",
          "long": false,
          "required": true
        },
        {
          "key": "date_of_issue",
          "label": "date of issue / departure date",
          "placeholder": "contoh: 14 Feb 2026",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "03",
      "title": "flight boarding pass details",
      "fields": [
        {
          "key": "flight_number",
          "label": "flight code / number",
          "placeholder": "contoh: LOVE-777",
          "long": false,
          "required": true
        },
        {
          "key": "origin_code",
          "label": "departure airport (from)",
          "placeholder": "contoh: CGK (Jakarta)",
          "long": false,
          "required": true
        },
        {
          "key": "destination_code",
          "label": "arrival destination (to)",
          "placeholder": "contoh: YOU (In Your Arms)",
          "long": false,
          "required": true
        },
        {
          "key": "boarding_time",
          "label": "boarding time & gate",
          "placeholder": "contoh: Gate 07 · 08:30 PM",
          "long": false,
          "required": true
        },
        {
          "key": "seat_class",
          "label": "seat number & class",
          "placeholder": "contoh: 01A · First Class Love",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "04",
      "title": "stamps & journey memories",
      "fields": [
        {
          "key": "stamp_1",
          "label": "destination stamp 1 (title & note)",
          "placeholder": "contoh: First Date in Bandung (2024)",
          "long": false,
          "required": true
        },
        {
          "key": "stamp_2",
          "label": "destination stamp 2 (title & note)",
          "placeholder": "contoh: Beach Sunset Memories (2025)",
          "long": false,
          "required": true
        },
        {
          "key": "stamp_3",
          "label": "destination stamp 3 (title & note)",
          "placeholder": "contoh: Future Together (Forever)",
          "long": false,
          "required": true
        },
        {
          "key": "captain_log",
          "label": "captain's love message / letter",
          "placeholder": "Surat cinta dari kapten penerbangan untuk penumpang tercinta...",
          "long": true,
          "required": true
        }
      ]
    }
  ]
};
