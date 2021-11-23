# IconSax Landing page

Starting server
===============

1.  Extract the folder iconsax
2.  Open it using a command line prompt

```
cd /[dir]/iconsax
```
3.  Install dependencies

```
npm install
```
4.  Run

```
npm run start
```

Concept
-------

The idea behind this project was to make a interactive, useful and beautiful Icon Library landing page.

  

CSS Classes
-----------

The css classes were made by using Sass and feature: text-control, color control, flexbox alignment, positioning, and design patterns.

### Text control

To ensure a great visual communication, we need to folow visual hiearchy rules. To do so, we need to use different font weights, different sizes and spacing in a text.

### Color control

Different colors create contrast in a design, but they need to have visual consistency. This can be made by using variations of a tone, like: saturation, opacity, shades and tints.

### Alignment and positioning

Modern web apps usually use flexbox to align elements inside them. Also, they need to change according to the viewport of the user. To to so, we can create media queryes for each positioning feature (rows, displays, aligns, etc.)

### Design patterns

The design pattern was build under the concepts of **Glassmorphism** and **Neon,** adding colored box shadows, transparent gradient backgrounds and borders to elements.

  

Dark/Light mode
---------------

Dark and light mode are controlled using JavaScript and Nuxt 3 useState function.

To ensure customization, instead of making `theme-light` and `theme-dark` classes, it was decided to use a global variable to control components colors.

Also, the script checkes for navigator user preference (prefers-color-scheme) before loading and saves light and dark mode in Local Storage.

  

Icons
-----

The icon library was imported from IconSax v1.0, and downloaded as a SVG folder structure.

The icons are displayed as a backgorund-mask for css with aspect-ratio = 1.

This allows you to put any background color, gradient or image to your icon, and also allows you to morph between icons.

The downside is that backgrounds usually load slower than fonts.

  

IconSax rebranding
------------------

I took the liberty to change IconSax's logo because it was using VueSax logo. They are complementary to each other, but you dont need VueSax Framework to install IconSax.

My logic was the following:

*   Vue, VueSax and a lot of frameworks/libs uses a single letter for the logo.
*   IconSax initials are I and S
*   What if we mix both

![](https://t3132850.p.clickup-attachments.com/t3132850/b5f1134b-8129-4002-b9e6-279db9465ebb/image.png)

  

And this was the result:

  

![](https://t3132850.p.clickup-attachments.com/t3132850/41e7a2cb-27c2-417e-89d5-e1ce01dec8ab/image.png)