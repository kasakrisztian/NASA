import Kérés from "./Kérés";
import fs from "fs";

export default class Megoldás {
    private _kérések: Kérés[] = [];

    public get kérésekSzáma(): number {
        return this._kérések.length;
    }

    public constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor: string = i.trim();
                if (aktSor.length > 0) this._kérések.push(new Kérés(aktSor));
            });
    }

    public get összesMéret(): number {
        let byteÖsszeg = 0;
        for (const i of this._kérések) {
            byteÖsszeg += i.byteMéret;
        }

        return byteÖsszeg;
    }

    public get domainArány(): number {
        let domaindarabszám = 0;
        for (const i of this._kérések) {
            if (i.domain == true) domaindarabszám++;
        }
        return (domaindarabszám / this.kérésekSzáma) * 100;
    }

    public get állapotKódStatisztika(): Map<string, number> {
        const statisztikaMap: Map<string, number> = new Map<string, number>();
        this._kérések.forEach(i => {
            if (statisztikaMap.has(i.állapotkód)) {
                statisztikaMap.set(i.állapotkód, (statisztikaMap.get(i.állapotkód) as number) + 1);
            } else {
                statisztikaMap.set(i.állapotkód, 1);
            }
        });

        return statisztikaMap;
    }
}
