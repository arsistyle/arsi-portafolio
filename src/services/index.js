import wpapi from 'wpapi';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
// import { Zoom } from 'swiper';
const wp_base = process.env.REACT_APP_BASE_URL;

const WP = new wpapi({
  endpoint: wp_base,
});

export async function getGlobal() {
  WP.global = WP.registerRoute('acf/v3/options', '/global/');
  try {
    const response = await WP.global()
      .get()
      .then((x) => x);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getHeader() {
  WP.header = WP.registerRoute('acf/v3/options', '/header/');
  try {
    const response = await WP.header()
      .get()
      .then((x) => x);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getFooter() {
  WP.footer = WP.registerRoute('acf/v3/options', '/footer/');
  try {
    const response = await WP.footer()
      .get()
      .then((x) => x);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getMenu(menu) {
  WP.menu = WP.registerRoute('menus/v1/menus', `/${menu}/`);
  try {
    const response = await WP.menu()
      .get()
      .then((x) => x);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getPage(slug) {
  WP.page = WP.registerRoute('wp/v2', `/pages/`, {
    params: ['slug'],
  });
  try {
    const response = await WP.page()
      .slug(slug)
      .get()
      .then((x) => x);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getHero() {
  WP.hero = WP.registerRoute('acf/v3/options', '/hero/');
  try {
    const response = await WP.hero()
      .get()
      .then((x) => x);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getProjects(slug, total = 100, cat_slug) {
  WP.projects = WP.registerRoute('wp/v2', `/proyectos/`, {
    params: ['categories', 'per_page', 'slug'],
  });

  try {
    let response;
    if (cat_slug) {
      response = await WP.categories()
        .slug(cat_slug)
        .then((x) => {
          if (!x.length) {
            throw new Error(`No category found for category "${cat_slug}"`);
          }
          return WP.projects().categories(x[0].id).per_page(6);
        });
      console.log(response);
      return response;
    }
    if (slug) {
      response = await WP.projects()
        .per_page(total)
        .slug(slug)
        .get()
        .then((x) => x);
      return response;
    }

    response = await WP.projects()
      .per_page(total)
      .get()
      .then((x) => x);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getProject(slug) {
  WP.proyecto = WP.registerRoute('wp/v2', `/proyectos/`, {
    params: ['slug'],
  });
  try {
    const response = await WP.proyecto()
      .slug(slug)
      .get()
      .then((x) => x);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function postContact({ nombre, email, mensaje }) {
  WP.contact = WP.registerRoute('wp/v2', '/comments');
  try {
    const data = await WP.contact()
      .create({
        author_name: nombre,
        author_email: email,
        content: mensaje,
        post: 64,
      })
      .then((x) => x);
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function getShop(items) {
  const consumerKey = process.env.REACT_APP_SHOP_KEY;
  const consumerSecret = process.env.REACT_APP_SHOP_SECRET;
  const url = process.env.REACT_APP_SHOP_URL;

  const WOO = new WooCommerceRestApi({
    url,
    consumerKey,
    consumerSecret,
    version: 'wc/v3',
  });

  try {
    return WOO.get('products').then((x) => x.data.filter(x => x.status === 'publish'));
  } catch (e) {
    console.log(e);
  }
}
