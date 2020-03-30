import Kérés from "../Kérés";

describe("Kérés osztály unit tesztek: ", () => {
    const instance: Kérés = new Kérés("nccsmm.gsfc.nasa.gov*20/Jul/1995:00:55:34*GET /shuttle/technology/images/et_1.jpg*200 144114");

    it("Kérés osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Kérés);
    });

    it("Állapotkód", async () => {
        expect(instance.állapotkód).toBe("200");
    });

    it("Byte mérete", async () => {
        expect(instance.byteMéret).toBe(144114);
    });

    it("Domain cím-e", async () => {
        expect(instance.domain).toBe(true);
    });
});
