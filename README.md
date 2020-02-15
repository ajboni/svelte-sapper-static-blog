# WIP!

A responsive static blog based on https://github.com/sveltejs/sapper-template

Features:
- svelte + sapper + tailwindcss
- Static, no server needed
- Write posts in common markdown
- Image support
- Filter posts by tags.


### Writing posts
Create posts in `static/posts` folder. The post should be a markdown file with assets links relative to `/static/`  
Post are markdown files parsed with [gray-matter](https://github.com/jonschlinkert/gray-matter)
"Read more" button is added after `---` 

#### Example post:

```Markdown
---
title: post 1
slug: post-1-slug
tags: 
  - tag1
  - tag2
---
# Caput avus pariter probat formatus quattuor hace 

## Naturae superasse imagine    

aLorem markdownum fecit: oscula partim, laevaque, cum sedit obiectat Cressa ante
in sunt, pertimuit, contingere. Mecum sanguine Baccheaque cum **Parnasos** longe
vicibus et **nostri antra**, cum audiat humum gravitate Gorgonis ignavis
Circaea? 
---
Ad cycnis regentis Cerastae vulneribus maximus quod, gaudet mediis
adpellare rabies, incurvae, viri fuit! Ego navigiis senis ruitque Euboicas;
barbaque me dei non faciunt. **Tibi resurgere primum** Cepheus Tyrrhenaque
incidit, cognovi pronus exstructas viribus luce.

![alt](1.jpeg)
```

### Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
cd my-app
npm install 
npm run dev
```
