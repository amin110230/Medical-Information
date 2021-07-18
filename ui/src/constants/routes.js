// export const ROOT = "/";
// export const HOME = "/home";
// export const REGISTER = "/register";
// export const ABOUT= "/about";
// export const CONTACT_US = "/contact-us";
// export const FAQ = "/faq";
// export const WELCOME = "/welcome";
// export const WELCOME_PUBLIC_SEARCH_DATASETS = "/welcome/public-search/datasets";
// export const WELCOME_PUBLIC_SEARCH_GROUPS = "/welcome/public-search/groups";
// export const WELCOME_PUBLIC_SEARCH_SOFTWARE = "/welcome/public-search/software";
// export const WELCOME_PUBLIC_SEARCH_PLUGIN_OVERVIEW = "/welcome/public-search/plugin/overview";
// export const WELCOME_PUBLIC_SEARCH_PLUGIN_CONFIGURATION = "/welcome/public-search/plugin/configuration";
// export const WELCOME_PUBLIC_SEARCH_PLUGIN_EVENTS = "/welcome/public-search/plugin/events";
// export const WELCOME_PUBLIC_SEARCH_PLUGIN_API = "/welcome/public-search/plugin/api";
// export const WELCOME_PUBLIC_SEARCH_PARAMS = "/welcome/public-search/:data";
// export const WELCOME_PUBLIC_SEARCH_PLUGIN_PARAMS = "/welcome/public-search/plugin/:slug";
// export const WELCOME_PUBLIC_SEARCH_PLUGIN = "/welcome/public-search/plugin";
// export const WELCOME_TICKET = "/welcome/:ticket?";
// export const HOME_DATASETS = "/home/datasets";
// export const HOME_GROUPS = "/home/groups";
// export const HOME_USERS = "/home/users";
// export const HOME_SOFTWARE = "/home/software";
// export const HOME_PLUGIN_OVERVIEW = "/home/plugin/overview";
// export const HOME_PLUGIN_CONFIGURATION = "/home/plugin/configuration";
// export const HOME_PLUGIN_EVENTS = "/home/plugin/events";
// export const HOME_PLUGIN_API = "/home/plugin/api";
// export const HOME_PARAMS = "/home/:data";
// export const HOME_PLUGIN_PARAMS = "/home/plugin/:slug";
// export const HOME_PLUGIN = "/home/plugin";

export const ROOT = "/";
export const HOME = "/home";
export const REGISTER = "/register";
export const ABOUT = "/about";
export const CONTACT_US = "/contact-us";
export const FAQ = "/faq";
export const WELCOME = "/welcome";
export const PAGE404 = "/404";
export const PAGE422 = "/422";
export const JBROWSE = "/jbrowse";

export const WELCOME_PUBLIC_SEARCH = "/public-search";
export const WELCOME_PUBLIC_SEARCH_SLASH = "/public-search/";
export const WELCOME_PUBLIC_SEARCH_DATASETS = "/public-search/datasets";
export const WELCOME_PUBLIC_SEARCH_GROUPS = "/public-search/groups";
export const WELCOME_PUBLIC_SEARCH_SOFTWARE = "/public-search/software";
export const WELCOME_PUBLIC_SEARCH_PLUGIN_OVERVIEW =
  "/public-search/plugin/overview";
export const WELCOME_PUBLIC_SEARCH_PLUGIN_CONFIGURATION =
  "/public-search/plugin/configuration";
export const WELCOME_PUBLIC_SEARCH_PLUGIN_EVENTS =
  "/public-search/plugin/events";
export const WELCOME_PUBLIC_SEARCH_PLUGIN_API = "/public-search/plugin/api";
export const WELCOME_PUBLIC_SEARCH_PARAMS = "/public-search/:data";
export const WELCOME_PUBLIC_SEARCH_PLUGIN_PARAMS =
  "/public-search/plugin/:slug";
export const WELCOME_PUBLIC_SEARCH_PLUGIN = "/public-search/plugin";
export const WELCOME_PUBLIC_SEARCH_PLUGIN_SLASH = "/public-search/plugin/";

export const WELCOME_TICKET = "/welcome/:ticket?";

export const HOME_DATASETS = "/datasets";
export const HOME_GROUPS = "/groups";
export const HOME_USERS = "/users";
export const HOME_SOFTWARE = "/software";
export const HOME_PLUGIN_OVERVIEW = "/plugin/overview";
export const HOME_PLUGIN_CONFIGURATION = "/plugin/configuration";
export const HOME_PLUGIN_EVENTS = "/plugin/events";
export const HOME_PLUGIN_API = "/plugin/api";
export const HOME_PARAMS = "/:data";
export const HOME_PLUGIN_PARAMS = "/plugin/:slug";

export const HOME_PLUGIN = "/plugin";
export const HOME_PLUGIN_SLASH = "/plugin/";


export const PAGE_NOT_FOUND = "/404"

export const NOT_AUTHENTICATED_ROUTES = [
  WELCOME_PUBLIC_SEARCH_DATASETS,
  WELCOME_PUBLIC_SEARCH_GROUPS,
  WELCOME_PUBLIC_SEARCH_SOFTWARE,
  WELCOME_PUBLIC_SEARCH_PLUGIN_OVERVIEW,
  WELCOME_PUBLIC_SEARCH_PLUGIN_CONFIGURATION,
  WELCOME_PUBLIC_SEARCH_PLUGIN_EVENTS,
  WELCOME_PUBLIC_SEARCH_PLUGIN_API
];

export const NOT_AUTHENTICATED_PUBLIC_SEARCH_ROUTES = [
    WELCOME_PUBLIC_SEARCH_SLASH,
    WELCOME_PUBLIC_SEARCH
];

export const NOT_AUTHENTICATED_PUBLIC_SEARCH_PLUGIN_ROUTES = [
    WELCOME_PUBLIC_SEARCH_PLUGIN,
    WELCOME_PUBLIC_SEARCH_PLUGIN_SLASH
];

export const AUTHENTICATED_ROUTES = [
    HOME_DATASETS,
    HOME_GROUPS,
    HOME_USERS,
    HOME_SOFTWARE,
    HOME_PLUGIN_OVERVIEW,
    HOME_PLUGIN_CONFIGURATION,
    HOME_PLUGIN_EVENTS,
    HOME_PLUGIN_API
];

export const AUTHENTICATED_PLUGIN_ROUTES = [
    HOME_PLUGIN,
   HOME_PLUGIN_SLASH
];

export const COMMON_ROUTES = [
  ABOUT, CONTACT_US, FAQ
]
