window.FORM_CONFIG = {
  "source": "passportgenes",
  "repo": "passportgenes_form",
  "product": "passportgenes",
  "sourceForm": "passportgenes.html",
  "context": "cyber passport & identity bio card archive",
  "motif": "◈",
  "media": "5 foto (1 passport photo + 4 mini gallery) + 5 lagu mp3",
  "theme": "passport",
  "palette": [
    "#12131C",
    "#6E56CF",
    "#3B82F6",
    "#10B981",
    "#F8FAFC",
    "#F43F5E"
  ],
  "price": 20000,
  "sections": [
    {
      "id": "02",
      "title": "hero pass & header",
      "fields": [
        {
          "key": "pass_holder_name",
          "label": "nama pemilik pass (holder)",
          "placeholder": "default: cattia abilene",
          "long": false,
          "required": false
        },
        {
          "key": "pass_tag_username",
          "label": "username / mini caption",
          "placeholder": "default: cattia's passport / @ianjuna",
          "long": false,
          "required": false
        },
        {
          "key": "pass_hero_desc",
          "label": "deskripsi bio pengantar hero",
          "placeholder": "default: a warm little identity page for quick intros, business contact energy, favorite songs, and soft first impressions.",
          "long": true,
          "required": false
        },
        {
          "key": "pass_id_gate",
          "label": "nomor gate & id ticket",
          "placeholder": "default: gate cat / id-0427",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "03",
      "title": "passport identity card (10 data fields)",
      "fields": [
        {
          "key": "pass_no",
          "label": "01 · passport no.",
          "placeholder": "default: ID-0427",
          "long": false,
          "required": false
        },
        {
          "key": "pass_name",
          "label": "02 · full name",
          "placeholder": "default: Cattia Abilene",
          "long": false,
          "required": false
        },
        {
          "key": "pass_username",
          "label": "03 · username",
          "placeholder": "default: @ianjuna",
          "long": false,
          "required": false
        },
        {
          "key": "pass_nickname",
          "label": "04 · nickname",
          "placeholder": "default: Cat / Catti / Cata",
          "long": false,
          "required": false
        },
        {
          "key": "pass_pronouns",
          "label": "05 · pronouns",
          "placeholder": "default: She / Her",
          "long": false,
          "required": false
        },
        {
          "key": "pass_gender",
          "label": "06 · gender",
          "placeholder": "default: Female",
          "long": false,
          "required": false
        },
        {
          "key": "pass_birth_year",
          "label": "07 · birth year",
          "placeholder": "default: 2009",
          "long": false,
          "required": false
        },
        {
          "key": "pass_zodiac",
          "label": "08 · zodiac",
          "placeholder": "default: Libra",
          "long": false,
          "required": false
        },
        {
          "key": "pass_mbti",
          "label": "09 · mbti",
          "placeholder": "default: ENTP",
          "long": false,
          "required": false
        },
        {
          "key": "pass_language",
          "label": "10 · main language",
          "placeholder": "default: ID / EN",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "04",
      "title": "account category & things i like",
      "fields": [
        {
          "key": "account_type_active",
          "label": "kategori akun aktif (Personal / Business / Fan / Rant / Role)",
          "placeholder": "default: Business",
          "long": false,
          "required": false
        },
        {
          "key": "likes_text",
          "label": "things that feel nice / likes (paragraf lengkap)",
          "placeholder": "default: i like slow mornings with soft light, curated playlists that match the mood, small cafes with corner seats, film photos that feel warm, neat notes, rainy ambience, kind people with safe energy, clear business details with warm replies, and keeping little souvenirs from good days.",
          "long": true,
          "required": false
        }
      ]
    },
    {
      "id": "05",
      "title": "favorite songs carousel (5 tracks)",
      "fields": [
        {
          "key": "song_1",
          "label": "track 01 · judul & artis",
          "placeholder": "default: about you — the 1975",
          "long": false,
          "required": false
        },
        {
          "key": "song_2",
          "label": "track 02 · judul & artis",
          "placeholder": "default: glue song — beabadoobee",
          "long": false,
          "required": false
        },
        {
          "key": "song_3",
          "label": "track 03 · judul & artis",
          "placeholder": "default: ceilings — lizzy mcalpine",
          "long": false,
          "required": false
        },
        {
          "key": "song_4",
          "label": "track 04 · judul & artis",
          "placeholder": "default: best part — daniel caesar",
          "long": false,
          "required": false
        },
        {
          "key": "song_5",
          "label": "track 05 · judul & artis",
          "placeholder": "default: take a chance with me — niki",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "06",
      "title": "mini gallery (4 small moments & detail notes)",
      "fields": [
        {
          "key": "gallery_1",
          "label": "polaroid 1 · judul & isi popup note",
          "placeholder": "default: cloudy cafe — a quiet table, a playlist, and a half-finished drink.",
          "long": true,
          "required": false
        },
        {
          "key": "gallery_2",
          "label": "polaroid 2 · judul & isi popup note",
          "placeholder": "default: ddujjonku my lobe — a saved little moment for ddujjonku my lobe.",
          "long": true,
          "required": false
        },
        {
          "key": "gallery_3",
          "label": "polaroid 3 · judul & isi popup note",
          "placeholder": "default: soft sky — the kind of sky that makes everything feel less heavy.",
          "long": true,
          "required": false
        },
        {
          "key": "gallery_4",
          "label": "polaroid 4 · judul & isi popup note",
          "placeholder": "default: 7 humans and 1 angel (me) — a tiny saved note for 7 humans and 1 angel (me).",
          "long": true,
          "required": false
        }
      ]
    },
    {
      "id": "07",
      "title": "final note & contact button",
      "fields": [
        {
          "key": "final_thank_you",
          "label": "pesan penutup",
          "placeholder": "default: thank you for visiting this little page.",
          "long": false,
          "required": false
        },
        {
          "key": "final_button_text",
          "label": "label tombol kontak telegram",
          "placeholder": "default: peek at me?",
          "long": false,
          "required": false
        },
        {
          "key": "telegram_contact",
          "label": "link telegram tujuan kontak",
          "placeholder": "default: https://telegram.me/ianjuna",
          "long": false,
          "required": false
        }
      ]
    }
  ]
};
