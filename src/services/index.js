import wpapi from 'wpapi';
const wp_base = process.env.REACT_APP_BASE_URL;

const WP = new wpapi({
  endpoint: wp_base,
});

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
