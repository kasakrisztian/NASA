export default class Kérés {
    private _ügyfélcíme: string;
    private _idő: string;
    private _fájl: string;
    private _állapotkód: string;
    private _méret: string;

    public get állapotkód(): string {
        return this._állapotkód;
    }

    public constructor(sor: string) {
        const segéd: string[] = sor.split("*");
        this._ügyfélcíme = segéd[0];
        this._idő = segéd[1];
        this._fájl = segéd[2];
        this._állapotkód = segéd[3].split(" ")[0];
        this._méret = segéd[3].split(" ")[1];
    }

    public get byteMéret(): number {
        let byte: number;
        if (this._méret == "-") byte = 0;
        else byte = parseInt(this._méret);
        return byte;
    }

    public get domain(): boolean {
        const utolsóKarakter: string = this._ügyfélcíme.slice(this._ügyfélcíme.length - 1);
        if (isNaN(parseInt(utolsóKarakter)) == true) return true;
        else return false;
    }
}
