import { Language } from "./contracts/language.js";
import { DnaBases } from "./types.js";

export class DNACodeLanguage implements Language {
    private _charset: Set<DnaBases> = new Set(['A', 'C', 'G', 'T']);

    
    get charset() {
        return this._charset;
    }

    isCompatibleToCharset(message: string): boolean {
        const messageChars = message.split('');
        const allowedChars: string[] = Array.from(this.charset.values());
        const isCompatible = messageChars.every(ch => allowedChars.includes(ch));
        return isCompatible;
    }
}