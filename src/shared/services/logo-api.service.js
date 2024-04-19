export class LogoApiServices {
    getUrlToLogo (source) : string {
        return `https://logo.clearbit/${ new URL(source.url).host}`;
    }
}