/**
 * Every Chewy Bytes Limited app that is live and reachable on the App Store.
 *
 * Source of truth: the live App Store developer page
 * (apps.apple.com/gb/developer/chewy-bytes-limited/id1843487426). Each
 * `subtitle` is the verbatim App Store subtitle — it is not marketing copy
 * written for this site, and it must not be reworded here.
 *
 * Nothing in this file may be aspirational. If it isn't shipped and reachable,
 * it doesn't belong here.
 */

export const APP_STORE_DEVELOPER_URL =
  'https://apps.apple.com/gb/developer/chewy-bytes-limited/id1843487426';

export const PLAY_STORE_DEVELOPER_URL =
  'https://play.google.com/store/apps/dev?id=6653405290279914927';

/**
 * Google Play kill-switch.
 *
 * Kept as a switch rather than deleted. The Chewy Bytes Limited developer
 * profile and all of its apps were removed from Google Play on 12 August 2026
 * over an organisation address verification, and reinstated on 18 August —
 * during which every Play URL 404'd. A dead store link is worse than no link,
 * so if it happens again this is a one-line change.
 */
export const PLAY_STORE_LIVE = true;

export type App = {
  /** Matches the icon filename at /apps/<slug>.png. */
  slug: string;
  name: string;
  /** Verbatim App Store subtitle. Do not reword. */
  subtitle: string;
  /** The app's own website. */
  url: string;
  /** Apple's numeric App Store id. */
  appStoreId: string;
  /** Android package name — used to build the Play URL when PLAY_STORE_LIVE. */
  androidPackage: string;
};

export const apps: App[] = [
  {
    slug: 'parking-ticket-pal',
    name: 'Parking Ticket Pal',
    subtitle: 'Track, Appeal & Beat Your PCN',
    url: 'https://parkingticketpal.com',
    appStoreId: '6753653055',
    androidPackage: 'com.chewybytes.parkingticketpal.app',
  },
  {
    slug: 'chunky-crayon',
    name: 'Chunky Crayon',
    subtitle: 'Coloring pages kids dream up',
    url: 'https://chunkycrayon.com',
    appStoreId: '6757487905',
    androidPackage: 'com.chewybytes.chunkycrayon.app',
  },
  {
    slug: 'go-unbeaten',
    name: 'Go Unbeaten',
    subtitle: 'Perfect season. Five sports.',
    url: 'https://gounbeaten.com',
    appStoreId: '6779765181',
    androidPackage: 'com.chewybytes.gounbeaten.app',
  },
  {
    slug: 'titrra',
    name: 'Titrra',
    subtitle: 'Dose, side effects & weight',
    url: 'https://titrra.com',
    appStoreId: '6782397414',
    androidPackage: 'com.chewybytes.titrra.app',
  },
  {
    slug: 'genwel',
    name: 'Genwel',
    subtitle: 'Budget, bills & subscriptions',
    url: 'https://www.genwel.com',
    appStoreId: '6793246717',
    androidPackage: 'com.chewybytes.genwel.app',
  },
  {
    slug: 'coloring-habitat',
    name: 'Coloring Habitat',
    subtitle: 'Quiet pages to colour or print',
    url: 'https://coloringhabitat.com',
    appStoreId: '6793247216',
    androidPackage: 'com.chewybytes.coloringhabitat.app',
  },
  {
    slug: 'salt-mammal',
    name: 'Salt Mammal',
    subtitle: 'Addiction Support, No Shame',
    url: 'https://saltmammal.com',
    appStoreId: '6784111846',
    androidPackage: 'com.chewybytes.saltmammal.app',
  },
  {
    slug: 'outside-ir35-jobs',
    name: 'Outside IR35 Jobs',
    subtitle: 'UK Day Rate Contractor Board',
    url: 'https://outsideir35jobs.com',
    appStoreId: '6784110879',
    androidPackage: 'com.chewybytes.outsideir35jobs.app',
  },
  {
    slug: 'bump-circle',
    name: 'Bump Circle',
    subtitle: 'Midwife-led pregnancy weeks',
    url: 'https://bumpcircle.com',
    appStoreId: '6755447124',
    androidPackage: 'com.wellnesssupportgroup.bumpcircle.app',
  },
  {
    slug: 'tfc-calculator',
    name: 'TFC Calculator',
    subtitle: 'Tax-free top-up & cap tracker',
    url: 'https://tfccalculator.co.uk',
    appStoreId: '6753323659',
    androidPackage: 'com.chewybytes.tfccalculator',
  },
];

export const appStoreUrl = (app: App) =>
  `https://apps.apple.com/gb/app/id${app.appStoreId}`;

/** Returns null while PLAY_STORE_LIVE is false, so no dead link can render. */
export const playStoreUrl = (app: App) =>
  PLAY_STORE_LIVE
    ? `https://play.google.com/store/apps/details?id=${app.androidPackage}`
    : null;
