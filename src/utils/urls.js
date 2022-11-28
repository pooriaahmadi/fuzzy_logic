import { LINKS } from "../components/Menu";

export const isLinkActive = ({ url, targetUrl }) => {
    return url === targetUrl;
};

export const nextLink = (currentUrl) => {
    for (let i = 0; i < LINKS.length; i++) {
        const link = LINKS[i].link;
        if (link === currentUrl) {
            if (i + 1 === LINKS.length) break;

            return LINKS[i + 1].link;
        }
    }
    return currentUrl;
};

export const previousLink = (currentUrl) => {
    for (let i = 0; i < LINKS.length; i++) {
        const link = LINKS[i].link;
        if (link === currentUrl) {
            if (i === 0) break;

            return LINKS[i - 1].link;
        }
    }
    return currentUrl;
};
