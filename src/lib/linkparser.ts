export type LinkType = 'youtube' | 'twitter' | 'linkedin' | 'unknown';

export interface ParsedLink {
    url: string;
    type: LinkType;
}

const YOUTUBE_REGEX = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/i;
const TWITTER_REGEX = /^(https?:\/\/)?(www\.)?twitter\.com\/.+$/i;
const LINKEDIN_REGEX = /^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/i;
    
export function parseLink(url: string): ParsedLink {
    let type: LinkType = 'unknown';
    if (YOUTUBE_REGEX.test(url)) {
        type = 'youtube';
    } else if (TWITTER_REGEX.test(url)) {
        type = 'twitter';
    } else if (LINKEDIN_REGEX.test(url)) {
        type = 'linkedin';
    }
    return { url, type };
}

export function parseLinksFromDatabase(links: string[]): ParsedLink[] {
    return links.map(parseLink);
}