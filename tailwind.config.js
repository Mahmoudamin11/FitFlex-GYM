/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "main-blue": 'var(--main-blue)',
        "main-gray": 'var(--main-gray)',
        "main-orange": 'var(--main-orange)',
        "main-green": 'var(--main-green)',
        "main-black": 'var(--main-black)',
        "mid-black": 'var(--mid-black)',
        "mid-gray": 'var(--mid-gray)',
      },
      fontFamily: { 
        'mont': 'var(--font)'
      },
      boxShadow: { 
        'card': 'rgba(0, 0, 0, 0.2) 0px 5px 15px',
        'features': 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
      },
      backgroundImage: { 
        'onlineTrain': "url('/src/assets/image 5.png')",
        'person': "url('/src/assets/person.jpg')",
        'coach1': "url('/src/assets/coach1.jpg')",
        'coach2': "url('/src/assets/coach2.jpg')",
      },
      screens: { 
        '1290': '1290px',
        '1065': '1065px',
        '750': '750px',
        '700': '700px',
        '510': '510px',
        '427': '427px',
        '425': '425px',
        '410': '410px',
        '372': '372px',
      }
    },
  },
  plugins: [],
}

