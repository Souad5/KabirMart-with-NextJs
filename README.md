Here’s a ready-to-use **GitHub README.md template** for your KabirMart project:

````markdown
# KabirMart - Next.js E-commerce App

**Live Site:** [https://kabirmart.vercel.app](https://kabirmart.vercel.app)  
**GitHub Repository:** [https://github.com/Souad5/KabirMart-with-NextJs](https://github.com/Souad5/KabirMart-with-NextJs.git)

---

## Project Description

KabirMart is a simple e-commerce application built with **Next.js 15** (App Router) and **NextAuth.js** for authentication.  
Users can browse products, view product details, and authenticated users can add new products via a protected dashboard.

**Core Features:**
- Landing Page with Navbar, Hero, Product Highlights, and Footer  
- Public Product List and Product Details pages  
- Google authentication with NextAuth.js  
- Protected Add Product page (for logged-in users)  
- Dark/Light mode toggle  
- API Route handlers for product management  

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/Souad5/KabirMart-with-NextJs.git
cd kabirmart
````

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env.local` file**

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_random_secure_string
NEXTAUTH_URL=http://localhost:3000
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open in browser**

```
http://localhost:3000
```

---

## Route Summary

| Route                    | Description                           | Access                                 |
| ------------------------ | ------------------------------------- | -------------------------------------- |
| `/`                      | Landing Page                          | Public                                 |
| `/productslist`          | Product List Page                     | Public                                 |
| `/productslist/[id]`     | Product Details Page                  | Public                                 |
| `/login`                 | Login Page (NextAuth.js Google login) | Public                                 |
| `/dashboard/add-product` | Add Product Page                      | Protected (requires login)             |
| `/api/products`          | API for fetching/adding products      | Public/Protected (POST requires login) |

---

## Notes

* The backend uses **Next.js Route Handlers** for fetching and creating products.
* The Add Product form shows **loading spinner** and **toast messages** for better UX.
* Dark/Light mode is fully supported across pages.

---

## Live Demo

Check out the live site deployed on Vercel: [https://kabirmart.vercel.app](https://kabirmart.vercel.app)

```

---

