This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Assumptions or Design Decisions

Routing: Next.js' built-in routing was used to handle page navigation. Each page corresponds to a route based on its file name in the app directory.
State Management: React's built-in useState and useEffect hooks are used for local state management. No global state management library (e.g., Redux) was deemed necessary for the current scope.
Performance Optimization: We leveraged Next.js' built-in image optimization and font optimization features to improve the app's performance.

Bonus Points
animation: animation added to button and when we collapse the pdf image .
User Gratification:Congratulatory messages for good scores Encouraging feedback for areas of improvement used toast (shadcn) for doing this

challenge faced:
challenge faced in uploading pdf ,taking help from google and chat gpt and library documentation
