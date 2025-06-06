import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("rates", "routes/rates.tsx"),
    route("about", "routes/about.tsx"),
    route("trainer", "routes/trainer.tsx")] satisfies RouteConfig;
