# WEB103 Prework - CreatorVerse

Submitted by: **Hoang Minh Tam Dang (Dahomita)**

About this web app: **CreatorVerse is a React-based web application that allows users to discover, manage, and share their favorite content creators. Users can add, view, edit, and delete creators from various platforms including Twitch, YouTube, Instagram, TikTok, and more. Each creator profile includes their name, channel URL, description, and an optional image. The app features a beautiful card-based interface with smooth animations and a modern gradient design.**

Time spent: **48** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->

- [x] **A logical component structure in React is used to create the frontend of the app**

  - Created `CreatorCard` component for displaying individual creators
  - Organized pages in `pages/` directory: `ShowCreators`, `ViewCreator`, `AddCreator`, `EditCreator`
  - Separated concerns with reusable components

- [x] **At least five content creators are displayed on the homepage of the app**

  - `ShowCreators` page fetches all creators from Supabase database
  - Displays creators in a responsive grid layout
  - Supports displaying any number of creators (minimum 5 required)

- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**

  - `CreatorCard` component displays name, description, and external link
  - Each card includes a "Visit Channel" button that opens the creator's URL in a new tab

- [x] **API calls use the async/await design pattern via Axios or fetch()**

  - All database operations use async/await with Supabase client
  - `fetchCreators()`, `fetchCreator()`, `handleSubmit()`, `handleDelete()` all use async/await pattern

- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**

  - Creator name in `CreatorCard` is a clickable link to `/view/:id`
  - `ViewCreator` page displays full creator details including name, URL, description, and image

- [x] **Each content creator has their own unique URL**

  - React Router configured with `/view/:id` route
  - Each creator has a unique ID-based URL path

- [x] **The user can edit a content creator to change their name, url, or description**

  - `EditCreator` page with pre-filled form
  - Form allows editing name, URL, description, and imageURL
  - Updates are saved to Supabase database

- [x] **The user can delete a content creator**

  - Delete buttons available on homepage cards and detail page
  - Confirmation dialog before deletion
  - Deletes from Supabase database and refreshes the list

- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**
  - `AddCreator` page with form for name, URL, description, and optional imageURL
  - Form validation for required fields
  - New creators are immediately displayed on homepage after creation

The following **optional** features are implemented:

- [x] **Picocss is used to style HTML elements**

  - PicoCSS imported in `main.jsx`
  - Semantic HTML elements styled with PicoCSS classes
  - Buttons use PicoCSS classes (primary, secondary, contrast)

- [x] **The content creator items are displayed in a creative format, like cards instead of a list**

  - Beautiful card-based layout using `<article>` elements
  - Responsive grid layout that adapts to screen size
  - Cards feature hover animations, shadows, and gradient accents

- [x] **An image of each content creator is shown on their content creator card**
  - Optional `imageURL` field in database
  - Images displayed at top of each creator card
  - Images have hover zoom effect and rounded corners

The following **additional** features are implemented:

- [x] **Enhanced CSS styling with modern design**

  - Beautiful gradient background (purple/blue theme)
  - Glassmorphism effect on main container
  - Smooth animations and transitions throughout
  - Hover effects on cards, buttons, and links

- [x] **Improved user experience**

  - Loading states with animated dots
  - Empty state message when no creators exist
  - Navigation links with back buttons on all pages
  - Form focus states with visual feedback
  - Responsive design for mobile and desktop

- [x] **Visual enhancements**

  - Gradient text for main heading
  - Card hover animations (lift and shadow effects)
  - Image zoom on hover
  - Icon emojis for better visual cues
  - Consistent color scheme and spacing

- [x] **Error handling**
  - Try-catch blocks for all async operations
  - User-friendly error messages via alerts
  - Graceful handling of missing data

## Video Walkthrough

Here's a walkthrough of implemented required features:

[![Video Walkthrough](https://img.youtube.com/vi/syd_ZKzwQXg/0.jpg)](https://youtu.be/syd_ZKzwQXg)

**Click the thumbnail above to watch the video walkthrough on YouTube**

Video created with screen recording and uploaded to YouTube.

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

**Challenges encountered:**

- Initially had issues with React Router imports and route configuration - resolved by ensuring all necessary imports were in place
- Prop destructuring in `CreatorCard` component needed correction from `function CreatorCard(creator)` to `function CreatorCard({ creator })`
- CSS styling required careful coordination between PicoCSS defaults and custom styles to achieve the desired modern look

**Technical decisions:**

- Used Supabase for backend/database instead of traditional REST API - provides real-time capabilities and easy setup
- Implemented async/await pattern throughout for better error handling and code readability
- Chose PicoCSS for minimal, semantic styling that works well with custom enhancements
- Used React Router for client-side routing with unique URLs for each creator

**Future improvements:**

- Could add search/filter functionality for creators
- Could implement pagination for large numbers of creators
- Could add image upload functionality instead of URL input
- Could add categories/tags for creators

## License

Copyright [2025] [Hoang Minh Tam Dang]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
