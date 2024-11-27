# Frontend Assignment

Minimum styling was done per the directions but Tailwind was used and few custom colors added taken from the Bókun website. The original project was done with an approach focused on vanilla React features to show understanding of basic React. However after reviewing the code with my development coach they advised just leaning more heavily into NextJS.

This project is published to help other developers learn from and succeed on tech evals. Best of luck in your journeys. :)

## Setup

1. Create a .env file in the root then add key `API = "{demoAddress}/{assignedId}"`
2. `npm install` in the root folder
3. Run in terminal `npm run dev`

## Notes

Comments and notes have been added to reflect decisions made for the technical eval versus a user facing project.

# Bókun frontend assignment

Imagine you are setting up a code project for a brand new, super simple Tripadvisor/Bókun experiences site.

# Notes

- The frontend should be written in **React**.
- Feel free to choose any React framework or starting point.
- You don't have to make things look pretty, but we do encourage you to set up some style system/framework.
- After the project has been finished, you should **share the GitHub repository** with the `bokundev` user on GitHub.

---

# Requirements

The app should have the following pages.

## Experiences page

**URL**: `/` or `/experiences`

Should show a list/grid of all experiences added.

## Experience details page

**URL**: `/experiences/:experience_id`

Should show details about the experience.

## Create experience page\*\*

**URL**: `/experiences/new`

Should show a form that allows you to create a new experience.

## **Experience edit page**

**URL**: `/experiences/:experience_id/edit`

Should show a form that allows you to update an experience.

![TourSite](https://github.com/user-attachments/assets/21debdcf-368a-4885-86d1-ccbb257f0916)

## Review Feedback

I had the initial project reviewed by my development coach. This was the feedback they provided and was implemented.

### Package

- Add [Node Target Mapping](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping)

### EsLint

- Add additional linting rules for [typed linting](https://typescript-eslint.io/troubleshooting/typed-linting/)

### Experience Page

- Lean more into NextJS
- Remove client components and replace them with server components
- Remove use state here to allow server side rendering
- Replace axios with fetching. [Data Fetching in NextJS](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
- Get rid of the isLoading. We agree that just using loading.tsx would be better.
- Replaced useRouter and useParams hooks with Links and server params. [Linking and Navigating](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)

### New Page

- Use form and formData to take advantage of NextJS Actions. [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#passing-actions-as-props)

### Edit Page

- Create Form component and DRY code with New Page
- Replace click events with server actions
- Find way in Next to get route and params without hook so component can be rendered on the server. (Pages get a (params prop)[https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes] and [redirect](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#redirect-function) replaced useRouter)

### Move Folders

- Move Components and Type folders up to src directory so NextJS wont they they are part of the app

### Tests!

- Do snapshot testing with [Jest](https://nextjs.org/docs/app/building-your-application/testing/jest)

### Conclusion

Working through this with my developer coach who is more experienced in React was a positive learning experience. This projected gave me the opportunity to use NextJS features which I've not had the opportunity in my personal projects. Getting feedback from my development coach helped me turn a disappointing rejection into an opportunity. :)
