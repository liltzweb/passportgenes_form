window.FORM_CONFIG = {
  product: {
    code: 'passportgenes',
    name: 'passportgenes',
    badge: 'interactive digital passport identity book',
    price: 20000,
    priceFormatted: 'Rp 20.000',
    tagline: 'passportgenes — interactive digital passport identity book with official identity record table, category badges, likes note modal, 5-track mixtape player, 4-photo polaroid gallery, and travel stamps.'
  },
  context: {
    formCode: 'PASS-ORD',
    edition: '2026 Passport Edition',
    description: 'Passportgenes is a vintage-modern digital passport website featuring an official passport photo & hero ticket, comprehensive identity record grid, interactive account badges, detailed likes note modal, 5-song interactive audio mixtape carousel, 4 polaroid moments with popup detail stories, and a closing visa stamp seal.'
  },
  motif: '✈️',
  mediaDescription: '5 Foto (1 Foto Paspor + 4 Polaroid Gallery) + 5 File Musik MP3 Mixtape',
  theme: {
    name: 'passportgenes',
    palette: ['#141A1F', '#242F38', '#5E8B7E', '#EAE7DC', '#D8C3A5', '#8E8D8A']
  },
  sections: [
    {
      id: 'passport_hero',
      number: '02',
      title: 'Passport Cover & Hero Header',
      description: 'The front passport header, holder name, username tag, and bio intro.',
      fields: [
        {
          id: 'passport_title',
          label: 'Passport Main Heading',
          type: 'text',
          placeholder: 'e.g. cattia's passport',
          defaultValue: 'cattia's passport',
          required: true,
          helpText: 'Primary heading at the top of the passport page.'
        },
        {
          id: 'passport_username_tag',
          label: 'Passport Tag / Username Line',
          type: 'text',
          placeholder: 'e.g. cattia's passport / @ianjuna',
          defaultValue: 'cattia's passport / @ianjuna',
          required: true,
          helpText: 'Subtitle tag line beneath the main heading.'
        },
        {
          id: 'passport_bio',
          label: 'Passport Bio Intro',
          type: 'textarea',
          placeholder: 'e.g. a warm little identity page for quick intros, business contact energy, favorite songs, and soft first impressions.',
          defaultValue: 'a warm little identity page for quick intros, business contact energy, favorite songs, and soft first impressions.',
          required: true,
          helpText: 'Short introduction paragraph on the cover card.'
        },
        {
          id: 'holder_name',
          label: 'Passport Holder Full Name',
          type: 'text',
          placeholder: 'e.g. cattia abilene',
          defaultValue: 'cattia abilene',
          required: true,
          helpText: 'Name displayed beneath the passport photo.'
        },
        {
          id: 'passport_country_stamp',
          label: 'Country / Issuer Header Stamp',
          type: 'text',
          placeholder: 'e.g. republic of tiny circles / id-0427',
          defaultValue: 'republic of tiny circles / id-0427',
          required: true,
          helpText: 'Top stamp text in identity header.'
        }
      ]
    },
    {
      id: 'identity_record',
      number: '03',
      title: 'Official Identity Record (Grid Data)',
      description: 'The formal passport metadata record table.',
      fields: [
        {
          id: 'rec_passport_no',
          label: 'Passport Number',
          type: 'text',
          placeholder: 'e.g. 0427-CA-2026',
          defaultValue: '0427-CA-2026',
          required: true
        },
        {
          id: 'rec_name',
          label: 'Full Name',
          type: 'text',
          placeholder: 'e.g. cattia abilene',
          defaultValue: 'cattia abilene',
          required: true
        },
        {
          id: 'rec_username',
          label: 'Primary Username',
          type: 'text',
          placeholder: 'e.g. @ianjuna',
          defaultValue: '@ianjuna',
          required: true
        },
        {
          id: 'rec_nickname',
          label: 'Nickname(s)',
          type: 'text',
          placeholder: 'e.g. cattia / cat',
          defaultValue: 'cattia / cat',
          required: true
        },
        {
          id: 'rec_pronouns',
          label: 'Pronouns',
          type: 'text',
          placeholder: 'e.g. she/her',
          defaultValue: 'she/her',
          required: true
        },
        {
          id: 'rec_gender',
          label: 'Gender',
          type: 'text',
          placeholder: 'e.g. female',
          defaultValue: 'female',
          required: true
        },
        {
          id: 'rec_age',
          label: 'Birth Year / Age',
          type: 'text',
          placeholder: 'e.g. 2003 / 23',
          defaultValue: '2003 / 23',
          required: true
        },
        {
          id: 'rec_zodiac',
          label: 'Zodiac Sign',
          type: 'text',
          placeholder: 'e.g. taurus',
          defaultValue: 'taurus',
          required: true
        },
        {
          id: 'rec_mbti',
          label: 'MBTI Type',
          type: 'text',
          placeholder: 'e.g. infp',
          defaultValue: 'infp',
          required: true
        },
        {
          id: 'rec_language',
          label: 'Main Language(s)',
          type: 'text',
          placeholder: 'e.g. indonesian / english',
          defaultValue: 'indonesian / english',
          required: true
        }
      ]
    },
    {
      id: 'account_badges',
      number: '04',
      title: 'Account Category Badges',
      description: 'Active persona or category badges (e.g. Personal, Business, Fan, Rant, Role).',
      fields: [
        {
          id: 'badge_active_type',
          label: 'Active Category Highlight',
          type: 'text',
          placeholder: 'e.g. Business (or Personal / Fan / Role)',
          defaultValue: 'Business',
          required: true,
          helpText: 'Which category badge is currently highlighted as active.'
        },
        {
          id: 'badge_list_all',
          label: 'All Category Badges List',
          type: 'text',
          placeholder: 'e.g. Personal, Business, Fan, Rant, Role',
          defaultValue: 'Personal, Business, Fan, Rant, Role',
          required: true,
          helpText: 'Comma separated list of all category chips.'
        }
      ]
    },
    {
      id: 'likes_section',
      number: '05',
      title: 'Likes & Aesthetic Preferences',
      description: 'Interactive modal note describing personal tastes, vibes, and favorite things.',
      fields: [
        {
          id: 'likes_subtitle',
          label: 'Section Eyebrow Subtitle',
          type: 'text',
          placeholder: 'e.g. things that feel nice',
          defaultValue: 'things that feel nice',
          required: true
        },
        {
          id: 'likes_heading',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. likes',
          defaultValue: 'likes',
          required: true
        },
        {
          id: 'likes_full_story',
          label: 'Full Likes Story & Preferences Paragraph',
          type: 'textarea',
          placeholder: 'e.g. i like slow mornings with soft light, curated playlists that match the mood, small cafes with corner seats, film photos that feel warm...',
          defaultValue: 'i like slow mornings with soft light, curated playlists that match the mood, small cafes with corner seats, film photos that feel warm, neat notes, rainy ambience, kind people with safe energy, clear business details with warm replies, and keeping little souvenirs from good days.',
          required: true,
          helpText: 'Detailed narrative of aesthetic preferences revealed in modal when clicked.'
        }
      ]
    },
    {
      id: 'mixtape_songs',
      number: '06',
      title: 'Favorite Songs Mixtape (5 Audio Tracks)',
      description: '5 interactive song cards in a swipeable carousel with audio previews.',
      fields: [
        {
          id: 'mixtape_subtitle',
          label: 'Mixtape Eyebrow Subtitle',
          type: 'text',
          placeholder: 'e.g. swipe the mixtape',
          defaultValue: 'swipe the mixtape',
          required: true
        },
        {
          id: 'mixtape_heading',
          label: 'Mixtape Heading',
          type: 'text',
          placeholder: 'e.g. favorite songs',
          defaultValue: 'favorite songs',
          required: true
        },
        {
          id: 'track1_title',
          label: 'Track 01 Song Title',
          type: 'text',
          placeholder: 'e.g. about you',
          defaultValue: 'about you',
          required: true
        },
        {
          id: 'track1_artist',
          label: 'Track 01 Artist',
          type: 'text',
          placeholder: 'e.g. the 1975',
          defaultValue: 'the 1975',
          required: true
        },
        {
          id: 'track2_title',
          label: 'Track 02 Song Title',
          type: 'text',
          placeholder: 'e.g. glue song',
          defaultValue: 'glue song',
          required: true
        },
        {
          id: 'track2_artist',
          label: 'Track 02 Artist',
          type: 'text',
          placeholder: 'e.g. beabadoobee',
          defaultValue: 'beabadoobee',
          required: true
        },
        {
          id: 'track3_title',
          label: 'Track 03 Song Title',
          type: 'text',
          placeholder: 'e.g. ceilings',
          defaultValue: 'ceilings',
          required: true
        },
        {
          id: 'track3_artist',
          label: 'Track 03 Artist',
          type: 'text',
          placeholder: 'e.g. lizzy mcalpine',
          defaultValue: 'lizzy mcalpine',
          required: true
        },
        {
          id: 'track4_title',
          label: 'Track 04 Song Title',
          type: 'text',
          placeholder: 'e.g. best part',
          defaultValue: 'best part',
          required: true
        },
        {
          id: 'track4_artist',
          label: 'Track 04 Artist',
          type: 'text',
          placeholder: 'e.g. daniel caesar',
          defaultValue: 'daniel caesar',
          required: true
        },
        {
          id: 'track5_title',
          label: 'Track 05 Song Title',
          type: 'text',
          placeholder: 'e.g. golden hour',
          defaultValue: 'golden hour',
          required: true
        },
        {
          id: 'track5_artist',
          label: 'Track 05 Artist',
          type: 'text',
          placeholder: 'e.g. jvke',
          defaultValue: 'jvke',
          required: true
        }
      ]
    },
    {
      id: 'small_moments_gallery',
      number: '07',
      title: 'Small Moments Polaroid Gallery (4 Photos)',
      description: '4 polaroid cards with interactive modal view and memory descriptions.',
      fields: [
        {
          id: 'gallery_subtitle',
          label: 'Gallery Eyebrow Subtitle',
          type: 'text',
          placeholder: 'e.g. mini gallery',
          defaultValue: 'mini gallery',
          required: true
        },
        {
          id: 'gallery_heading',
          label: 'Gallery Heading',
          type: 'text',
          placeholder: 'e.g. small moments',
          defaultValue: 'small moments',
          required: true
        },
        {
          id: 'photo1_title',
          label: 'Photo 01 Title (Featured Polaroid)',
          type: 'text',
          placeholder: 'e.g. cloudy cafe',
          defaultValue: 'cloudy cafe',
          required: true
        },
        {
          id: 'photo1_detail',
          label: 'Photo 01 Memory Detail Story',
          type: 'textarea',
          placeholder: 'e.g. a quiet table, a playlist, and a half-finished drink.',
          defaultValue: 'a quiet table, a playlist, and a half-finished drink.',
          required: true
        },
        {
          id: 'photo2_title',
          label: 'Photo 02 Title',
          type: 'text',
          placeholder: 'e.g. ddujjonku my lobe',
          defaultValue: 'ddujjonku my lobe',
          required: true
        },
        {
          id: 'photo2_detail',
          label: 'Photo 02 Memory Detail Story',
          type: 'textarea',
          placeholder: 'e.g. a saved little moment for ddujjonku my lobe.',
          defaultValue: 'a saved little moment for ddujjonku my lobe.',
          required: true
        },
        {
          id: 'photo3_title',
          label: 'Photo 03 Title',
          type: 'text',
          placeholder: 'e.g. soft sky',
          defaultValue: 'soft sky',
          required: true
        },
        {
          id: 'photo3_detail',
          label: 'Photo 03 Memory Detail Story',
          type: 'textarea',
          placeholder: 'e.g. the kind of sky that makes everything feel less heavy.',
          defaultValue: 'the kind of sky that makes everything feel less heavy.',
          required: true
        },
        {
          id: 'photo4_title',
          label: 'Photo 04 Title (Mini Polaroid)',
          type: 'text',
          placeholder: 'e.g. 7 humans and 1 angel (me)',
          defaultValue: '7 humans and 1 angel (me)',
          required: true
        },
        {
          id: 'photo4_detail',
          label: 'Photo 04 Memory Detail Story',
          type: 'textarea',
          placeholder: 'e.g. a tiny saved note for 7 humans and 1 angel (me).',
          defaultValue: 'a tiny saved note for 7 humans and 1 angel (me).',
          required: true
        }
      ]
    },
    {
      id: 'final_passport_outro',
      number: '08',
      title: 'Final Note & Passport Stamp Seal',
      description: 'Closing message and bottom ticket edge seal.',
      fields: [
        {
          id: 'closing_note',
          label: 'Closing Thank You Note',
          type: 'textarea',
          placeholder: 'e.g. thank you for visiting this little page.',
          defaultValue: 'thank you for visiting this little page.',
          required: true
        },
        {
          id: 'bottom_seal_tag',
          label: 'Bottom Seal Stamp / Sign-off',
          type: 'text',
          placeholder: 'e.g. stamped with warmth • cattia abilene',
          defaultValue: 'stamped with warmth • cattia abilene',
          required: true
        }
      ]
    }
  ]
};
