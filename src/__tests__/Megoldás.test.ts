import Megoldás from "../Megoldás";

describe("Megoldás osztály unit tesztek", () => {
    const instance: Megoldás = new Megoldás("NASAlog.txt");

    it("Megoldás osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Megoldás);
    });

    it("Kérések száma", async () => {
        expect(instance.kérésekSzáma).toBe(1636);
    });

    it("Összes méret", async () => {
        expect(instance.összesMéret).toBe(160342345);
    });

    it("Domain arány", async () => {
        expect(instance.domainArány).toBe(69.74327628361858);
    });
});
