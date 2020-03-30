import fs from "fs";
import http from "http";
import Megoldás from "./Megoldás";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>NASA</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->
        const megoldás = new Megoldás("NASAlog.txt");

        // 5. feladat
        res.write(`5. feladat: Kérések száma: ${megoldás.kérésekSzáma}\n`);

        // 6. feladat
        res.write(`6. feladat: Válaszok összes mérete: ${megoldás.összesMéret} byte\n`);

        //8. feladat
        res.write(`8. feladat: Domain-es kérések: ${megoldás.domainArány.toFixed(2)}%\n`);

        //9. feladat
        res.write("9. feladat: Statisztika:\n");
        for (const elem of megoldás.állapotKódStatisztika) {
            res.write(`\t${elem[0]}: ${elem[1]} db\n`);
        }
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
