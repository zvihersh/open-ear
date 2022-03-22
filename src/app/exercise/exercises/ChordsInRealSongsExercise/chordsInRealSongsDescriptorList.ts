import { NoteType } from '../../utility/music/notes/NoteType';
import { RomanNumeralChord } from '../utility/BaseRomanAnalysisChordProgressionExercise';

export interface ProgressionInSongFromYouTubeDescriptor {
  key: NoteType,
  mode: 'MAJOR' | 'MINOR', // will determinate the cadence to play
  videoId: string;
  name?: string;
  artist?: string;
  chords: {
    seconds: number,
    chord: RomanNumeralChord,
  }[];
  endSeconds: number,
}

export const chordsInRealSongsDescriptorList: ProgressionInSongFromYouTubeDescriptor[] = [
  {
    key: 'D',
    mode: 'MAJOR',
    videoId: 'Bg59q4puhmg',
    chords: [
      {
        seconds: 36,
        chord: 'I',
      },
      {
        seconds: 39,
        chord: 'V',
      },
      {
        seconds: 42,
        chord: 'vi',
      },
      {
        seconds: 45,
        chord: 'IV',
      },
    ],
    endSeconds: 48,
  },
  {
    key: 'G',
    mode: 'MAJOR',
    videoId: '2AJ4i4S_fP8',
    name: `It's your love`,
    artist: 'Tim McGraw',
    chords: [
      {
        seconds: 14,
        chord: 'I',
      },
      {
        seconds: 17,
        chord: 'V',
      },
      {
        seconds: 20,
        chord: 'vi',
      },
      {
        seconds: 24,
        chord: 'IV',
      },
    ],
    endSeconds: 27,
  },
  {
    'key': 'G#',
    'mode': 'MINOR',
    'videoId': '1cCBqY2B7lI',
    'name': 'Confusion and Frustration in Modern Times',
    'artist': 'Sum 41',
    'chords': [
      {
        'chord': 'i',
        'seconds': 0
      },
      {
        'chord': '♭VI',
        'seconds': 2.07
      },
      {
        'chord': '♭III',
        'seconds': 4.14
      },
      {
        'chord': '♭VII',
        'seconds': 6.21
      },
      {
        'chord': 'i',
        'seconds': 8.28
      },
      {
        'chord': '♭VI',
        'seconds': 10.34
      },
      {
        'chord': '♭III',
        'seconds': 12.41
      },
      {
        'chord': '♭VII',
        'seconds': 14.48
      },
      {
        'chord': '♭VI',
        'seconds': 16.55
      }
    ],
    'endSeconds': 18.62
  },
  {
    'key': 'B',
    'mode': 'MAJOR',
    'videoId': '1cCBqY2B7lI',
    'name': 'Confusion and Frustration in Modern Times',
    'artist': 'Sum 41',
    'chords': [
      {
        'chord': 'I',
        'seconds': 20.92
      },
      {
        'chord': 'IV',
        'seconds': 21.75
      },
      {
        'chord': 'vi',
        'seconds': 23.14
      },
      {
        'chord': 'IV',
        'seconds': 23.98
      },
      {
        'chord': 'I',
        'seconds': 25.36
      },
      {
        'chord': 'IV',
        'seconds': 26.2
      },
      {
        'chord': 'V',
        'seconds': 27.59
      },
    ],
    'endSeconds': 29.81
  },
  {
    "key": "B",
    "mode": "MAJOR",
    "videoId": "1cCBqY2B7lI",
    "name": "Confusion and Frustration in Modern Times",
    "artist": "Sum 41",
    "chords": [
      {
        "chord": "I",
        "seconds": 29.81
      },
      {
        "chord": "vi",
        "seconds": 32.03
      },
      {
        "chord": "IV",
        "seconds": 33.14
      },
      {
        "chord": "I",
        "seconds": 34.25
      },
      {
        "chord": "vi",
        "seconds": 36.48
      },
      {
        "chord": "IV",
        "seconds": 37.59
      }
    ],
    "endSeconds": 39.28
  },
  {
    "key": "B",
    "mode": "MAJOR",
    "videoId": "1cCBqY2B7lI",
    "name": "Confusion and Frustration in Modern Times",
    "artist": "Sum 41",
    "chords": [
      {
        "chord": "vi",
        "seconds": 37.34
      },
      {
        "chord": "IV",
        "seconds": 38.44
      },
      {
        "chord": "I",
        "seconds": 39.54
      },
      {
        "chord": "V",
        "seconds": 40.64
      },
    ],
    "endSeconds": 42.24
  },
  {
    "key": "B",
    "mode": "MAJOR",
    "videoId": "1cCBqY2B7lI",
    "name": "Confusion and Frustration in Modern Times",
    "artist": "Sum 41",
    "chords": [
      {
        "chord": "I",
        "seconds": 52.34
      },
      {
        "chord": "V",
        "seconds": 53.34
      },
      {
        "chord": "vi",
        "seconds": 54.2
      },
      {
        "chord": "IV",
        "seconds": 55.25
      }
    ],
    "endSeconds": 56.56
  },
  {
    "key": "B",
    "mode": "MAJOR",
    "videoId": "dZX6Q-Bj_xg",
    "name": "Passion Pit Take A Walk",
    "artist": "MilkMan",
    "chords": [
      {
        "chord": "ii",
        "seconds": 37.76
      },
      {
        "chord": "IV",
        "seconds": 39.81
      },
      {
        "chord": "vi",
        "seconds": 42.37
      },
      {
        "chord": "V",
        "seconds": 44.42
      }
    ],
    "endSeconds": 47.5
  },
  {
    "key": "B",
    "mode": "MAJOR",
    "videoId": "dZX6Q-Bj_xg",
    "name": "Passion Pit Take A Walk",
    "artist": "MilkMan",
    "chords": [
      {
        "chord": "ii",
        "seconds": 47.3
      },
      {
        "chord": "IV",
        "seconds": 49.3
      },
      {
        "chord": "vi",
        "seconds": 51.5
      },
      {
        "chord": "V",
        "seconds": 53.8
      },
    ],
    "endSeconds": 55.3
  },
  {
    "key": "B",
    "mode": "MAJOR",
    "videoId": "dZX6Q-Bj_xg",
    "name": "Passion Pit Take A Walk",
    "artist": "MilkMan",
    "chords": [
      {
        "chord": "IV",
        "seconds": 94.77
      },
      {
        "chord": "I",
        "seconds": 97.03
      },
      {
        "chord": "V",
        "seconds": 99.3
      },
      {
        "chord": "vi",
        "seconds": 101.56
      }
    ],
    "endSeconds": 104
  },
  {
    "key": "Db",
    "mode": "MAJOR",
    "videoId": "CvBfHwUxHIk",
    "name": "Umbrella",
    "artist": "Rihanna",
    "chords": [
      {
        "chord": "IV",
        "seconds": 57
      },
      {
        "chord": "I",
        "seconds": 58.8
      },
      {
        "chord": "V",
        "seconds": 61.5
      },
      {
        "chord": "vi",
        "seconds": 64.2
      },
    ],
    "endSeconds": 67.5
  },
  {
    "key": "F",
    "mode": "MINOR",
    "videoId": "hTWKbfoikeg",
    "name": "Smells Like Teen Spirit",
    "artist": "",
    "chords": [
      {
        "chord": "i",
        "seconds": 26
      },
      {
        "chord": "iv",
        "seconds": 27.03
      },
      {
        "chord": "♭III",
        "seconds": 28.07
      },
      {
        "chord": "♭VI",
        "seconds": 29.1
      },
      {
        "chord": "i",
        "seconds": 30.14
      },
      {
        "chord": "iv",
        "seconds": 31.17
      },
      {
        "chord": "♭III",
        "seconds": 32.21
      },
      {
        "chord": "♭VI",
        "seconds": 33.24
      }
    ],
    "endSeconds": 34.28
  },
  {
    "key": "F",
    "mode": "MINOR",
    "videoId": "hTWKbfoikeg",
    "name": "Smells Like Teen Spirit",
    "artist": "Nirvana",
    "chords": [
      {
        "chord": "i",
        "seconds": 59.07
      },
      {
        "chord": "iv",
        "seconds": 60.1
      },
      {
        "chord": "♭III",
        "seconds": 61.12
      },
      {
        "chord": "♭VI",
        "seconds": 62.15
      },
      {
        "chord": "i",
        "seconds": 63.17
      },
      {
        "chord": "iv",
        "seconds": 64.2
      },
      {
        "chord": "♭III",
        "seconds": 65.23
      },
      {
        "chord": "♭VI",
        "seconds": 66.25
      }
    ],
    "endSeconds": 67.28
  },
  {
    "key": "F#",
    "mode": "MINOR",
    "videoId": "Zi_XLOBDo_Y",
    "name": "Billie Jean",
    "artist": "Michael Jackson",
    "chords": [
      {
        "chord": "♭VI",
        "seconds": 71.08
      },
      {
        "chord": "i",
        "seconds": 73.15
      },
      {
        "chord": "♭VI",
        "seconds": 75.22
      },
      {
        "chord": "i",
        "seconds": 77.29
      },
      {
        "chord": "♭VI",
        "seconds": 79.36
      },
      {
        "chord": "i",
        "seconds": 81.43
      },
      {
        "chord": "♭VI",
        "seconds": 83.49
      },
      {
        "chord": "V",
        "seconds": 85.56
      }
    ],
    "endSeconds": 87.59
  },
  {
    "key": "Db",
    "mode": "MAJOR",
    "videoId": "1w7OgIMMRc4",
    "name": "Sweet Child O' Mine",
    "artist": "Guns N' Roses",
    chords: [
      {
        seconds: 31,
        chord: 'I'
      },
      {
        seconds: 34.5,
        chord: '♭VII'
      },
      {
        seconds: 38.5,
        chord: 'IV',
      },
      {
        seconds: 42,
        chord: 'I',
      },
    ],
    endSeconds: 46.2,
  },
  {
    "key": "Db",
    "mode": "MAJOR",
    "videoId": "1w7OgIMMRc4",
    "name": "Sweet Child O' Mine",
    "artist": "Guns N' Roses",
    chords: [
      {
        seconds: 61,
        chord: 'V'
      },
      {
        seconds: 63,
        chord: '♭VII',
      },
      {
        seconds: 65,
        chord: 'I',
      },
    ],
    endSeconds: 69,
  }
]
