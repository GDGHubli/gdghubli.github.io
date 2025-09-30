import { useEffect, useId, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import speaker1 from '../images/speaker1.jpg'; // Import Speaker image
import speaker2 from '../images/speaker2.jpg'; // Import Speaker image
import speaker3 from '../images/speaker3.jpg'; // Import Speaker image
import speaker4 from '../images/speaker4.jpg'; // Import Speaker image
import speaker5 from '../images/speaker5.jpg'; // Import Speaker image
import speaker6 from '../images/speaker6.jpg'; // Import Speaker image
import devfest from '../images/devfest.png'; // Import DevFest image


// The following components were likely defined elsewhere in the original project.
// I've created basic versions of them here to resolve the import errors.

const Container = ({ children, ...props }) => (
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-" {...props}>
    {children}
  </div>
)

const DiamondIcon = (props) => (
  <svg aria-hidden="true" viewBox="0 0 6 6" {...props}>
    <path
      d="M3 0L6 3L3 6L0 3L3 0Z"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
)

const days = [
  {
    name: 'Hackathon ',
    date: 'November 8',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Designer at Globex Corporation',
        image: speaker1,
      },
      {
        name: 'Jaquelin Isch',
        role: 'UX Design at InGen',
        image: speaker2,
      },
      {
        name: 'Dianne Guilianelli',
        role: 'General Manager at Initech',
        image: speaker3,
      },
    ],
  },
  {
    name: 'Devfest',
    date: 'November 9',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer at OCP',
        image: speaker1,
      },
      {
        name: 'Ibrahim Frasch',
        role: 'Programmer at Umbrella Corp',
        image: speaker2,
      },
      {
        name: 'Cathlene Burrage',
        role: 'Frontend Developer at Buy n Large',
        image: speaker3,
      },
    ],
  }
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl text-center lg:max-w-none lg:text-left">
          <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="lg:flex sm:grid-cols-1 items-center justify-center gap-x-4 lg:justify-start">
                <h2
                  id="speakers-title"
                  className="text-4xl font-bold tracking-tighter text-gray-800 dark:text-white sm:text-5xl"
                >
                  Speakers
                </h2>
                <p className="font-bold lg:pt-3 lg:pl-2 text-gray-400">X</p>
                <img src={devfest} alt="DevFest Logo" className="h-12 object-contain" />
              </div>
              <p className="mt-4 text-lg text-indigo-500 dark:text-indigo-400">
                Learn from industry experts and thought leaders.
              </p>
            </div>
            <a href="https://hackkarnataka.in" target="_blank" style={{"pointer-events": "none", "color": "#a0a0a0", "cursor": "default"}} rel="noopener noreferrer" className="bg-indigo-600 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shrink-0">
              Register for Devfest ( Registrations will open soon )
            </a>
          </div>
        </div>
        <TabGroup
          className="mt-14 grid grid-cols-1 items-start gap-x-48 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-blue-600 stroke-blue-600'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-indigo-600 dark:text-indigo-400'
                              : 'text-slate-500 dark:text-slate-400',
                          )}
                        >
                          <Tab className="data-selected:not-data-focus:outline-hidden">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-gray-800 dark:text-white"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <div className="relative lg:col-span-3">
            <TabPanels>
              {days.map((day) => (
                <TabPanel
                  key={day.dateTime}
                  className="grid grid-cols-1 gap-x-8 gap-y-10 data-selected:not-data-focus:outline-hidden sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                  unmount={false}
                >
                  {day.speakers.map((speaker, speakerIndex) => (
                    <div key={speakerIndex}>
                      <div className="group relative h-[17.5rem] transform overflow-hidden rounded-3xl">
                        <div
                          className={clsx(
                            'absolute top-0 right-4 bottom-6 left-0 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6',
                            [
                              'border-blue-300',
                              'border-indigo-300',
                              'border-sky-300',
                            ][speakerIndex % 3],
                          )}
                        />
                        <div
                          className="absolute inset-0 bg-indigo-50"
                          style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                        >
                          <img
                            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            src={speaker.image}
                            alt={speaker.name}
                          />
                        </div>
                      </div>
                      <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-800 dark:text-white">
                        {speaker.name}
                      </h3>
                      <p className="mt-1 text-base tracking-tight text-gray-600 dark:text-gray-400">
                        {speaker.role}
                      </p>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
            <div className="absolute inset-0 bg-black/70 dark:bg-gray-900/90 backdrop-blur-md flex items-center justify-center rounded-3xl z-10">
              <p className="text-2xl font-bold text-white dark:text-white text-center px-4">
                Stay tuned! Our speaker will be announced shortly
              </p>
            </div>
          </div>
        </TabGroup>
      </Container>
    </section>
  )
}
