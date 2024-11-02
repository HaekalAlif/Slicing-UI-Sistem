import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "@/views/Blog.vue";
import About from "@/views/About.vue";
import BlogPost from "@/views/BlogPost.vue";
import Contact from "@/views/Contact.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import Author from "@/views/Author.vue";
import Category from "@/views/Category.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/blog-post",
      name: "blogpost",
      component: BlogPost,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/privacy-policy",
      name: "privacypolicy",
      component: PrivacyPolicy,
    },
    {
      path: "/author",
      name: "author",
      component: Author,
    },
    {
      path: "/category",
      name: "category",
      component: Category,
    },
  ],
});

export default router;
